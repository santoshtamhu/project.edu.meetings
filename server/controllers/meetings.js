const { mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

// FETCH MEETINGS
const fetchMeetings = async (req, res) => {
  const filter = req.query.filter || "all"; // default to "all"
  const sort_by = req.query.sort_by || "date"; // default to "date"
  let page = parseInt(req.query.page) || 1; // default to page 1
  let per_page = parseInt(req.query.per_page) || 5; // default to 5 items per page

  // getting current month and the day
  const currentMonth = new Date().getMonth() + 1; // getMonth() starts months from 0 - 11
  const currentDay = new Date().getDate();

  // FILTERING
  let filterOptions = {};
  let sortOptions = {};
  if (filter === "soon") {
    sortOptions = { month: 1, day: 1 }; // sort by upcoming meetings first only if filter is "soon"

    // "$or" operator to specify multiple conditions
    filterOptions.$or = [
      { month: currentMonth, day: { $gte: currentDay } }, // Current month's meetings with day >= currentDay
      { month: { $gt: currentMonth } }, // Meetings in future months
    ];
  } else if (filter !== "all") {
    filterOptions[filter] = true;
  }

  sortOptions[sort_by] = 1; // default to ascending order

  console.log(filterOptions);
  console.log(sortOptions);

  const startIndex = (page - 1) * per_page;
  const endIndex = startIndex + per_page;

  try {
    const results = {};
    const totalMeetings = await Meeting.countDocuments(filterOptions);

    let totalPages = Math.floor(totalMeetings / per_page) + 1;

    if (totalMeetings % per_page === 0) {
      totalPages = Math.floor(totalMeetings / per_page); // if divisible do not add 1
    }

    // if there's no meetings leave metadata values to "0"
    if (totalMeetings === 0) {
      totalPages = 0;
      page = 0;
      per_page = 0;
    }

    // inserts a property named "metadata" that shows all the metadata of the documents
    results.metadata = {
      totalMeetings,
      totalPages,
      page,
      per_page,
    };

    // inserts "next" property to the "metadata" object until there's no next page
    if (endIndex < totalMeetings) {
      results.metadata.nextPage = page + 1;
    }

    // inserts "previous" property to the "metadata" object until there's no preivous page
    if (startIndex > 0) {
      results.metadata.prevPage = page - 1;
    }

    results.meetings = await Meeting.find(filterOptions)
      .sort(sortOptions)
      .skip((page - 1) * per_page) // skips the initial specified numbers of meetings and returns the rest
      .limit(per_page); // returns the specified number of meetings per page

    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

// CREATE A MEETING
const createMeeting = async (req, res) => {
  const meeting = req.body;

  const monthNumbers = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
  };

  meeting.month = monthNumbers[meeting.month.toUpperCase()]; // converting month names to integers

  await Meeting.create(meeting);
  res.send(meeting);
};

// DELETE A MEETING
const deleteMeeting = async (req, res, next) => {
  try {
    let ObjectId = mongoose.Types.ObjectId;
    if (!ObjectId.isValid(req.params._id)) {
      return res.sendStatus(404);
    }
    let matched = await Meeting.findById(req.params._id);
    if (!matched) {
      return res.sendStatus(404);
    }
    await Meeting.findByIdAndDelete(req.params._id);
    res.send("meeting deleted successfully!");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
};

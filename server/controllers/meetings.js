const Meeting = require("../models/meeting");
const cloudinary = require("../utils/cloudinary");

// FETCH MEETINGS

const fetchMeetings = async (req, res, next) => {
  const filter = req.query.filter || "all"; // default to "all"
  let page = parseInt(req.query.page) || 1; // default to page 1
  let per_page = parseInt(req.query.per_page) || 25; // default to 5 items per page

  // getting current month and the day
  const currentMonth = new Date().getMonth() + 1; // getMonth() starts months from 0 - 11
  const currentDay = new Date().getDate();

  const sort = { month: 1, day: 1 }; // sort by "month" and "day"
  let filterOptions = {};

  if (filter == "all") {
    // "$or" operator to specify multiple conditions
    filterOptions.$or = [
      { month: currentMonth, day: { $gte: currentDay } }, // Current month's meetings with day >= currentDay
      { month: { $gt: currentMonth } }, // Meetings in future months
    ];
  } else if (filter == "soon") {
    filterOptions.month = currentMonth;
    filterOptions.day = { $gte: currentDay };
  } else {
    filterOptions[filter] = true;
  }

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
      .sort(sort)
      .skip((page - 1) * per_page) // skips the initial specified numbers of meetings and returns the rest
      .limit(per_page); // returns the specified number of meetings per page

    res.json(results);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// FETCH SINGLE MEETING

const fetchSingleMeeting = async (req, res, next) => {
  try {
    const meeting = await Meeting.findById(req.params._id);
    res.json(meeting);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// CREATE MEETING
const createMeeting = async (req, res, next) => {
  try {
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }

    let meeting = req.body;

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

    meeting.month = monthNumbers[meeting.month?.toUpperCase()]; // converting month names to integers

    meeting = await Meeting.create({
      ...meeting,
      image: {
        url: result ? result.secure_url : "",
      },
    });

    res.json(meeting);
  } catch (err) {
    console.log([err.message, err.error]);
    next(err);
  }
};

// DELETE A MEETING

const deleteMeeting = async (req, res, next) => {
  try {
    await Meeting.findByIdAndDelete(req.params._id);
    res.send("meeting deleted successfully!");
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
module.exports = {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
  fetchSingleMeeting,
};

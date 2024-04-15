const { mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

// FETCH MEETINGS
const fetchMeetings = async (req, res) => {
  const filter = req.query.filter || "all"; // default to "all"
  let page = parseInt(req.query.page) || 1; // default to page 1
  let per_page = parseInt(req.query.per_page) || 5; // default to 5 items per page

  // getting current month and the day
  const currentMonth = new Date().getMonth() + 1; // getMonth() starts the month with 0 to 11
  const currentDay = new Date().getDate();

  // FILTERING
  let filterOptions = {};
  if (filter === "soon") {
    filterOptions.month = currentMonth;
    filterOptions.day = { $gte: currentDay }; // filters the documents that has the "day" property greater or equal to the "currentDay", hence, the meetings that are coming soon.
  } else if (filter !== "all") {
    filterOptions[filter] = true;
  }
  console.log(filterOptions);

  const startIndex = (page - 1) * per_page;
  const endIndex = startIndex + per_page;

  try {
    const results = {};
    const totalMeetings = await Meeting.countDocuments(filterOptions);

    let totalPages;
    if (totalMeetings === 0) {
      totalPages = 0;
      page = 0;
      per_page = 0;
    } else {
      totalPages = Math.floor(totalMeetings / per_page) + 1;
    }

    // inserts a property named "metadata" that shows all the metadata of the documents
    results.metadata = {
      totalMeetings,
      totalPages,
      page,
      per_page,
    };

    // inserts "next" object to the "results" object until there's no next page
    if (endIndex < totalMeetings) {
      results.metadata.nextPage = page + 1;
    }

    // inserts "previous" object to the "results" object until there's no preivous page
    if (startIndex > 0) {
      results.metadata.prevPage = page - 1;
    }

    results.meetings = await Meeting.find(filterOptions)
      .skip((page - 1) * per_page)
      .limit(per_page);

    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

// CREATE A MEETING
const createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
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

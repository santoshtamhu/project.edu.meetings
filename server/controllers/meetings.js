const { mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

const fetchMeetings = async (req, res) => {
  const meetings = await Meeting.find({});
  const total = meetings.length;

  const page = parseInt(req.query.page) || 1;
  const per_page = parseInt(req.query.per_page) || 5;

  const startIndex = (page - 1) * per_page;
  const endIndex = startIndex + per_page;

  const results = {};

  results.metadata = {
    total,
    page,
    per_page,
  };

  if (endIndex < meetings.length) {
    results.next = {
      page: page + 1,
      per_page,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      per_page,
    };
  }

  results.meetings = meetings.slice(startIndex, endIndex);

  res.send(results);
};

const createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
  res.send(meeting);
};

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

/* - `const results = {};`: This line creates an empty object named `results` that will store the data to be sent back in the response.

- `if (endIndex < items.length) { ... }`: This conditional block checks if there are more items available after the current page.
    - `results.next = { ... };`: If there are more items, a `next` property is added to the `results` object. This `next` property holds an object with information about the next page, including its number (`page: page + 1`) and the `limit` (number of items per page).

- `if (startIndex > 0) { ... }`: This conditional block checks if the current page is not the first page.
    - `results.previous = { ... };`: If the current page is not the first one, a `previous` property is added to the `results` object. This `previous` property holds an object with information about the previous page, including its number (`page: page - 1`) and the `limit` (number of items per page).

- `results.results = items.slice(startIndex, endIndex);`: This line retrieves the actual data for the current page using the `slice` method on the `items` array. It provides the `startIndex` and `endIndex` calculated earlier to extract the relevant portion of the data. */

/* 

startIndex = 9 
0




*/

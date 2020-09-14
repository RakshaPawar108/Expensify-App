import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";
import moment from "moment";

// Set start date testing
test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

// Set end date testing
test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// sort by date testing
test("Should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

// Sort by amount testing
test("Should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

// Set text filter testing with passed value
test("Should generate set text filter action object with passed value", () => {
  const action = setTextFilter("Rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Rent",
  });
});

// Set text filter testing with default value
test("Should generate set text filter action object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

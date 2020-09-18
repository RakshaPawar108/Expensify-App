import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";

// Action generators for expenses
// ADD EXPENSE

// This will change the redux store
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

// This will start the above process. It will dispatch addExpense in the functions which we set up and that will keep changing the redux store.
export const startAddExpense = (expenseData = {}) => {
  // The below func will be returned. This function is going to actually work because we have set up redux thunk, otherwise it would not work.
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT EXPENSE

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const SET_RAW_DATA = "SET_RAW_DATA";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const ADD_TASK = "ADD_TASK";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const EDIT_TASK = "EDIT_TASK";
export const START_EDITING_TASK = "START_EDITING_TASK";
export const FINISH_EDITING_TASK = "FINISH_EDITING_TASK";

export const setRawData = (data) => ({
  type: SET_RAW_DATA,
  payload: data,
});

export const toggleTask = () => ({
  type: TOGGLE_TASK,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});
export const startEditingTask = (task) => ({
  type: START_EDITING_TASK,
  payload: task,
});

export const finishEditingTask = (task) => ({
  type: FINISH_EDITING_TASK,
  payload: task,
});

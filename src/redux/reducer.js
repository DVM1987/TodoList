import {
  SET_RAW_DATA,
  TOGGLE_TASK,
  ADD_TASK,
  SET_SEARCH_TERM,
  EDIT_TASK,
  START_EDITING_TASK,
  FINISH_EDITING_TASK,
} from "./actions";

const initialState = {
  rawData: [],
  showTaskComponent: false,
  searchTerm: "",
  editingTask: null,
};

export const rawDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RAW_DATA:
      return {
        ...state,
        rawData: action.payload,
      };

    case TOGGLE_TASK:
      return {
        ...state,
        showTaskComponent: !state.showTaskComponent,
      };

    case ADD_TASK:
      return {
        ...state,
        rawData: [...state.rawData, action.payload],
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case EDIT_TASK:
      return {
        ...state,
        editingTask: action.payload,
        showTaskComponent: true,
      };

    case START_EDITING_TASK:
      return {
        ...state,
        editingTask: action.payload,
        showTaskComponent: true,
      };

    case FINISH_EDITING_TASK:
      return {
        ...state,
        rawData: state.rawData.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        editingTask: null,
        showTaskComponent: false,
      };

    default:
      return state;
  }
};

import { createStore, combineReducers } from 'redux';
import { rawDataReducer } from './reducer';

const rootReducer = combineReducers({
  // Nếu có nhiều reducers, chúng sẽ được thêm vào đây
  data: rawDataReducer
});

const store = createStore(rootReducer);

export default store;
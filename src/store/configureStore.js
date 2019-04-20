import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as TreeData from "./TreeData";

export default function configureStore() {
  const reducers = {
    treeData: TreeData.reducer
  };

  const middleware = [thunk];

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
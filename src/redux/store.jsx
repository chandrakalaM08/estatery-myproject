import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import propertiesReducer from "./Reducer/PropertyReducer"
const rootReducer = combineReducers({
    propertiesReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
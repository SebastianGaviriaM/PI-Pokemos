import rootReducer from "./reducer";
import { createStore, applyMiddleware, compose} from  'redux';
import thunkMiddleware from 'redux-thunk';


const composeEchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEchancer(applyMiddleware(thunkMiddleware)));

export default store;
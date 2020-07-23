import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, petReducer, modalReducer } from './reducers';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const rootReducer = combineReducers({
	login: loginReducer,
	pet: petReducer,
	modal: modalReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);
export default store;

import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import userReducer from './reducers/user'
import postReducer from './reducers/posts'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
    message: messageReducer
})

const storeConfig = () => {
    return createStore(reducers,compose(applyMiddleware(thunk)))
}

export default storeConfig;

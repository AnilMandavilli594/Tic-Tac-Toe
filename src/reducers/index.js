import {combineReducers} from 'redux';
import UserChangeReducer from './UserChangeReducer';

export default combineReducers({
    user: UserChangeReducer
});
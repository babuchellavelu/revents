import {combineReducers} from 'redux';
import authReducer from '../../features/auth/authReducer';
import eventReducer from '../../features/events/eventReducer';
import profileReducer from '../../features/profiles/profilePage/profileReducer';
import testReducer from '../../features/sandbox/testReducer';
import asyncReducer from '../async/asyncReducer';
import modalReducer from '../common/modals/modalReducer';
import menuReducer from '../../features/nav/navReducer';

const rootReducer = combineReducers({
    objTestReducer: testReducer,
    objEventReducer: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    profile: profileReducer,
    menu: menuReducer
})

export default rootReducer;
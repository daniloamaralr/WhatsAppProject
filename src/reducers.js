import {combineReducers} from 'redux'

import AuthReducer from './reducers/AuthRedicer'

const Reducers = combineReducers({
    auth: AuthReducer
});


export default Reducers
/* 将拆分出去的数据进行合并 */

import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;

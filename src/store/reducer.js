/* 将拆分出去的数据进行合并 */

import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as HomeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: detailReducer
});

export default reducer;

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    title: '文章标题',
    content: '<img src="https://upload-images.jianshu.io/upload_images/16557762-b59fc4d5a04a9f37?imageMogr2/auto-orient/" alt="" /><p><b>文章内容文章内容文章内容文章内容文章内容</b></p><p>文章内容文章内容文章内容文章内容文章内容</p><p>文章内容文章内容文章内容文章内容文章内容</p><p>文章内容文章内容文章内容文章内容文章内容</p><p>文章内容文章内容文章内容文章内容文章内容</p><p>文章内容文章内容文章内容文章内容文章内容</p>'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
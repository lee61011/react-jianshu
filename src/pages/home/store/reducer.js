import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/collections/images/506/165584954978.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
        }, 
        {
            id: 2,
            title: '手绘',
            imgUrl: '//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
        }
    ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
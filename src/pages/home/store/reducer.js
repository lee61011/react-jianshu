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
    ],
    articleList: [
        {
            id: 1,
            title: '编程中，有哪些好的习惯值得我们一开始就坚持？',
            desc: '说一些基础的、适用于初学者的好习惯。 ＃1 - 在开始编码之前先规划和组织代码 在项目的开始阶段，不要上手直接写代码，一定要先确定代码的分层和架...',
            imgUrl: '//upload-images.jianshu.io/upload_images/16557762-b59fc4d5a04a9f37?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '编程中，有哪些好的习惯值得我们一开始就坚持？',
            desc: '说一些基础的、适用于初学者的好习惯。 ＃1 - 在开始编码之前先规划和组织代码 在项目的开始阶段，不要上手直接写代码，一定要先确定代码的分层和架...',
            imgUrl: '//upload-images.jianshu.io/upload_images/16557762-b59fc4d5a04a9f37?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '编程中，有哪些好的习惯值得我们一开始就坚持？',
            desc: '说一些基础的、适用于初学者的好习惯。 ＃1 - 在开始编码之前先规划和组织代码 在项目的开始阶段，不要上手直接写代码，一定要先确定代码的分层和架...',
            imgUrl: '//upload-images.jianshu.io/upload_images/16557762-b59fc4d5a04a9f37?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
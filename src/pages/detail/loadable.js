import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        //  组件加载过程中临时显示的组件
        return <div>正在加载...</div>
    }
})

export default () => <LoadableComponent />
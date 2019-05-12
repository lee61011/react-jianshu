import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>文章标题</Header>
                <Content>
                    <img src='https://upload-images.jianshu.io/upload_images/16557762-b59fc4d5a04a9f37?imageMogr2/auto-orient/' alt='' />
                    <p><b>文章内容文章内容文章内容文章内容文章内容</b></p>
                    <p>文章内容文章内容文章内容文章内容文章内容</p>
                    <p>文章内容文章内容文章内容文章内容文章内容</p>
                    <p>文章内容文章内容文章内容文章内容文章内容</p>
                    <p>文章内容文章内容文章内容文章内容文章内容</p>
                    <p>文章内容文章内容文章内容文章内容文章内容</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail

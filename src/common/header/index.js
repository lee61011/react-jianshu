import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button } from './style'


class Header extends Component {

    /* 搜索框获取焦点时 展示 热门搜索 内容 */
    getListArea () {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

        if (newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={ handleMouseEnter }
                            onMouseLeave={ handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                                <SearchInfoSwitch onClick={ () => handleChangePage(page, totalPage) }>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe601;</i>
                    </NavItem>
                    <SearchWrapper>
                        {/* 搜索框 添加动画效果 */}
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>

                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe66f;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        //  focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.searchFocus())
            //  输入框获取焦点，发送请求，获取数据
            dispatch(actionCreators.getList())
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);

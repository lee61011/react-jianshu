import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'

const Header = (props) => {
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
                        in={props.focused}
                        timeout={500}
                        classNames="slide">
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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


const mapStateToProps = (state) => {
    return {
        //  focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur () {
            const action = {
                type: 'search_blur'
            }
            dispatch(actionCreators.searchBlur())
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);

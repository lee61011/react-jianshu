import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
    render() {
        const { loginStatus, account, password } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input innerRef={ (input) => {this.account = input} } placeholder='账号' />
                        <Input type='password' innerRef={ (input) => {this.password = input}} placeholder='密码' />
                        <Button onClick={ () => this.props.login(this.account, this.password) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login)
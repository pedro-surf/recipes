import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../reducers/auth'
import {
  StyledContainer,
  InputContainer
} from '../styled';
import { Button, Grow } from '@material-ui/core'
import LoginForm from './LoginForm';

const Home = ({ changePage, logout, ...props }) => {

  return (
    <StyledContainer>
      <h1>Welcome to my Recipes App!</h1>
      {!props.loggedIn ?
        <LoginForm />
        :
        <div>
          <Grow appear={props.loggedIn} in={props.loggedIn} timeout={1200}>
            <div>
              <h4>Logged in successfully.</h4>
              <InputContainer>
                <Button color="primary" variant="outlined" onClick={() => changePage()}>Go to Recipes</Button>
              </InputContainer>
              <InputContainer>
                <Button color="secondary" variant="outlined" onClick={() => logout()}>Log out</Button>
              </InputContainer>
            </div>
          </Grow>
        </div>

      }
    </StyledContainer>

  )
}

const mapStateToProps = ({ auth: { loggedIn, recoveryTimer, jwtToken, invalidCredentials, emptyPassword } }) => ({
  jwtToken,
  loggedIn,
  recoveryTimer,
  invalidCredentials,
  emptyPassword
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/recipes'),
      logout
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
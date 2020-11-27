import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login, recoverPassword, logout } from '../reducers/auth'
import {
  StyledContainer,
  VerticalForm,
  InputContainer
} from '../styled';
import { InputAdornment, TextField, Button, Grow } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';

const Home = props => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <StyledContainer>
      <h1>Welcome to my Recipes App!</h1>
      <>
        {!props.loggedIn &&
          <Grow in={!props.loggedIn}>
            <div>
              <h4>Authentication</h4>
              <VerticalForm onSubmit={e => e.preventDefault()}>
                <InputContainer>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    error={props.invalidCredentials}
                    helperText={props.invalidCredentials && `Invalid e-mail address`}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    label="E-mail"
                    variant="outlined"
                  />
                </InputContainer>
                <InputContainer>
                  <TextField
                    error={props.emptyPassword}
                    helperText={props.emptyPassword && `Password can't be empty`}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    label="Password"
                    variant="outlined" />
                </InputContainer>
                <InputContainer>
                  <Button color="primary" variant="contained" onClick={() => props.login({ email, password })}>Login to Account</Button>
                </InputContainer>
                <InputContainer>
                  <Button color="secondary" variant="outlined" onClick={() => props.recoverPassword({ email, password })}>Lost Password</Button>
                </InputContainer>
              </VerticalForm>
            </div>
          </Grow>
        }
      </>
      {props.recoveryTimer &&
        props.recoveryTimer > 0 &&
        !props.loggedIn ?
        <p>Wait {props.recoveryTimer} seconds before trying again</p> :
        ''}
      <div>
        {props.loggedIn &&
          <Grow appear={props.loggedIn} in={props.loggedIn} timeout={1200}>
            <div>
              <h4>Logged in successfully.</h4>
              <InputContainer>
                <Button color="primary" variant="outlined" onClick={() => props.changePage()}>Go to Recipes</Button>
              </InputContainer>
              <InputContainer>
                <Button color="secondary" variant="outlined" onClick={() => props.logout()}>Log out</Button>
              </InputContainer>
            </div>
          </Grow>
        }
      </div>
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
      login,
      recoverPassword,
      changePage: () => push('/recipes'),
      logout
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
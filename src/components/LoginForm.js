import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login, recoverPassword } from '../reducers/auth'
import {
    VerticalForm,
    InputContainer
} from '../styled';
import { InputAdornment, TextField, Button, Grow } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
const LoginForm = ({ loggedIn, login, recoverPassword, recoveryTimer, invalidCredentials, emptyPassword
}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Grow in={!loggedIn}>
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
                            error={invalidCredentials}
                            helperText={invalidCredentials && `Invalid e-mail address`}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            label="E-mail"
                            variant="outlined"
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextField
                            error={emptyPassword}
                            helperText={emptyPassword && `Password can't be empty`}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            label="Password"
                            variant="outlined" />
                    </InputContainer>
                    <InputContainer>
                        <Button color="primary" variant="contained" onClick={() => login({ email, password })}>Login to Account</Button>
                    </InputContainer>
                    <InputContainer>
                        <Button color="secondary" variant="outlined" onClick={() => recoverPassword({ email, password })}>Lost Password</Button>
                    </InputContainer>
                </VerticalForm>

                {recoveryTimer &&
                    recoveryTimer > 0 &&
                    !loggedIn ?
                    <p>Wait {recoveryTimer} seconds before trying again</p> :
                    ''}
            </div>
        </Grow>
    );
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
            recoverPassword,
            login
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)
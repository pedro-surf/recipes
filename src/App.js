import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Header, Home, About, Recipes, Settings } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledContainer } from './styled';

const App = ({ language, darkMode }) => (
  <StyledContainer>
    <Header darkMode={darkMode} language={language} />
    <ToastContainer autoClose={2400} closeOnClick />
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        
        <Route exact path="/settings">
          <Settings />
        </Route>

        <Route exact path="/recipes">
          <Recipes />
        </Route>

        <Route>
          <StyledContainer>Page not found</StyledContainer>
        </Route>
      </Switch>
    </main>
  </StyledContainer>
)

const mapStateToProps = ({ settings: { language, darkMode } }) => ({ language, darkMode })

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
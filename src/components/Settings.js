import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Select, Container, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { StyledForm } from '../styled';
import { setDarkMode, setLanguage } from '../reducers/settings';
import t from "../utils/locales";

const Settings = (p) =>
    <Container>
        <h3> {t[p.language].settings}</h3>
        <StyledForm onSubmit={e => e.preventDefault()}>
            <FormControl fullWidth>
                <InputLabel id="languageSelect">
                    {t[p.language].lang}
                </InputLabel>
                <Select
                    labelId="languageSelect"
                    color="primary"
                    fullWidth
                    onChange={e => p.setLanguage(e.target.value)}
                    name="filter"
                    value={p.language}
                >
                    {['en', 'es', 'pt'].map(l =>
                        <MenuItem key={l} value={l}>{l}</MenuItem>
                    )}
                </Select>
            </FormControl>

            <FormControl fullWidth style={{ marginTop: '1.5em' }}>
                <InputLabel id="darkModeSelect">
                    Dark Mode
                </InputLabel>
                <Select
                    id="darkModeSelect"
                    color="primary"
                    fullWidth
                    onChange={e => p.setDarkMode(e.target.value)}
                    name="filter"
                    value={p.darkMode}
                >
                    <MenuItem value={1}>On</MenuItem>
                    <MenuItem value={0}>Off</MenuItem>
                </Select>
            </FormControl>
        </StyledForm>
    </Container>

const mapStateToProps = ({ settings: { darkMode, language } }) => ({ darkMode, language })

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setDarkMode,
            setLanguage
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)
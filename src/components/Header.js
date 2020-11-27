import React from 'react';

import { StyledHeader, Route } from '../styled';
import t from "../utils/locales";

export default function Header({ language, darkMode }) {
    const paths = ['home', 'settings', 'about', 'recipes'].map(p =>
        <Route darkMode={darkMode} key={p} to={`/${p === 'home' ? '' : p}`}>
            {t[language][p]}
        </Route>
    );
    return (
        <StyledHeader darkMode={darkMode}>
            {paths}
            {darkMode}
        </StyledHeader>
    )
}


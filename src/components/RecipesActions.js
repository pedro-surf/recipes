import React from 'react';
import { Button } from '@material-ui/core';
import { InputContainer, RecipesActionsContainer, styles } from '../styled'
import t from "../utils/locales";


export default function RecipesActions({ i18n, onFetch, deleteAll, setViewForm, viewForm, viewFilter, setViewFilter, showLengthyActions }) {
    return (
        <RecipesActionsContainer>
            <InputContainer>
                <Button
                    onClick={() => onFetch()}
                    variant="contained"
                    color="primary"
                >
                    {t[i18n].fetchRandomRecipes}
                </Button>
            </InputContainer>
            <InputContainer>
                <Button
                    onClick={() => setViewForm(!viewForm)}
                    style={styles.btnGreen}
                >
                    {viewForm ? t[i18n].hideForm : t[i18n].addRecipe}
                </Button>
            </InputContainer>
            {showLengthyActions &&
                <>
                    <InputContainer>
                        <Button
                            onClick={() => setViewFilter(!viewFilter)}
                            style={styles.btnOrange}
                        >
                            {t[i18n].filterRecipes}
                        </Button>
                    </InputContainer>
                    <InputContainer>
                        <Button
                            onClick={() => deleteAll()}
                            variant="contained"
                            color="secondary"
                        >
                            {t[i18n].removeAll}
                        </Button>
                    </InputContainer>
                </>
            }
        </RecipesActionsContainer>
    );
}
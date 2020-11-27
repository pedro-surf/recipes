import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsContainer, RecipesActionsContainer, styles } from '../styled'
import t from "../utils/locales";


export default function RecipesActions({ i18n, onFetch, deleteAll, setViewForm, viewForm, viewFilter, setViewFilter, showLengthyActions }) {
    return (
        <RecipesActionsContainer>
            <ButtonsContainer>
                <Button
                    fullWidth
                    onClick={() => onFetch()}
                    variant="contained"
                    color="primary"
                >
                    {t[i18n].fetchRandomRecipes}
                </Button>
            </ButtonsContainer>
            <ButtonsContainer>
                <Button
                    fullWidth
                    onClick={() => setViewForm(!viewForm)}
                    style={styles.btnGreen}
                >
                    {viewForm ? t[i18n].hideForm : t[i18n].addRecipe}
                </Button>
            </ButtonsContainer>
            {showLengthyActions &&
                <>
                    <ButtonsContainer>
                        <Button
                            fullWidth
                            onClick={() => setViewFilter(!viewFilter)}
                            style={styles.btnOrange}
                        >
                            {t[i18n].filterRecipes}
                        </Button>
                    </ButtonsContainer>
                    <ButtonsContainer>
                        <Button
                            fullWidth
                            onClick={() => deleteAll()}
                            variant="contained"
                            color="secondary"
                        >
                            {t[i18n].removeAll}
                        </Button>
                    </ButtonsContainer>
                </>
            }
        </RecipesActionsContainer>
    );
}
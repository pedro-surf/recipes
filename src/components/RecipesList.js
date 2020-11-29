import { Grid } from '@material-ui/core';
import React from 'react';
import { RecipeItem } from ".";
import { TopMarginContainer, styles } from '../styled';
const RecipesList = ({ data, removeRecipe, darkMode }) => {

    if (!data || data.length === 0) {
        return <TopMarginContainer>No recipes!</TopMarginContainer>
    }

    return (
        <Grid style={{ ...styles.recipesGrid, backgroundColor: darkMode ? '#002884' : 'white' }} container justify="center" spacing={2}>
            {data.map((recipe, index) =>
                <Grid key={index} item>
                    <RecipeItem removeRecipe={removeRecipe} data={recipe} />
                </Grid>)}
        </Grid>
    );
}

export default RecipesList;
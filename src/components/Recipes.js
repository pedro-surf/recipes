import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRecipe, deleteAllRecipes, removeRecipe, setRecipes, filterRecipes } from '../reducers/meals'
import { AddRecipe, RecipesActions, RecipesList, FilterRecipes } from '.'
import { Badge, Fade, Grid, Grow } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { RecipesContainer, JustifiedContainer } from '../styled'
import { genRandomLetter } from '../utils'
import { toast } from 'react-toastify'
import t from "../utils/locales";

const Recipes = p => {
  const [viewForm, setViewForm] = React.useState(false);
  const [viewFilter, setViewFilter] = React.useState(false);

  const onFetch = async () => {
    toast.info(`Loading...`);
    const randomLetter = genRandomLetter();
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${randomLetter}`)
    const data = await res.json();

    const payload = data.meals;

    if (!payload || payload.length === 0) {
      return toast.error(`No meals with random letter ${randomLetter.toUpperCase()}! Try to fetch again.`, { timer: 3000 })
    }

    if (payload.length > 5) {
      const newPayload = payload.slice(0, 5);
      return p.setRecipes(newPayload);
    }
    p.setRecipes(payload);
  }

  return (
    <RecipesContainer>
      <h2 style={{ marginBottom: '.3em' }}>
        {t[p.language].recipes}
      </h2>
      <Badge
          children={<ReceiptIcon />}
          color="secondary"
          badgeContent={p.items.length}
          showZero
          overlap="circle"
        />
      <Grid justify="center" container>
        <Grid item xs={12} md={viewForm && viewFilter ? 7 : 8}>
          <RecipesActions
            onFetch={onFetch}
            deleteAll={p.deleteAllRecipes}
            viewForm={viewForm}
            viewFilter={viewFilter}
            setViewForm={setViewForm}
            setViewFilter={setViewFilter}
            showLengthyActions={p.items.length > 0}
            i18n={p.language}
          />
        </Grid>
        {viewForm &&
          <Fade in={viewForm} timeout={1200}>
            <Grid xs={12} md={3}>
              <JustifiedContainer>
                <AddRecipe close={() => setViewForm(false)} addRecipe={p.addRecipe} />
              </JustifiedContainer>
            </Grid>
          </Fade>
        }
        {viewFilter && p.items.length > 0 &&
          <Grow in={viewFilter} timeout={1200}>
            <Grid xs={12} md={2}>
              <JustifiedContainer>
                <FilterRecipes onSubmit={p.filterRecipes} />
              </JustifiedContainer>
            </Grid>
          </Grow>
        }
      </Grid>

      <RecipesList darkMode={p.darkMode} data={p.items} removeRecipe={p.removeRecipe} />

    </RecipesContainer>
  )
};

const mapStateToProps = ({
  settings: { language, darkMode },
  meals: { isFetching, items }
}) => ({ isFetching, items, language, darkMode })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addRecipe,
      removeRecipe,
      deleteAllRecipes,
      changePage: (page) => push(page),
      setRecipes,
      filterRecipes
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes)
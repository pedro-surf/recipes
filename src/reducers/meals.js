import { genUuid } from "../utils"
import { toast } from 'react-toastify';

const FETCH_MEALS = 'meals/FETCH_MEALS'
const ADD_MEAL = 'meals/ADD_MEAL'
const DELETE_MEAL = 'meals/DELETE_MEAL'
const DELETE_ALL_MEALS = 'meals/DELETE_ALL_MEALS'
const SET_MEALS = 'meals/SET_MEALS'
const FILTER_MEALS = 'meals/FILTER_MEALS'

const initialState = {
    isFetching: false,
    items: []
}

const reducer = (st = initialState, action) => {
    switch (action.type) {

        case FETCH_MEALS:
            return {
                ...st,
                isFetching: !st.isFetching
            }

        case SET_MEALS:
            return {
                ...st,
                isFetching: false,
                items: st.items.length > 0 ? [...new Set([...st.items, ...action.payload].sort((a, b) => a.strMeal > b.strMeal ? 1 : -1))] : [...action.payload]
            }

        case ADD_MEAL:
            const newItem = {
                ...action.payload,
                idMeal: genUuid(),
                strMealThumb: `https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg`
            };
            return {
                ...st,
                isFetching: false,
                items: st.items.length > 0 ?
                    [...st.items, newItem].sort((a, b) => a.strMeal > b.strMeal ? 1 : -1) :
                    [newItem]
            }

        case DELETE_MEAL:
            return {
                ...st,
                isFetching: false,
                items: [...st.items.filter(item => item.idMeal !== action.id)]
            }

        case FILTER_MEALS:
            return {
                ...st,
                items: [...st.items.filter(r => r[action.filter].toLowerCase().includes(action.search.toLowerCase()))]
            }

        case DELETE_ALL_MEALS:
            return {
                isFetching: false,
                items: []
            }

        default:
            return st
    }
}

export const fetchRecipes = () =>
    dispatch => {
        toast.info('Filtering recipes...');
        dispatch({
            type: FETCH_MEALS
        })
    }

export const addRecipe = (newMeal) => {
    return dispatch => {
        const payload = {
            ...newMeal,
            strMeal: newMeal.strMeal.slice(0, 1).toUpperCase() + newMeal.strMeal.slice(1)
        }
        dispatch({
            type: ADD_MEAL,
            payload
        })
        toast.success(`Recipe added successfully`);
    }
}

export const removeRecipe = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_MEAL,
            id
        })
        toast.error(`Recipe removed successfully`)
    }
}

export const deleteAllRecipes = () => {
    return dispatch => {
        dispatch({
            type: DELETE_ALL_MEALS
        })
    }
}

export const setRecipes = (payload) => {
    return dispatch => {
        dispatch({
            type: SET_MEALS,
            payload
        })
        toast.info(`Fetched successfully.`)
    }
}

export const filterRecipes = ({ filter, search }) => {
    return dispatch => {
        toast.info(`Filtering recipes...`);
        const reqFilter = `str${filter.slice(0, 1).toUpperCase() + filter.slice(1)}`;
        console.log(filter, reqFilter);
        dispatch({
            type: FILTER_MEALS,
            filter: reqFilter,
            search
        })
    }
}

export default reducer;

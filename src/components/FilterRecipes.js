import React from 'react';
import { Button, TextField, Select, Container, MenuItem } from '@material-ui/core';
import { StyledForm, BoldText } from '../styled';
import { toast } from 'react-toastify';

const defaultFormState = {
    filter: 'meal',
    search: ''
};

const options = ['meal', 'instructions', 'category', 'area', 'tags'];

const FilterRecipes = ({ onSubmit }) => {
    const [formState, setFormState] = React.useState(defaultFormState)

    const onChange = (e) =>
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })

    const handleSubmit = () => {
        if (formState.filter.length === 0) {
            return toast.error('Select a filter');
        }
        if (formState.search.length === 0) {
            return toast.error('Search is empty!');
        }
        onSubmit(formState);
    }

    return (
        <Container>
            <BoldText>Filter Results</BoldText>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <TextField
                    fullWidth
                    value={formState.search}
                    name="search"
                    color="primary"
                    label="Search"
                    onChange={onChange}
                />
                <Select
                    color="primary"
                    fullWidth
                    onChange={onChange}
                    name="filter"
                    value={formState.filter}
                >
                    {options.map(opt => <MenuItem value={opt}>{opt}</MenuItem>)}
                </Select>
                <div>
                    <Button fullWidth variant="outlined" style={{ marginTop: '1.3em' }} color="primary" onClick={() => handleSubmit()}>Ok</Button>
                </div>
            </StyledForm>
        </Container>
    );
}

export default FilterRecipes;
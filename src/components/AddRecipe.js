import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { StyledForm, BoldText } from '../styled';
import { toast } from 'react-toastify';

const defaultFormState = {
    strMeal: '',
    strInstructions: '',
    strCategory: '',
    strArea: '',
    strTags: '',
};

const AddRecipe = (p) => {
    const [formState, setFormState] = React.useState(defaultFormState)

    const onChange = (e) =>
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })

    const onSubmit = () => {
        if (Object.keys(formState).some(k => !formState[k] || formState[k].length === 0)) {
            return toast.error(`Please fill all fields`);
        }
        p.addRecipe(formState);
        setFormState(defaultFormState);
        p.close();
    }

    const formFirstLine = Object.keys(defaultFormState).map(
        (input, index) => index < 1 &&
            <TextField
                fullWidth
                key={input}
                style={{ margin: '0 .5em' }}
                value={formState[input]}
                name={input}
                label={input.substr(3)}
                onChange={onChange} />
    )

    const formSecondLine = Object.keys(defaultFormState).map(
        (input, index) => index > 0 &&
            <TextField
                key={input}
                multiline={index === 1}
                style={{ margin: '0 .1em' }}
                value={formState[input]}
                name={input}
                label={input.substr(3)}
                onChange={onChange} />
    )

    return (
        <Container>
            <BoldText>Send your own recipe.</BoldText>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <div>{formFirstLine}</div>
                <div>{formSecondLine}</div>
            <Button fullWidth variant="outlined" style={{ marginTop: '1.3em' }} color="secondary" onClick={() => onSubmit()}>Add Recipe</Button>
            </StyledForm>
        </Container>
    );
}

export default AddRecipe;
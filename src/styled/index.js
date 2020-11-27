import styled /*, { keyframes }*/ from 'styled-components';
import { Link } from 'react-router-dom';

export { default as styles } from './appStyles';

export const Route = styled(Link)`
    text-decoration: none;
    font-size: 22px;
    color: black;
    padding: 0 0.5em;
    @media (max-width: 400px) {
        font-size: 11px;
        font-weight: bold;
      }
    ${props => props.darkMode && `color: white;
    &:hover {
        color: red;
    }`}
`;

export const StyledContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TopMarginContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1.3em;
`;

export const RecipesContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 40vh;
`;

export const StyledParagraph = styled.p`
    font-size: 23px; 
    font-family: monospace;`
    ;

export const StyledForm = styled.form`
    margin: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const VerticalForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const LoginButtonsContainer = styled.div`
    margin-top: 1em;
    justify-content: space-between;
    padding: 0 3em;
`;

export const InputContainer = styled.div`
    padding: .5em;
`;

export const ButtonsContainer = styled.div`
    padding: .2em;
    @media (max-width: 400px) {
        width: 95%;
      }
`;

export const RecipeContainer = styled.div`
    @media (max-width: 400px) {
        padding: .2em;
    }
`;

export const RecipesActionsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (min-width: 400px) {
        padding-left: 1.8em;
        flex-direction: row;
      }
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: .45em;
`;

export const JustifiedContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const BoldText = styled.span`
    font-weight: bold;
`;


/*const animation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;*/

/*&:active {
    animation: ${animation} 0.5s linear;
}*/

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-tems: center;
    padding: 10px;
    text-decoration: none;
    ${props => props.darkMode && `background-color: black;`}
`;
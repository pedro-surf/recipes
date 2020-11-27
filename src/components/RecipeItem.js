import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import { Grow, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton } from '@material-ui/core/';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 341,
        minHeight: 360,
        height: '100%'
    },
    expandedCard: {
        width: 341,
        minHeight: 370,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardTitle: {
        fontSize: '14px'
    }
}));

function RecipeItem({ data, removeRecipe }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(data.strInstructions);
        toast.success(`Recipe method copied to clipboard!`);
    }

    const instructions = React.useMemo(
        () => data.strInstructions
            .split(`\r\n`)
            .map(instruction => <Typography paragraph>{instruction}</Typography>
            ), [data.strInstructions])

    return (
        <Grow in timeout={1500}>
            <Card className={expanded ? classes.expandedCard : classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {data.strMeal.substr(0, 1).toUpperCase()}
                        </Avatar>
                    }
                    title={data.strMeal}
                    titleTypographyProps={{ variant: data.strMeal.length > 20 ? 'h7' : 'h5' }}
                    subheader={data.strTags}
                />
                {data.strMealThumb &&
                    <CardMedia
                        className={classes.media}
                        image={data.strMealThumb}
                        title={data.strMeal}
                    />
                }
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Origin: {data.strArea}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.strCategory}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={() => handleCopy()} aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton onClick={() => removeRecipe(data.id || data.idMeal)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        {instructions}
                    </CardContent>
                </Collapse>
            </Card>
        </Grow>
    );
}

export default RecipeItem;
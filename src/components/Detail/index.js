import React from "react";
import { Link } from "react-router-dom";
import { GET_DETAIL_BY_ID } from "../../config";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./detail.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Detail(props) {
  const classes = useStyles();

  const [cocktail, setCocktail] = React.useState();

  React.useEffect(() => {
    let id = props?.match.params.id;
    getDetail(id);
  }, []);

  const getDetail = async (id) => {
    const req = await fetch(GET_DETAIL_BY_ID + id);
    const res = await req.json();
    console.log(res.drinks[0]);
    setCocktail(res.drinks[0]);
  };

  return (
    <div className={classes.root}>
      <Paper className="paper">
        <Grid container spacing={10}>
          <Grid item>
            <ButtonBase >
              <img
                className="detailshoot"
                alt="complex"
                src={cocktail?.strDrinkThumb}
              />
            </ButtonBase>
          </Grid>
          <Grid item md={5} sm container>
            <Grid item md container direction="column" spacing={10}>
              <Grid item md>
                <h6>
                  {cocktail?.strDrink}
                </h6>
                <h6 className="otherwords" >
                  Instruction:<br/> {cocktail?.strInstructions}
                  <br />
                  Ingrediernts:
                  <br />
                  <Link
                    to={"/details/" + cocktail?.strIngredient1}
                    key={cocktail?.strIngredient1}
                  >
                    1. {cocktail?.strIngredient1}
                  </Link>
                  <br />
                  <Link
                    to={"/details/" + cocktail?.strIngredient2}
                    key={cocktail?.strIngredient2}
                  >
                    2. {cocktail?.strIngredient2}
                  </Link>
                  <br />
                  <Link
                    to={"/details/" + cocktail?.strIngredient3}
                    key={cocktail?.strIngredient3}
                  >
                    3. {cocktail?.strIngredient3}
                  </Link>
                  <br />
                  <Link
                    to={"/details/" + cocktail?.strIngredient4}
                    key={cocktail?.strIngredient4}
                  >
                    4. {cocktail?.strIngredient4}
                  </Link>
                </h6>
              </Grid>
              <Grid item>
                <h6 variant="body2" style={{ cursor: "pointer" }}>
                  Glass: {cocktail?.strGlass}
                </h6>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

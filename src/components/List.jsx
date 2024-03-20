import { Container } from "react-bootstrap";
import CardRecipe from "./CardRecipe";
import { readRecipesAPI } from "../helpers/queries";
import { useEffect, useState } from "react";
const List = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    obtainRecipes();
  }, []);
  const obtainRecipes = async () => {
    const answer = await readRecipesAPI();
    if (answer.status === 200) {
      const data = await answer.json();
      setRecipes(data);
    }
  };
  return (
    <Container className="my-5">
      <h5 className="display-4">Our Recipes</h5>
      <hr />
      <div className="row row-gap-4">
        {recipes.map((recipe)=> <CardRecipe key={recipe._id} recipe={recipe} />)}
        
      </div>
    </Container>
  );
};

export default List;

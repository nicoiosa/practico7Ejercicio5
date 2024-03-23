import { Alert, Container } from "react-bootstrap";
import CardRecipe from "./CardRecipe";
import { readRecipesAPI } from "../helpers/queries";
import { useEffect, useState } from "react";
const List = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    obtainRecipes();
  }, []);
  const obtainRecipes = async () => {
    try {
      const answer = await readRecipesAPI();
      if (answer.status === 200) {
        const data = await answer.json();
        setRecipes(data);
      }
    } catch (error) {
      console.error();
      setError(
        "Hubo un error tratando de cargar las recetas, intente nuevamente mas tarde."
      );
    }
  };
  return (
    <Container className="my-5">
      <h5 className="display-4">Our Recipes</h5>
      <hr />
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && (
        <div className="row row-gap-4">
          {recipes.map((recipe) => (
            <CardRecipe key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default List;

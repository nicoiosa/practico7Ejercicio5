import { Alert, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemRecipe from "../ItemRecipe";
import { useEffect, useState } from "react";
import { readRecipesAPI } from "../../helpers/queries";

const Admin = () => {
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
    <Container className="myMain my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-2">Uploaded Recipes</h2>
        <div>
          <Link className="btn btn-primary" to="/admin/add">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </div>
      </div>
      <hr />
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && (
        <Table responsive striped bordered hover className="w-100">
          <thead>
            <tr>
              <th>Plate</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Ingrediets</th>
              <th>Recipe</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <ItemRecipe
                key={recipe._id}
                recipe={recipe}
                setRecipes={setRecipes}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Admin;

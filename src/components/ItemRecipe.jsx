import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { dltRecipeAPI, readRecipesAPI } from "../helpers/queries";

const ItemRecipe = ({ recipe, setRecipes }) => {
  const dltRecipe = () => {
    Swal.fire({
      title: "Are you sure you want to delete the recipe?",
      text: "You cant go back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await dltRecipeAPI(recipe._id);
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: `The recipe for a ${recipe.plate} was deleted.`,
            icon: "success",
          });
          const answer = await readRecipesAPI();
          if (answer.status === 200) {
            const data = await answer.json();
            setRecipes(data);
          }
        } else {
          Swal.fire({
            title: "A mistake occurred!",
            text: `The recipe for a ${recipe.plate} was not deleted succesfully, try again in a few minutes`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td>{recipe.plate}</td>
      <td>
        <p className="line-clamp">{recipe.description}</p>
      </td>
      <td className="text-center">
        <img
          src={recipe.image}
          alt="Representative image"
          className="img-thumbnail"
        />
      </td>
      <td>
        <p className="line-clamp">{recipe.ingredients}</p>
      </td>
      <td>
        <p className="line-clamp">{recipe.recipe}</p>
      </td>
      <td className="text-center">
        <Link
          className="btn btn-warning mb-lg-2"
          to={"/admin/edit/" + recipe._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={dltRecipe}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecipe;

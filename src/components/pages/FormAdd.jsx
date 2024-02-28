import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  createRecipeAPI,
  editRecipeAPI,
  obtainRecipeAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const formAdd = ({ edit, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (edit) {
      loadRecipeValues();
    }
  }, []);
  const loadRecipeValues = async () => {
    const answer = await obtainRecipeAPI(id);
    if (answer.status === 200) {
      const searchedRecipe = await answer.json();
      setValue(`plate`, searchedRecipe.plate);
      setValue(`description`, searchedRecipe.description);
      setValue(`image`, searchedRecipe.image);
      setValue(`ingredients`, searchedRecipe.ingredients);
      setValue(`recipe`, searchedRecipe.recipe);
    }
  };
  const onSubmit = async (recipe) => {
    if (edit) {
      const answer = await editRecipeAPI(recipe, id);
      if (answer.status === 200) {
        Swal.fire({
          title: "Recipe modified!",
          text: `The recipe for a ${recipe.plate} was modified succesfully`,
          icon: "success",
        });
        navigate("/admin");
      } else {
        Swal.fire({
          title: "A mistake occurred!",
          text: `The recipe for a ${recipe.plate} was not modified, try again in a few minutes`,
          icon: "error",
        });
      }
    } else {
      const answer = await createRecipeAPI(recipe);
      if (answer.status === 201) {
        Swal.fire({
          title: "Recipe added!",
          text: `The recipe for a ${recipe.plate} was added succesfully`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "A mistake occurred!",
          text: `The recipe for a ${recipe.plate} was not added, try again in a few minutes`,
          icon: "error",
        });
      }
    }
  };
  return (
    <Container className="myMain py-2">
      <h2 className="display-2">{title}</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} className="my-4">
        <Form.Group className="mb-3" controlId="formPlate">
          <Form.Label>
            <b>Plate</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Stew"
            {...register("plate", {
              required: "The name of the recipe is compulsory",
              minLength: {
                value: 2,
                message: "Has to have at least 2 characters",
              },
              maxLength: {
                value: 40,
                message: "Has to have at most 40 characters",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.plate?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: A hearty stew simmering on the stove, featuring tender chunks of meat, colorful vegetables, and savory spices, creating a flavorful and comforting one-pot dish."
            as="textarea"
            {...register("description", {
              required: "The description is compulsory",
              minLength: {
                value: 10,
                message: "Has to have at least 10 characters",
              },
              maxLength: {
                value: 200,
                message: "Has to have at most 100 characters",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.description?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>
            <b>Image URL</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/6752350/pexels-photo-6752350.jpeg"
            {...register("image", {
              required: "The image URL is compulsory",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message: "Invalid image URl (png|jpg|jpeg|gif|png|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.image?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredients">
          <Form.Label>
            <b>Ingredients</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Beef or chicken chunks (1 pound), potatoes (4), carrots (3), onion (1), garlic (3 cloves), beef or vegetable broth (4 cups), diced or crushed tomatoes (1 can), salt, pepper, dried thyme (1 teaspoon), rosemary (1 teaspoon), or bay leaves (2-3), olive oil (2 tablespoons)."
            as="textarea"
            {...register("ingredients", {
              required: "The ingredients are compulsory",
              minLength: {
                value: 10,
                message: "Has to have at least 20 characters",
              },
              maxLength: {
                value: 500,
                message: "Has to have at most 500 characters",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredients?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRecipe">
          <Form.Label>
            <b>Recipe</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Sauté chopped onion and minced garlic in olive oil. Brown beef or chicken, add diced potatoes, sliced carrots, broth, diced tomatoes, and season with salt, pepper, thyme, rosemary, and bay leaves. Simmer covered for 30-40 minutes. Adjust seasoning, remove bay leaves, and serve. Enjoy a quick and hearty stew!"
            as="textarea"
            {...register("recipe", {
              required: "The recipe is compulsory",
              minLength: {
                value: 50,
                message: "Has to have at least 50 characters",
              },
              maxLength: {
                value: 1000,
                message: "Has to have at most 1000 characters",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.recipe?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="danger">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default formAdd;

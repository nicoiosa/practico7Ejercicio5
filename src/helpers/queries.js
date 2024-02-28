const URIRecipes = import.meta.env.VITE_API_RECIPE;

export const createRecipeAPI = async (recipe) => {
  try {
    const answer = await fetch(URIRecipes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const readRecipesAPI = async () => {
  try {
    const answer = await fetch(URIRecipes);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const obtainRecipeAPI = async (id) => {
  try {
    const answer = await fetch(`${URIRecipes}/${id}`);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const dltRecipeAPI = async (id) => {
  try {
    const answer = await fetch(`${URIRecipes}/${id}`, {
      method: "DELETE",
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const editRecipeAPI = async (recipe, id) => {
  try {
    const answer = await fetch(`${URIRecipes}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

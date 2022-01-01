import React from "react";
import DeleteButton from "./DeleteButton";

function RecipeList({ recipes, setRecipes }) {
  function handleDelete(index) {
    let newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  }

  const list = recipes.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt="recipe pic" class="responsive" />
        </td>
        <td class="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td class="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <DeleteButton handleDelete={() => handleDelete(index)} />
        </td>
      </tr>
    );
  });
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> Cuisine</th>
            <th> Photo</th>
            <th> Ingredients</th>
            <th> Preparation</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
export default RecipeList;

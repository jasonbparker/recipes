import React from "react";

function RecipeList({ recipes, setRecipes }) {
  function handleDelete(index) {
    let newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  }

  const list = recipes.map((recipe, index) => {
    return (
      <div className="recipe" key={index}>
        <tr>
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
            <button name="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </td>
        </tr>
      </div>
    );
  });
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <th>
            <tbody>{list}</tbody>
          </th>
        </thead>
      </table>
    </div>
  );
}
export default RecipeList;

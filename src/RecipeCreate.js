import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData(initialFormState);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form name="create" className="create" onSubmit={handleSubmit}>
      <table className="create">
        <tfoot>
          <th>
            <tbody>
              <td>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  htmlFor="name"
                  name="name"
                  required={true}
                  placeholder="Name"
                ></input>
              </td>
              <td>
                <input
                  value={formData.cuisine}
                  onChange={handleChange}
                  htmlFor="cuisine"
                  name="cuisine"
                  required={true}
                  placeholder="Cuisine"
                ></input>
              </td>

              <td>
                <input
                  value={formData.photo}
                  onChange={handleChange}
                  htmlFor="photo"
                  name="photo"
                  required={true}
                  placeholder="URL"
                ></input>
              </td>

              <td>
                <textarea
                  value={formData.ingredients}
                  onChange={handleChange}
                  htmlFor="ingredients"
                  name="ingredients"
                  required={true}
                  placeholder="Ingredients"
                ></textarea>
              </td>
              <td>
                <textarea
                  value={formData.preparation}
                  onChange={handleChange}
                  htmlFor="preparation"
                  name="preparation"
                  required={true}
                  placeholder="Preparation"
                ></textarea>
              </td>
              <td>
                <button onChange={handleSubmit} type="submit">
                  Create
                </button>
              </td>
            </tbody>
          </th>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;

import React, { useState } from "react";
import "./App.css";

const RecipeCreate = ({ onAddRecipe }) => {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({ name, cuisine, photo, ingredients, preparation });
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
    <table>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              name="cuisine"
              value={cuisine}
              placeholder="Cuisine"
              onChange={(e) => setCuisine(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              name="photo"
              value={photo}
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </td>
          <td>
            <textarea
              name="ingredients"
              value={ingredients}
              placeholder="Ingredients"
              onChange={(e) => setIngredients(e.target.value)}
            />
          </td>
          <td>
            <textarea
              name="preparation"
              value={preparation}
              placeholder="Preparation"
              onChange={(e) => setPreparation(e.target.value)}
            />
          </td>
          <td>
            <button type="submit">Add Recipe</button>
          </td>
        </tr>
     
        
      </tbody>
    </table>
      </form>
  );
};

export default RecipeCreate;
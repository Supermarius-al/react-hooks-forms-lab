import React from "react";
import { v4 as uuid } from "uuid";



function ItemForm({ onItemFormSubmit, setFormItem }) {
  


  function formSubmit(event){
    event.preventDefault()
  
  const newItem =  {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: event.target[0].value,
    category: event.target[1].value,
  }
  setFormItem(newItem)
    onItemFormSubmit(newItem)
    }  
    
  
//   onItemFormSubmit(formItem)

  
  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

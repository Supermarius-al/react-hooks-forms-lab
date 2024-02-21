import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [formItem, setFormItem] = useState({
    id: "", 
    name:"",
    category:""
  })
  

  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setSearch(event.target.value)
  }

  
  function onItemFormSubmit(formItem){
    setItems([...items, formItem])
  }


  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"  && search === "") {return true} ;
console.log(item, search)
    return item.category === selectedCategory  || item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm formItem={formItem} setFormItem={setFormItem} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} value={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

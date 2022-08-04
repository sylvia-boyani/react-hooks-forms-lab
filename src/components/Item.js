// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

// // function ItemForm(props) {
// function ItemForm({ onItemFormSubmit }) {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleCategoryChange(event) {
//     setCategory(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     onItemFormSubmit({
//       id: uuid(),
//       name,
//       category,
//     });
//   }

//   return (
//     // <form className="NewItem">
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         {/* <input type="text" name="name" /> */}
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </label>

//       <label>
//         Category:
//         {/* <select name="category"> */}
//         <select
//           name="category"
//           value={category}
//           onChange={handleCategoryChange}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
// @@ -23,4 +52,4 @@ function ItemForm(props) {
//   );
// }

// export default ItemForm;
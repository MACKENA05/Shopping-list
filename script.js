//retriving the shopping list from local storage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// Selecting DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addbutton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer =document.getElementById('shoppingList');


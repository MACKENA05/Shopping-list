//retriving the shopping list from local storage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// Selecting DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addbutton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer =document.getElementById('shoppingList');

//function to generate shopping list
function generateList(){
    shoppingListContainer.innerHTML = '';  //clear the list
    shoppingList.foreach((item,index)=>{
        const li = document.createElement('li');
        li.classLis.toggle('purchased',item.purchased);                                          //Toggle 'purchased' class based on status
        //setting inner HTML
        li.innerHTML = `
        <input type="checkbox" class="checkbox" data-index="${index}" ${item.purchased ? 'checked' : ''}>
        <span contenteditable="true" class="item-text">${item.text}</span>`;
        
      shoppingListContainer.appendChild(li);                                                           //append <li> item to the <ul> container.
    });
 
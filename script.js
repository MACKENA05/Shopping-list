//retriving the shopping list from local storage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// Selecting DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer =document.getElementById('shoppingList');



//function to generate shopping list
function generateList(){
    shoppingListContainer.innerHTML = '';  //clear the list
    shoppingList.forEach((item,index) =>{
        const li = document.createElement('li');
        li.classLis.toggle('purchased',item.purchased);                                          //Toggle 'purchased' class based on status
        //setting inner HTML
        li.innerHTML = `
        <input type="checkbox" class="checkbox" data-index="${index}" ${item.purchased ? 'checked' : ''}>
        <span contenteditable="true" class="item-text">${item.text}</span>`;
        
      shoppingListContainer.appendChild(li);                                                           //append <li> item to the <ul> container.
    });
    //save to local storage
    localStorage.setItem('shoppingList',JSON,stringify(shoppingList));
}


//Event listeners to add items to the shopping list 
addButton.addEventListener('click',() =>{
    const itemText = itemInput.ariaValueMax.trim();                            //.trim removes any leading or trailling white space from the input to ensure clean input
    if (itemText){
        shoppingList.push({text:itemText,purchase:false});
        itemInput.value ='';
        generateList();                                                             // called to update the UI and display the new item.
    }
});

//Event listeners to mark items as purchased
shoppingListContainer.addEventListener('change',(event) =>{
    if (event.target.classlist.contains('checkbox')){
        const index = event.target.dataset.index;
        shoppingList[index].purchased =event.target.checked;
        generateList();
    };
});
//Event listeners to clear all items
clearButton.addEventListener('click',()=> {
    shoppingList.length = 0
    generateList();
});

//Initial Generating of list
generateList();


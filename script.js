// Retrieve the shopping list from localStorage or initialize an empty array
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Function to update the displayed list
function renderList() {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = ''; // Clear the list before re-rendering

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.classList.add('item');

        // Add purchased class if the item is marked as purchased
        if (item.purchased) {
            listItem.classList.add('purchased');
        }

        // Create the edit and delete buttons
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editItem(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteItem(index));

        // Add event listener to mark the item as purchased
        listItem.addEventListener('click', () => togglePurchased(index));

        // Append buttons to list item
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Append the list item to the list container
        listContainer.appendChild(listItem);
    });
}

// Function to add a new item
function addItem() {
    const input = document.getElementById('item-input');
    const itemName = input.value.trim();

    if (itemName !== '') {
        const newItem = { name: itemName, purchased: false };
        shoppingList.push(newItem);
        input.value = ''; // Clear the input field

        // Update localStorage and re-render the list
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        renderList();
    }
}

// Function to toggle the purchased status of an item
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;

    // Update localStorage and re-render the list
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    renderList();
}

// Function to clear the list
function clearList() {
    shoppingList = [];
    localStorage.removeItem('shoppingList');
    renderList();
}

// Function to edit an item
function editItem(index) {
    const newItemName = prompt("Edit item:", shoppingList[index].name);
    if (newItemName && newItemName.trim() !== '') {
        shoppingList[index].name = newItemName.trim();
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        renderList();
    }
}

// Function to delete an item
function deleteItem(index) {
    shoppingList.splice(index, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    renderList();
}

// Event listeners
document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('clear-list').addEventListener('click', clearList);

// Initialize the list on page load
renderList();

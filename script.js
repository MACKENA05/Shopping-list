// Retrieve shopping list from localStorage, if available
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Selecting DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer = document.getElementById('shoppingList');

// Function to generate shopping list and update the UI
function generateList() {
    shoppingListContainer.innerHTML = '';  // Clear the list

    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.toggle('purchased', item.purchased); // Toggle 'purchased' class based on status

        // Set inner HTML with editable text, checkbox, and buttons
        li.innerHTML = `
            <input type="checkbox" class="checkbox" data-index="${index}" ${item.purchased ? 'checked' : ''}>
            <span class="item-text" contenteditable="false">${item.text}</span>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="deleteBtn" data-index="${index}">Delete</button>
        `;

        shoppingListContainer.appendChild(li);  // Append <li> item to the <ul> container.
    });

    // Save the updated shopping list to localStorage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Event listener to add items to the shopping list
addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();  // Remove any leading/trailing whitespace
    if (itemText) {
        shoppingList.push({ text: itemText, purchased: false });  // Add new item to the list
        itemInput.value = '';  // Clear the input field
        generateList();  // Call to update the UI with the new item
    }
});

// Event listener to mark items as purchased
shoppingListContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('checkbox')) {
        const index = event.target.dataset.index;
        shoppingList[index].purchased = event.target.checked;  // Update the 'purchased' status
        generateList();  // Re-render the list to reflect the changes
    }
});

// Event listener for editing the item text
shoppingListContainer.addEventListener('click', (event) => {
    // Ensure the target is an "edit" button
    if (event.target.classList.contains('edit-btn')) {
        const index = event.target.dataset.index;
        const itemSpan = event.target.previousElementSibling;  // Get the span with the text

        // Toggle between editable and non-editable states
        const isEditable = itemSpan.contentEditable === 'true';

        if (isEditable) {
            // Save the edited text and disable editing
            const newText = itemSpan.innerText.trim();
            if (newText) {
                shoppingList[index].text = newText;  // Update the shopping list
            }
            itemSpan.contentEditable = 'false';  // Make the text non-editable
            event.target.innerText = 'Edit';    // Change the button back to 'Edit'
        } else {
            // Enable editing
            itemSpan.contentEditable = 'true';
            itemSpan.focus();  // Focus on the editable text
            event.target.innerText = 'Save';   // Change button text to 'Save'
        }

        // No need to call generateList() here, as we are directly editing the element
    }
});

// Event Listener to delete an item
shoppingListContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const index = event.target.dataset.index;

        // Optional: Confirm delete
        if (confirm('Are you sure you want to delete this item?')) {
            shoppingList.splice(index, 1);  // Remove item from the list
            generateList();  // Re-render the list
        }
    }
});

// Event listener to clear all items
clearButton.addEventListener('click', () => {
    shoppingList.length = 0;  // Clear the shopping list array
    generateList();  // Call to re-render the empty list
});

// Initial generating of the list when the page loads
generateList();

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

                // Set inner HTML with editable text and a checkbox for purchased status
                li.innerHTML = `
                   <input type="checkbox" class="checkbox" data-index="${index}" ${item.purchased ? 'checked' : ''}>
                     <span contenteditable="true" class="item-text">${item.text}</span>
                     <button class="editButton" data-index="${index}">Edit</button>
                     <button class="deleteButton" data-index="${index}">Delete</button>
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

        // Event Listener for editing the item text
       shoppingListContainer.addEventListener('blur', (event) => {
          if (event.target.classList.contains('item-text')) {
             const index = Array.from(shoppingListContainer.children).indexOf(event.target.parentElement);
             shoppingList[index].text = event.target.innerText.trim();
              generateList();
        }
        }, true);

        // Event Listener to delete an item
        shoppingListContainer.addEventListener('click', (event) => {
          if (event.target.classList.contains('deleteBtn')) {
          const index = event.target.dataset.index;
          shoppingList.splice(index, 1);
         generateList();
      }
    });

        // Event listener to clear all items
        clearButton.addEventListener('click', () => {
            shoppingList.length = 0;  // Clear the shopping list array
            generateList();  // Call to re-render the empty list
        });

        // Initial generating of the list when the page loads
        generateList();


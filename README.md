# Shopping-list-Application
This is a simple and interactive shopping list web application. It allows users to add, edit, delete, and mark items as purchased. The list is stored in the browser's localStorage, so the list persists even after the page is refreshed.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
    - Prerequisites
    - Installation
    - Usage
4. [How it works](#how-it-works)
5. [File structure](#file-structure)
6. [License](#license)

## Features
- **Add Items**: Add new items to the shopping list.
- **Edit Items**: Edit the text of an existing item.
- **Delete Items**: Remove items from the list.
- **Mark Items as Purchased**: Mark items as purchased with a checkbox.
- **Clear List**: Clear all items in the list.
- **Persistence**: The shopping list is saved in **localStorage**, so it persists even after the page is refreshed.

## Technologies Used
1. **HTML**: Used for the structure and layout of the page.
2. **CSS**: For styling and layout of the user interface.
3. **JavaScript**: Adds interactivity for adding, editing, deleting, and marking items.
4. **localStorage**: Used to store the shopping list and ensure persistence across page reloads.

## Getting Started
### Prerequisites
To run this application, you need a modern web browser (such as Chrome, Firefox, or Edge) to view the app.

### Installation
1. Clone or download the repository:
```bash
git clone git@github.com:MACKENA05/Shopping-list.git
```
2. Navigate to the project folder:
```bash
cd shopping-list-app
```
3. Open the index.html file in your browser to run the app.

## Usage
1. **Add Items**: Type the name of an item in the input field and click the "Add" button. The item will be added to the list.
2. **Edit Items**: Click the "Edit" button next to any item to toggle between edit mode and non-edit mode. The button will switch between Edit and Save.
3. **Delete Items**: Click the "Delete" button next to any item to remove it from the list. A confirmation prompt will appear before deletion.
4. **Mark as Purchased**: Use the checkbox next to any item to mark it as purchased. Purchased items will be visually distinguished.
5. **Clear List**: Click the "Clear" button to delete all items in the list at once.

## How It Works
- The shopping list is stored in localStorage which ensures the list persists even after refreshing the page.
- Each item consists of a checkbox, editable text, and buttons to edit or delete.
- When an item is edited, the text is updated and saved in the list.
- All interactions are reflected in the UI without requiring page reloads, except for the data persistence which is handled via localStorage.

## File Structure
```bash
/shopping-list-app
  ├── index.html      # HTML file for the app
  ├── style.css       # Stylesheet for the UI
  ├── script.js       # JavaScript for app functionality
  └── download.jpeg   # Image file for cart icon (used in header)
```

## License
This project is open source and available under the MIT License.
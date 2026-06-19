🛒 Jumia-Like E-Commerce Store (Frontend Only)

📌 Project Overview

This is a school project that simulates an e-commerce platform similar to Jumia.
It is built using HTML, CSS, and JavaScript only, with LocalStorage used as a fake database (no backend or server).
The goal is to practice frontend development, DOM manipulation, and basic data persistence in the browser.

🚀 Features

🏬 Product listing page

🔍 Product search/filter (if implemented)

🛒 Add to cart functionality

🧺 Cart management (increase, decrease, remove items)

💾 Data persistence using localStorage

📱 Responsive UI (mobile + desktop)

👤 Simple user session simulation (optional if added)

🛠️ Technologies Used
HTML5 – Structure of the website
CSS3 – Styling and layout
JavaScript (Vanilla JS) – Logic and interactivity
LocalStorage – Temporary data storage (no backend)

📂 Project Structure
project-folder/
│
├── index.html
├── cart.html
├── product.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── cart.js
│   └── products.js
│
└── images/
    └── (product images)
    
⚙️ How It Works
Products are stored as JavaScript objects or arrays.
When a user adds an item to the cart, it is saved in localStorage.
Cart data is retrieved from localStorage whenever the page reloads.
All updates (add/remove/update quantity) modify localStorage.

▶️ How to Run the Project
Download or clone the project:
git clone <repo-link>
Open the folder.
Open index.html in your browser.
No installation or backend setup required.

🎯 Learning Goals
Understanding DOM manipulation
Working with arrays and objects in JavaScript
Using LocalStorage for data persistence
Building a real-world UI clone
Improving frontend structuring skills

⚠️ Limitations
No real backend or database
No payment system
Data is stored only in the browser
Data resets if LocalStorage is cleared

📌 Future Improvements
Add login/signup system (with backend later)
Integrate real database (Firebase or Node.js backend)
Add checkout and payment simulation
Improve UI with animations
Add product categories and filters

👨‍💻 Author
Student Project – Built for learning purposes.

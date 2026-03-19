# E-Commerce UI Project

ShoppyGlobe is a modern, responsive e-commerce front-end application built with React. It features dynamic product rendering, interactive UI components, and a clean, mobile-first design.

## Features

🧭 Responsive navigation (mobile + desktop)

🔄 Rotating promotional text (animated hero section)

🛒 Add to Cart functionality 

🧾 Product details page

📦 Category-based product filtering

💡 Modern UI with custom CSS styling

✨ Neon / glowing text effects for hero section

📱 Mobile-first responsive design


## Technologies Used

* React 
* React Router DOM
* JavaScript 
* Redux Toolkit
* CSS (Custom + Media Queries)
* LocalStorage for cart persistence
* DummyJSON API (https://dummyjson.com/products)*

## Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── Header.css
│   └── ProductItem.jsx
|__ data
|   |__ categories.js
|
|___hooks
|   |__useProducts.jsx 
|
├── pages
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── NotFound.jsx
│   |── ProductDetail.jsx
|   |__ ProductList.jsx
│
├── redux
│   |__ cartSlice.js
|   |__ searchSlice.js
|   |__ store.js
│   
│__ App.css
|__ index.css
|── App.jsx
└── main.jsx
```

## Installation

1. Clone the repository

```
git clone https://github.com/RekSmru/ShoppyGlobe.git

```

2. Navigate to the project folder

```
cd ShoppyGlobe

```

3. Install dependencies

```
npm install
npm install react-router-dom

```

4. Run the development server

```
npm run dev
```

5. Open in browser

```
http://localhost:5173
```

## API Integration
This project uses the DummyJSON API to fetch product data:

```
https://dummyjson.com/products

```


## Screens Included
🏠 Home Page

📦 Products Listing Page

🔍 Product Details Page

🛒 Cart Page

💳 Checkout Page

❌ 404 Not Found Page

Key Concepts Implemented

React Hooks (useState, useEffect)

Custom Hooks (useProducts)

Redux Toolkit (state management)

Dynamic Routing (/product/:id)

Lazy Loading & Code Splitting

Responsive UI Design


## Author
* Smruti Singha



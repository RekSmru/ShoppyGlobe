# E-Commerce UI Project

A modern responsive e-commerce front-end built with React, featuring dynamic product display, rotating promotional text, and interactive UI components.

## Features

🧭 Responsive navigation (mobile + desktop)

🔄 Rotating promotional text (animated hero section)

🛒 Add to Cart functionality using localStorage

🧾 Product details page

📦 Category-based product filtering

💡 Modern UI with custom CSS styling

✨ Neon / glowing text effects for hero section

📱 Mobile-first responsive design


## Technologies Used

* React 
* React Router DOM
* JavaScript 
* CSS3 (Custom + Media Queries)
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

## Screens Included

* Home Page
* Products Page
* product Details Page
* Checkout page
* 404 Page Not Found



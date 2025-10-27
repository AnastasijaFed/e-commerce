# E-Commerce Web Application

A modern, responsive e-commerce platform built using **React**, **Vite**, and **Tailwind CSS**, integrated with the [Fake Store API](https://fakestoreapi.com/).  
This project demonstrates front-end architecture, API integration, and user experience principles through a scalable online shopping interface.

---

## Overview

This e-commerce application allows users to explore product categories, view detailed product information, and simulate adding items to a cart.  
It uses live data fetched from the Fake Store API and showcases clean component architecture, responsive UI design, and modern front-end best practices.

The app is designed to be **fast**, **accessible**, and **scalable**, serving as a foundation for a production-ready online store.

---

## Features

- **Dynamic Product Listing:** Fetches real product data from the Fake Store API.  
- **Category Filtering:** Browse products by category such as *Men’s Clothing*, *Women’s Clothing*, *Jewelry*, and *Electronics*.  
- **Responsive Design:** Fully optimized for all screen sizes using Tailwind CSS.  
- **Smooth Animations:** Framer Motion integration for scroll-based and entrance animations.  
- **Reusable Components:** Modular, maintainable, and easy to extend.  
- **Client-Side Routing:** Implemented with React Router for seamless navigation.  
- **Cart Simulation:** Add products to the cart and view dynamic feedback.  

---

## Tech Stack

**Framework & Tooling**  
- React 19 (Functional Components + Hooks)  
- Vite (Development bundler for fast builds and HMR)

**Styling**  
- Tailwind CSS (utility-first responsive design)  
- Custom color palette configuration for theme consistency  

**Animation**  
- Framer Motion (animations and transitions on scroll and load)

**API & Data Handling**  
- Fake Store API for real product data  
- Fetch API for RESTful requests and dynamic updates  

**Routing**  
- React Router DOM for page and category navigation  

---

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnastasijaFed/e-commerce.git
   cd e-commerce

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
   ```bash
   npm run dev

## API Integration

This project connects to the [Fake Store API](https://fakestoreapi.com/) to retrieve live data for products and categories.

### Key Endpoints
- `GET /products` — Fetch all products  
- `GET /products/categories` — Fetch product categories  
- `GET /products/category/:category` — Fetch products by category  
- `GET /products/:id` — Fetch single product details  

---

## Future Enhancements

Planned improvements for future versions include:

- **User Authentication:** Integration with Firebase or custom JWT authentication.  
- **Persistent Cart:** Save cart data to localStorage or a backend API.  
- **Search and Filters:** Implement keyword search, price filters, and sorting.  
- **Checkout Process**

---

## Author

Anastasija Fedorenko
LinkedIn: linkedin.com/in/anastasijafedorenko

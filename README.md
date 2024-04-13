# React Checkout App

## Overview
This React Checkout App serves as an admin panel for managing products. Users can add new products, delete existing ones, and view the current product list.

## Demo
Check out the live demo [here](https://stellular-gingersnap-bed721.netlify.app/).

## Features
- **Add Product**: Users can add a new product by filling out the required information and submitting the form.
- **Delete Product**: Admins can delete a product from the list by clicking on the delete button associated with each product.
- **View Product List**: The app displays the current list of products along with their details.

## Technologies Used
- React
- Axios for API requests
- Other dependencies (if any)

## Installation
To run the app locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `yarn install` to install the dependencies.
4. Run `yarn start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage
1. Upon launching the app, you'll see the list of existing products.
2. To add a new product, click on the "Add Product" button and fill out the form.
3. To delete a product, click on the delete button associated with the product you want to remove.

## API Endpoints
- **GET /products**: Retrieves the list of products.
- **POST /products**: Adds a new product to the list.
- **DELETE /products/:id**: Deletes a product with the specified ID.


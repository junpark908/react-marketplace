# Q1 What are the components in this project?

Answer: App.js, iem.js, seller.js

# Q2 List props of each components

Answer:
-App.js
-none

-Item.js
-item

-Seller.js
-name
-description
-image
-rating

# Q3

    '/' => Lists of items
    '/seller/:sellerId' => Seller pages

# Q4 Where are paths?

    They are in BrowserRouter, Route in react-router-dom package
    They use the pattern of /seller/:sellerId to make different path

# Q5 Path template

    There is /seller/:??? pth and ??? is the id of the seller

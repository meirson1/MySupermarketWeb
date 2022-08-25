const products = [
  {
    name: "Brown eggs",
    department: "dairy",
    description: "A carton of 12 raw organic brown eggs",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b2789e8c-ff1b-4c8c-8650-a72cb4568f79.jpg",
    price: 4.49,
    rating: 4,
  },
  {
    name: "Avocado",
    department: "fruit",
    description: "Avocado ready for eat (each)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_075f3bee-baf9-4309-87a6-7f8331c01a00.jpg",
    price: 2.0,
    rating: 4,
  },
  {
    name: "Asparagus",
    department: "vegetable",
    description: "Fresh Asparagus Bouquet",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20887534-3a68-4076-b539-4bac054fa709.jpg",
    price: 5.24,
    rating: 3,
  },
  {
    name: "Banana",
    department: "fruit",
    description: "Fresh banana (each).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_47b1aa15-ba01-41a5-bfb6-fa21ac15ca64.jpg",
    price: 0.12,
    rating: 4,
  },
  {
    name: "broccoli",
    department: "vegetable",
    description: "Fresh and green packed broccoli.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_63be9a6e-3713-4e37-aa10-14a2eed96f7e.jpg",
    price: 1.0,
    rating: 0,
  },
  {
    name: "Fresh stawberry",
    department: "fruit",
    description: "Sweet fresh stawberry (family pack)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_19d0c0f2-75d9-42dc-80c8-12fa5f3a6f56.jpg",
    price: 5.99,
    rating: 4,
  },
  {
    name: "Lemon",
    department: "fruit",
    description: "juccy lemon (each)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4a4507a3-777c-4d4f-9ed4-2ea35891cd5f.jpg",
    price: 0.79,
    rating: 5,
  },
  {
    name: "Homemade bread",
    department: "bakery",
    description: "Homemade bread",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7ae06eb5-21a5-4366-ac91-b3b8a3feb66c.jpg",
    price: 6.5,
    rating: 3,
  },
  {
    name: "Tomatoes",
    department: "vegetable",
    description: "Tomatos On-The-Vine (per 1kg)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af38ec04-dbe5-4c26-8c28-4a43549d1549.jpg",
    price: 5.9,
    rating: 0,
  },
  {
    name: "Iceberg Lettuce",
    department: "vegetable",
    description: "Fresh round and crispy lettuce.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_400cde8d-abfc-450b-8677-9d6c9e4f5ba9.jpg",
    price: 1.79,
    rating: 2,
  },
  {
    name: "Granny Smith Apples",
    department: "fruit",
    description: "Green sour apple (per 1kg).",
    imageUrl:
      "https://d2d8wwwkmhfcva.cloudfront.net/1200x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_be58197b-c2b9-49ce-a2f2-29891e199c53.jpg",
    price: 2.7,
    rating: 2,
  },
  {
    name: "Green beans",
    department: "vegetable",
    description: "Raw organic green beans (1kg package)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_237886d9-4953-4ca2-894e-b7c43da392b6.jpg",
    price: 5.0,
    rating: 1,
  },
  {
    name: "Portabello mushrooms",
    department: "vegetable",
    description: "Fresh portabello mushrooms (0.5kg package)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ac02ebf6-742a-4950-96f7-bb59295031c5.jpg",
    price: 4.99,
    rating: 1,
  },
  {
    name: "Strawberry jelly",
    department: "grocery",
    description: "Homemade organic strawberry jelly in a jar",
    imageUrl:
      "https://d2d8wwwkmhfcva.cloudfront.net/1200x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ab2237b9-0b8b-4635-9216-f92dc59272fa.jpg",
    price: 3.99,
    rating: 1,
  },
  {
    name: "Anjou Pears",
    department: "fruit",
    description: "Fresh green pears.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d2b6f738-75ee-475d-ae81-5bb230d2de58.jpg",
    price: 2.19,
    rating: 4,
  },
  {
    name: "Watermelon - Mini",
    department: "fruit",
    description: "Sweet and seedless",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ac6d03fc-827b-4dc8-96c2-92cf77980592.jpg",
    price: 3.99,
    rating: 5,
  },
  {
    name: "Onions",
    department: "vegetable",
    description: "White onions",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_820ab801-f027-4035-bebe-77ed70310405.jpg",
    price: 0.97,
    rating: 5,
  },
  {
    name: "Oranges (each)",
    department: "fruit",
    description: "Sweet Orange.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c99e5f4f-14e1-47fc-a9e6-0dbd271ef6b7.jpg",
    price: 1.25,
    rating: 4,
  },
  {
    name: "Carrots package",
    department: "vegetable",
    description: "Fresh carrots.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9fc0c7d0-6548-4c52-8bdf-2b0186e13f79.jpg",
    price: 2.69,
    rating: 4,
  },
  {
    name: "Greek Yogurt",
    department: "dairy",
    description: "NonFat (0%).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d44d6ad6-afce-4a2e-aebc-77e47b621ca6.jpg",
    price: 0.79,
    rating: 2,
  },
  {
    name: "Honey",
    department: "grocery",
    description: "Orange blossom honney.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_16fac1a0-045c-48a1-8bab-4929b65a5f94.jpg",
    price: 7.99,
    rating: 2,
  },
  {
    name: "Cottage cheese",
    department: "dairy",
    description: "Cottage cheese lowfat (1%).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0ace9432-3d87-4dce-aa0b-d362145d6baa.jpg",
    price: 3.19,
    rating: 1,
  },
  {
    name: "Mango",
    department: "fruit",
    description: "Sweet yelow mango (each)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fd51b4b3-070f-492b-844c-8626c4ea1117.jpg",
    price: 1.5,
    rating: 2,
  },
  {
    name: "Blueberries",
    department: "fruit",
    description: "Sweet blueberries (0.25kg pack).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_612bb64f-7545-4b76-a678-28981edde99b.jpg",
    price: 4.49,
    rating: 4,
  },
  {
    name: "Ricotta",
    department: "dairy",
    description: "Ricotta cheese fat free.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b3292bc9-9ad2-42cf-b452-b230a969cc5b.jpg",
    price: 2.79,
    rating: 5,
  },
  {
    name: "Soft-Crusted Moltigrain Bread",
    department: "bakery",
    description: "Homemade bread with grains",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0a8e0730-99e8-471b-be50-8cfca91516f3.jpg",
    price: 5.5,
    rating: 4,
  },
  {
    name: "Granola",
    department: "grocery",
    description: "Granola with nuts and cinnamon",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c8c1b69a-0882-43f5-8e33-3fd6d55ffbc7.jpg",
    price: 6.99,
    rating: 3,
  },
  {
    name: "White Suger",
    department: "grocery",
    description: "White granulated suger (1kg).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f6342cb1-b06f-4e6f-aaad-d78058a5a7a2.jpg",
    price: 2.29,
    rating: 5,
  },
  {
    name: "Organic 2% Milk",
    department: "dairy",
    description: "Organic 2% reduced fat milk (1 gal)",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_67cbad86-d26b-4358-bcbe-1f55fd7ef727.jpg",
    price: 5.99,
    rating: 4,
  },
  {
    name: "Baby Red Potatoes",
    department: "vegetable",
    description: "Small red potatoes bag.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_51a95f3f-2773-40c8-9cd9-f1f6bf3be3cf.jpg",
    price: 4.29,
    rating: 5,
  },
  {
    name: "White Wheat Flour",
    department: "grocery",
    description: "White wheat flour.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4642e63b-87dc-4ec4-b97c-ba50db72be35.jpg",
    price: 2.99,
    rating: 5,
  },
  {
    name: "Mixed Sweet Peppers",
    department: "vegetable",
    description: "Sweet colorful peppers (family pack).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1d4e7f67-74e0-4c48-855f-81d2a8a3ea27.jpg",
    price: 5.99,
    rating: 4,
  },
  {
    name: "Fresh Corn",
    department: "vegetable",
    description: "Husked Bi-Color (5 packed corns).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e0fde83-9480-4c52-a105-29342ad06a84.jpg",
    price: 6.0,
    rating: 2,
  },
  {
    name: "Long Hot Green Pepper",
    department: "vegetable",
    description: "Hot green pepper (each).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f927201a-fc97-4d77-bce2-36bddb438150.jpg",
    price: 0.7,
    rating: 5,
  },
  {
    name: "Butter",
    department: "dairy",
    description: "Unsalted sweet cream butter (250g).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8c96532a-1a49-46d6-b789-992a9f02b94c.jpg",
    price: 4.19,
    rating: 4,
  },
  {
    name: "Chicken Drumsticks",
    department: "meat",
    description: "Bone-In chicken drumsticks (family pack).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5fd7729f-b293-4eea-9695-e57c64f910d1.jpg",
    price: 5.59,
    rating: 0,
  },
  {
    name: "Organic Fresh Whole Chicken",
    department: "meat",
    description: "Organic fresh whole chicken.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c7550993-11fa-4c34-9062-21b22f132087.jpg",
    price: 11.19,
    rating: 4,
  },
  {
    name: "Bone-In Short Ribs",
    department: "meat",
    description: "Bone-In short ribs (0.25kg pack).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c45d9b5f-c36d-4c9b-8108-317a6f6af819.jpg",
    price: 9.79,
    rating: 4,
  },
  {
    name: "Chicken Sausage",
    department: "meat",
    description: "Chicken sausage, italian stayle with red peppers.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ec01cf70-dccc-42dd-9488-ed42f887e82c.jpg",
    price: 6.99,
    rating: 2,
  },
  {
    name: "Corona Extra Extra Mexican Lager",
    department: "wine&beer",
    description: "Corona beer (6 bottles).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_aef4f42c-929f-4e73-9b32-ab8e878e5965.jpg",
    price: 10.99,
    rating: 1,
  },
  {
    name: "Cole Cellars Cabarnet Sauvignon",
    department: "wine&beer",
    description: "Red wine Cabarnet Sauvignon (750ml).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_460f94c7-1469-4067-8c82-6ca59a0156e4.jpg",
    price: 10.99,
    rating: 4,
  },
  {
    name: "Jadot Chateau des Jacques Chardonnay",
    department: "wine&beer",
    description: "White wine Chardonnay (750ml).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7e6712ee-c45b-49d9-8e7d-1e59bfb64ce0.jpg",
    price: 21.99,
    rating: 3,
  },
  {
    name: "Blue Moon Belgian White Wheat Beer",
    department: "wine&beer",
    description: "Blue Moon beer (15 cans).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_45a15a3d-501e-4f40-998c-8fe36bd6673e.jpg",
    price: 18.49,
    rating: 5,
  },
  {
    name: "M&M Chocolate Candies and Peanuts",
    department: "grocery",
    description: "Peanut M&M (sharing size).",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f2650603-e161-43a7-a9fc-0bd3ddaa9521.jpg",
    price: 3.99,
    rating: 4,
  },
  {
    name: "Mike And Ike (green)",
    department: "grocery",
    description: "Green Mike And Ike candy original fruits.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b69fdb53-488a-4e44-982e-368988f699e3.jpg",
    price: 0.99,
    rating: 4,
  },
  {
    name: "Kellogg's Cereal Frosted Flakes",
    department: "grocery",
    description: "Corn Flakes fat free.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b899ad99-6848-4c6d-b2ac-aa4919077371.jpg",
    price: 3.99,
    rating: 2,
  },
  {
    name: "Barilla Spaghetti, Thin",
    department: "grocery",
    description: "Thin spaghetti.",
    imageUrl:
      "https://shop.wegmans.com/cdn-cgi/image/f=auto,q=80,dpr=1,h=200,w=200/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c0402a84-acfa-4d29-b272-1fbbc10e3656.jpg",
    price: 1.99,
    rating: 4,
  },
];

module.exports = products;

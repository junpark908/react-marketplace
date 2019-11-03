const items = [
  {
    name: "iPhone 11",
    price: 1500,
    image: "/images/iPhone11.png",
    description: "The best phone in the world",
    sellerId: "john"
  },
  {
    name: "MacBook",
    price: 2500,
    image: "/images/macbook.jpg",
    description: "The best laptop in the world",
    sellerId: "joe"
  }
];

const sellers = [
  {
    id: "john",
    name: " John Daglas",
    rating: 4,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/46.jpg",
    description: "He is a very good seller."
  },
  {
    id: "joe",
    name: " Joe Doe",
    rating: 4.5,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/59.jpg",
    description: "He is a very nice seller."
  }
];

export { items, sellers };

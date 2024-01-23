// data.js

const productsData = {
  featured: [
    {
      id: 1,
      name: "Classic Cola",
      flavor: "Cola",
      description:
        "Our timeless classic with the perfect balance of sweetness and fizz.",
      image: "https://images.unsplash.com/photo-1517088587697-8de5e72b421b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1.99,
      quantity: 1
    },
    {
      id: 2,
      name: "Zesty Orange",
      flavor: "Orange",
      description:
        "A burst of citrusy goodness that will tantalize your taste buds.",
      image: "https://images.pexels.com/photos/6170731/pexels-photo-6170731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2.49,
      quantity: 1
    },
    {
      id: 3,
      name: "Lemon Lime Spark",
      flavor: "Lemon Lime",
      description:
        "A refreshing blend of lemon and lime flavors for a crisp taste experience.",
      image: "https://images.unsplash.com/photo-1599730695562-24b372a775f4?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.29,
      quantity: 1
    },
    {
      id: 4,
      name: "Vanilla Dream",
      flavor: "Vanilla",
      description:
        "Indulge in the creamy goodness of our vanilla-flavored soda.",
      image: "https://images.unsplash.com/photo-1525629732193-7a6416802b21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.99,
      quantity: 1
    },
    {
      id: 5,
      name: "Grape Sensation",
      flavor: "Grape",
      description:
        "Experience the bold and sweet taste of ripe grapes in every sip.",
      image: "https://images.unsplash.com/photo-1517088587697-8de5e72b421b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.79,
      quantity: 1
    },
    {
      id: 6,
      name: "Cherry Bliss",
      flavor: "Cherry",
      description:
        "A blissful blend of tart and sweet cherries for a delightful experience.",
      image: "https://images.unsplash.com/photo-1609728962188-9e6c90219979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.49,
      quantity: 1
    },
    {
      id: 7,
      name: "Peach Paradise",
      flavor: "Peach",
      description:
        "Escape to a peachy paradise with this refreshing peach-flavored soda.",
      image: "https://images.pexels.com/photos/9367106/pexels-photo-9367106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3.99,
      quantity: 1
    },
    {
      id: 8,
      name: "Blueberry Burst",
      flavor: "Blueberry",
      description:
        "Bursting with the juicy flavor of ripe blueberries for a refreshing kick.",
      image: "https://images.unsplash.com/photo-1612094485351-5f320b491d70?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.89,
      quantity: 1
    },
    {
      id: 9,
      name: "Mango Tango",
      flavor: "Mango",
      description:
        "Dance your taste buds to a tropical rhythm with the mango tango soda.",
      image: "https://images.unsplash.com/photo-1697609636940-fff8293bf46d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4.29,
      quantity: 1
    },
    {
      id: 10,
      name: "Raspberry Radiance",
      flavor: "Raspberry",
      description:
        "Experience the radiance of tangy raspberries in this sparkling delight.",
      image: "https://images.pexels.com/photos/6170731/pexels-photo-6170731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3.79,
      quantity: 1
    },
    // Add more featured products as needed
  ],
  newArrivals: [
    {
      id: 11,
      name: "Strawberry Serenity",
      flavor: "Strawberry",
      description:
        "Find serenity in the sweetness of ripe strawberries with this new arrival.",
      image: "https://images.unsplash.com/photo-1649261191609-0fe89fb51286?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4.49,
      quantity: 1
    },
    {
      id: 12,
      name: "Watermelon Wave",
      flavor: "Watermelon",
      description:
        "Ride the wave of refreshing watermelon flavor with our latest addition.",
      image: "https://images.unsplash.com/photo-1563146454-ae3453c94519?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.99,
      quantity: 1
    },
    {
      id: 13,
      name: "Coconut Chill",
      flavor: "Coconut",
      description:
        "Chill out with the tropical vibes of coconut in this new and exotic soda.",
      image: "https://images.unsplash.com/photo-1528158737955-bd50edbb9a85?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4.99,
      quantity: 1
    },
    {
      id: 14,
      name: "Pineapple Pleasure",
      flavor: "Pineapple",
      description:
        "Experience the pleasure of tropical pineapples in this delightful soda.",
      image: "https://images.unsplash.com/photo-1634297170981-a690e0b6e8c5?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.29,
      quantity: 1
    },
    {
      id: 15,
      name: "Blackberry Burst",
      flavor: "Blackberry",
      description:
        "Bursting with the bold and juicy flavor of blackberries for a refreshing kick.",
      image: "https://images.unsplash.com/photo-1607547023932-3ae8ebc6a5f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4.29,
      quantity: 1
    },
    {
      id: 16,
      name: "Passionfruit Paradise",
      flavor: "Passionfruit",
      description:
        "Embark on a journey to paradise with the exotic taste of passionfruit.",
      image: "https://images.pexels.com/photos/764370/pexels-photo-764370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 4.79,
      quantity: 1
    },
    {
      id: 17,
      name: "Cucumber Mint Fusion",
      flavor: "Cucumber Mint",
      description:
        "A refreshing fusion of cool cucumber and mint for a unique taste experience.",
      image: "https://images.unsplash.com/photo-1586968186962-2602d20287e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.49,
      quantity: 1
    },
    {
      id: 18,
      name: "Guava Glee",
      flavor: "Guava",
      description:
        "Experience pure glee with the tropical sweetness of guava in every sip.",
      image: "https://images.pexels.com/photos/2043561/pexels-photo-2043561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 4.59,
      quantity: 1
    },
    {
      id: 19,
      name: "Kiwi Kick",
      flavor: "Kiwi",
      description:
        "Kickstart your day with the vibrant and tangy kick of kiwi-flavored soda.",
      image: "https://images.pexels.com/photos/11372620/pexels-photo-11372620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3.89,
      quantity: 1
    },
    {
      id: 20,
      name: "Mint Mojito Madness",
      flavor: "Mint Mojito",
      description:
        "Indulge in the madness of refreshing mint and lime in this fizzy delight.",
      image: "https://images.pexels.com/photos/9170108/pexels-photo-9170108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 4.99,
      quantity: 1
    },
    // Add more new arrivals as needed
  ],
  topPicks: [
    {
      id: 21,
      name: "Raspberry Lemonade Spark",
      flavor: "Raspberry Lemonade",
      description:
        "Sparkle with joy as you sip on this delightful raspberry lemonade soda.",
      image: "https://images.pexels.com/photos/2043561/pexels-photo-2043561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3.79,
      quantity: 1
    },
    {
      id: 22,
      name: "Apricot Adventure",
      flavor: "Apricot",
      description:
        "Embark on an adventurous flavor journey with the apricot-infused soda.",
      image: "https://images.unsplash.com/photo-1607547023932-3ae8ebc6a5f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4.49,
      quantity: 1
    },
    {
      id: 23,
      name: "Cranberry Crush",
      flavor: "Cranberry",
      description:
        "Feel the crush of tart cranberries in this sparkling and refreshing soda.",
      image: "https://images.unsplash.com/photo-1634297170981-a690e0b6e8c5?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.99,
      quantity: 1
    },
    {
      id: 24,
      name: "Cranberry Crush",
      flavor: "Cranberry",
      description:
        "Feel the crush of tart cranberries in this sparkling and refreshing soda.",
      image: "https://images.unsplash.com/photo-1563146454-ae3453c94519?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.99,
      quantity: 1
    },
    {
      id: 25,
      name: "Cranberry Crush",
      flavor: "Cranberry",
      description:
        "Feel the crush of tart cranberries in this sparkling and refreshing soda.",
      image: "https://images.pexels.com/photos/9367106/pexels-photo-9367106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3.99,
      quantity: 1
    },
    {
      id: 26,
      name: "Cranberry Crush",
      flavor: "Cranberry",
      description:
        "Feel the crush of tart cranberries in this sparkling and refreshing soda.",
      image: "https://images.unsplash.com/photo-1609728962188-9e6c90219979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.99,
      quantity: 1
    },
  ],
};


export default productsData;
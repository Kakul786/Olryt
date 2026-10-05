// SINGLE SOURCE OF TRUTH: edit names, prices, images, locations, hours, links here.
// Prices & nutrition are PLACEHOLDERS - replace with real values. Used by both the site and the server.
window.OLRYT = {
  currency: "₹",
  instagram: "https://www.instagram.com/eat.olryt",
  whatsapp: "https://wa.me/910000000000",           // TODO real number
  categories: ["Bowls","Sandwiches","Sides","Coffee","Matcha","Smoothies","Desserts"],
  items: [
    { id:"harissa-falafel-bowl", name:"Harissa Falafel Bowl", cat:"Bowls", price:329, img:"bowl.jpg", top:true, badge:"Vegetarian",
      desc:"Crisp falafel, harissa-kissed grains and fresh crunch.", ingredients:["Falafel","Grains","Greens","Harissa"], placeholderImg:true },
    { id:"seoul-spaghetti", name:"Seoul Spaghetti", cat:"Bowls", price:299, img:"spaghetti.jpg", top:true, badge:"Vegetarian",
      desc:"Spaghetti in a rich savoury sauce, feta, crispy crumbs, cherry tomatoes and mint.", ingredients:["Spaghetti","Feta","Crispy crumbs","Cherry tomatoes","Mint"] },
    { id:"thai-satay-bowl", name:"Thai Satay Bowl", cat:"Bowls", price:339, img:"bowl.jpg", top:true, badge:"Vegetarian",
      desc:"Peanut satay, crunchy veg and a little heat.", ingredients:["Satay sauce","Veg","Noodles"], placeholderImg:true },
    { id:"sweet-potato-fries", name:"Sweet Potato Fries", cat:"Sides", price:179, img:"fries.jpg", top:true, badge:"Vegetarian",
      desc:"Crispy, seasoned, dip-ready.", ingredients:["Sweet potato","Seasoning","Dip"] },
    { id:"vietnamese-summer-rolls", name:"Vietnamese Summer Rolls", cat:"Sides", price:229, img:"event.jpg", top:true, badge:"Fresh",
      desc:"Fresh rolls packed with crunch, herbs and dipping sauce.", ingredients:["Rice paper","Veg","Herbs","Dip"], placeholderImg:true },
    { id:"strawberry-cloud-matcha", name:"Strawberry Cloud Matcha", cat:"Matcha", price:269, img:"spring-drinks.jpg", top:true, badge:"New",
      desc:"Matcha topped with a strawberry cloud.", ingredients:["Matcha","Milk","Strawberry"] },
    { id:"vanilla-matcha", name:"Vanilla Matcha", cat:"Matcha", price:249, img:"spring-drinks.jpg", badge:"New",
      desc:"Smooth matcha, a hit of vanilla, over ice.", ingredients:["Matcha","Vanilla","Milk"] },
    { id:"vietnamese-iced-coffee", name:"Vietnamese Iced Coffee", cat:"Coffee", price:219, img:"padel-drinks.jpg", top:true, badge:"New",
      desc:"Bold, sweet, creamy and properly cold.", ingredients:["Coffee","Condensed milk","Ice"] },
    { id:"signature-sandwich", name:"Signature Sandwich", cat:"Sandwiches", price:279, img:"sandwiches.jpg", top:true, badge:"Vegetarian",
      desc:"Toasted stack of pesto, grilled veg and creamy slaw.", ingredients:["Toasted bread","Pesto","Grilled veg","Slaw"] },
    { id:"beet-hummus-toast", name:"Beet Hummus Open Toast", cat:"Sandwiches", price:249, img:"beet-toast.jpg", badge:"Vegetarian",
      desc:"Beet hummus, feta, chickpeas, cucumber rolls and microgreens.", ingredients:["Sourdough","Beet hummus","Feta","Cucumber"] },
    { id:"toast-trio", name:"Toast Trio", cat:"Sandwiches", price:299, img:"toasts.jpg", badge:"Vegetarian",
      desc:"Mushroom, beet feta and smashed avocado on baguette.", ingredients:["Baguette","Mushroom","Beet","Avocado"] },
    { id:"berry-yogurt-cup", name:"Berry Granola Yogurt Cup", cat:"Desserts", price:149, img:"parfaits.jpg", badge:"Fresh",
      desc:"Yogurt, granola and fresh berries.", ingredients:["Yogurt","Granola","Berries"] },
    { id:"coconut-fruit-bowl", name:"Coconut Fruit Bowl", cat:"Smoothies", price:289, img:"bowl.jpg", badge:"Fresh",
      desc:"Blueberries, banana, seeds and granola in a coconut bowl.", ingredients:["Blueberries","Banana","Seeds","Granola"] }
  ],
  byo: {
    base:[{n:"Brown rice",p:0},{n:"Quinoa",p:30},{n:"Greens",p:0},{n:"Noodles",p:20}],
    protein:[{n:"Falafel",p:60},{n:"Paneer",p:70},{n:"Tofu",p:60},{n:"Chickpeas",p:40}],
    toppings:[{n:"Cherry tomato",p:15},{n:"Cucumber",p:10},{n:"Corn",p:15},{n:"Pickled onion",p:10}],
    sauce:[{n:"Harissa",p:0},{n:"Peanut satay",p:10},{n:"Green chutney",p:0},{n:"Hummus",p:15}],
    extras:[{n:"Feta",p:40},{n:"Avocado",p:70},{n:"Crispy crumbs",p:20}],
    basePrice:199
  },
  locations:[
    { id:"roop-square", name:"Roop Square", address:"Rooftop, Roop Square, Ghumar Mandi, Ludhiana", hours:"4 PM – 11 PM", maps:"https://www.google.com/maps/search/?api=1&query=Olryt+Roop+Square+Ghumar+Mandi+Ludhiana" },
    { id:"glamton", name:"Glamton Plaza", address:"Glamton Plaza, Pakhowal Road, Ludhiana", hours:"10 AM – 11 PM", maps:"https://www.google.com/maps/search/?api=1&query=Olryt+Glamton+Plaza+Pakhowal+Road+Ludhiana" }
  ],
  deliveryFee:40,
  instagramGrid:["where","spring-drinks","team","padel-drinks","event","parfaits","sandwiches","beet-toast"],
  journal:[
    {cat:"Food & Flavour",title:"Why our bowls are anything but boring.",desc:"Bold sauces, crunchy textures, zero sad salads.",img:"bowl.jpg"},
    {cat:"Behind OLRYT",title:"From the kitchen to your table.",desc:"How a plate of fresh veg becomes a favourite.",img:"event.jpg"},
    {cat:"Good to know",title:"Ingredients, food and everyday eating.",desc:"Simple notes on eating well, your way.",img:"toasts.jpg"}
  ]
};

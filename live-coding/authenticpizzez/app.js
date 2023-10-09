function $(el) {
  return document.querySelector(el);
}

function $all(el) {
  return document.querySelectorAll(el);
}


const menuData = [
  { 
    title: "Margherita Pizza", 
    description: "Classic tomato sauce, mozzarella cheese, and fresh basil.", 
    price: "$10.99" 
  },
  { 
    title: "Pepperoni Pizza", 
    description: "Tomato sauce, mozzarella cheese, and pepperoni slices.", 
    price: "$12.99" 
  },
  { 
    title: "Veggie Pizza",
    description: "Tomato sauce, mozzarella cheese, bell peppers, mushrooms, and olives.", 
    price: "$11.99" 
  }
];



function createPizzaCard(menuIndex) {
  const card = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const price = document.createElement('label');
  const orderBtn = document.createElement('button');
  
  title.textContent = menuData[menuIndex].title;
  description.textContent = menuData[menuIndex].description;
  price.textContent = menuData[menuIndex].price;
  orderBtn.textContent = "Beställ";
  
  card.append(title, description, price, orderBtn);

  return card;
}


const menuContainer = document.querySelector('.menu');

for(let i = 0; i < menuData.length; i++) {
  menuContainer.append(createPizzaCard(i));
}

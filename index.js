class Food {
    constructor(name, price, ingredients, foodType, image, quantity) {
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
      this.foodType = foodType;
      this.image = image;
      this.quantity = quantity;
    }
  
    getItemPrice() {
      return this.price * this.quantity;
    }
  
    getFoodType() {
      return this.foodType;
    }
  }
  
  const idli = new Food(
    "Idli",
    30,
    ["Rice", "Salt", "Fenugreek", "Gramdall"],
    "Veg",
    "https://b.zmtcdn.com/data/pictures/chains/2/52002/02b62f353f680fead0f55b28e22619ef.jpg?output-format=webp",
    2
  );
  const dosa = new Food(
    "Dosa",
    40,
    ["Rice", "Salt", "Fenugreek", "Gramdall", "Oil"],
    "Veg",
    "https://b.zmtcdn.com/data/pictures/3/18788883/c13714f26bfc61bbc7b5c60d58faf8fa_featured_v2.jpg?output-format=webp",
    3
  );
  
  console.log(idli.getItemPrice(), dosa.getItemPrice());
  console.log(idli.getFoodType(), dosa.getFoodType());
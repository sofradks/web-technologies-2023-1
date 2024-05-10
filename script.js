
class Topping{
    constructor(name, smallPrice, smallCalories, bigPrice, bigCalories){
        this.name = name;
        this.smallPrice = smallPrice;
        this.bigPrice = bigPrice;
        this.smallCalories = smallCalories;
        this.bigCalories = bigCalories;
    }
}

class Pizza {
    constructor(name, price, calories, size){
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.size = size;
        this.toppings = []
    }

    addTopping(topping){
        if(topping instanceof Topping){
            this.toppings.push(topping);
            return;
        }
        console.log("Такой добавки быть не может")
    }

    removeTopping(topping){
        const index = this.toppings.findIndex(e => e == topping);
        this.toppings.splice(index, 1);
    }

    getToppings(){
        return this.toppings.map(element => element.name);
    }

    getSize(){
        return this.size;
    }

    getName(){
        return this.name;
    }

    calculatePrice(){
        let result = this.price;
        this.toppings.forEach(element => {
            if (this.size == "Большая"){
                result += element.bigPrice;
            }
            else{
                result += element.smallPrice;
            }
        }) 
        return result;   
    }

    calculateCalories(){
        let result = this.calories;
        this.toppings.forEach(element =>{
            if (this.size == "Большая"){
                result += element.bigCalories;
            }
            else{
                result += element.smallCalories;
            }
        }) 
        return result;   
    }
}

class Margaritta extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Маргарита", 700, 500, size)
        }
        else if (size == "Маленькая"){
            super("Маргарита", 600, 400, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

class Pepperoni extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Пепперони", 1000, 600, size)
        }
        else if (size == "Маленькая"){
            super("Пепперони", 900, 500, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

class Bavarian extends Pizza{
    constructor(size){
        if (size == "Большая"){
            super("Баварская", 900, 650, size)
        }
        else if (size == "Маленькая"){
            super("Баварская", 800, 550, size)
        }
        else{
            throw new Error("Размер указан неправильно!");
        }
    }
}

const Size = {
    Big:"Большая",
    Small:"Маленькая"
}
let margaritta = new Margaritta(Size.Small);
let pepperoni = new Pepperoni(Size.Big);

let array = [margaritta, pepperoni]

let toppingCreamyMozzarella = new Topping("Сливочная моцарелла", 50, 20, 100, 50);
let toppingCheeseBoard = new Topping("Сырный борт", 50, 20, 100, 40);
let toppingCheddarParmesan = new Topping("Чедер и пармезан", 150, 50, 300, 100);

margaritta.addTopping(toppingCheddarParmesan);




let result = "";
for (const element of array){
    let toppings = ""
    let a = element.getToppings();
    if (a == ""){
        toppings  = "-";
    }
    else {
        toppings = a;
    }
    result = `$Пицца: ${element.getName()} Размер: ${element.size} Добавки: ${toppings} Цена: ${element.calculatePrice()} Калории: ${element.calculateCalories()}`
    console.log(result)
}

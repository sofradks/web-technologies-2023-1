import React, { useState } from 'react';
import './App.css';
import { Button, Image, Select } from 'antd';


function App() {
  
class Topping{
  name: string;
  smallPrice: number;
  bigPrice: number;
  smallCalories: number;
  bigCalories: number;
  constructor(name: string, smallPrice: number, smallCalories: number, bigPrice: number, bigCalories: number){
      this.name = name;
      this.smallPrice = smallPrice;
      this.bigPrice = bigPrice;
      this.smallCalories = smallCalories;
      this.bigCalories = bigCalories;
  }
}

class Pizza {
  
  constructor(name: string, price: number, calories: number, size: string){
    this.name = name;
    this.price = price;
    this.calories = calories;
    this.size = size;
    this.toppings = [];
  }
  size: string;
  name: string;
  price: number;
  calories: number;
  toppings:Topping[];
 

  addTopping(topping: any){
          this.toppings.push(topping);
          return;
  }

  removeTopping(topping: any){
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
  constructor(size: string){
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
  constructor(size: string){
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
  constructor(size: string){
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

// let array = [margaritta, pepperoni]

let toppingCreamyMozzarella = new Topping("Сливочная моцарелла", 50, 20, 100, 50);
let toppingCheeseBoard = new Topping("Сырный борт", 50, 20, 100, 40);
let toppingCheddarParmesan = new Topping("Чедер и пармезан", 150, 50, 300, 100);

// margaritta.addTopping(toppingCheddarParmesan);



const getResult = (pizza:Pizza) => {
  let result = "";
    result = `Цена: ${pizza.calculatePrice()} Калории: ${pizza.calculateCalories()}`
    return result
  }


  const [size, setSize]= useState<string>("Маленькая");
  let [result, setResult]= useState<string>("");
  let [pizza, setPizza] = useState<Pizza>(new Pepperoni(size));
  // let result = "";
  // const setResult = (res:string) =>
  //   {
  //     result = res;
  //   }
  return (
    <div className="App" style={{display:'inline'}}>

      <div style={{width:"60%", display:'inline-block'}}>
        <div style={{width:"33%", display:'inline-block'}} onClick={()=> {
          setPizza(new Pepperoni(size));
          setResult(getResult(pizza))
          }}>
        <img src="pizza-images/pepperoni.png" alt="qwe" width={"50%"}/>
        <p><a>Пепперони</a></p>
        </div>
        <div style={{width:"33%", display:'inline-block'}} onClick={()=> {
          setPizza(new Margaritta(size));
          setResult(getResult(pizza))
          }}>
        <img src="pizza-images/margarita.png" alt="qwe" width={"50%"} />
        <p>Маргарита</p>
        </div>
        <div style={{width:"33%", display:'inline-block'}} onClick={()=> {
          setPizza(new Bavarian(size));
          setResult(getResult(pizza))
          }}>
        <img src="pizza-images/bavarskaya.png" alt="qwe" width={"50%"} />
        <p>Баварская</p>
        </div>
      </div>
      <div style={{width:"40%", display:'inline-block'}}>
        <h2>Выберите размер</h2>
        <Select
          defaultValue={size}
          style={{ width: 120 }}
          onChange={setSize}
          options={[
          { value: 'Маленькая', label: 'Маленькая' },
          { value: 'Большая', label: 'Большая' },
          ]}
        />
        <p></p>
        <div style={{width:"33%", display:'inline-block'}} onClick={() => {
          pizza.addTopping(toppingCheeseBoard);
          setResult(getResult(pizza))
        }}>
          <img src="topping-images/cheezeboard.jpg" alt="qwe" width={"50%"}/>
          <p>Сырный борт</p>
        </div>
        <div style={{width:"33%", display:'inline-block'}} onClick={() => {
          pizza.addTopping(toppingCreamyMozzarella);
          setResult(getResult(pizza))
        }}>
          <img src="topping-images/mozzarella.jpg" alt="qwe" width={"50%"}/>
            <p>Сливочная моцарелла</p>
          </div>
        <div style={{width:"33%", display:'inline-block'}} onClick={() => {
          pizza.addTopping(toppingCheddarParmesan);
          setResult(getResult(pizza))
        }}>
          <img src="topping-images/parmezan.jpg" alt="qwe" width={"50%"}/>
          <p>Чедер и пармезан</p>
        </div>  
        <Button shape='round' size='large' type='primary' style={{backgroundColor:"orange"}}  >
          {result}
        </Button>
      </div>
    </div>
  );
}


// onClick={() => {
//   let pizza = new Pepperoni(size);
//   result=getResult(pizza);
// }}
export default App;

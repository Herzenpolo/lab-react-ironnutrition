import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {

  // global variables
  state = {
    foodsArr: foods,
    addFood : false,
    foodName : "",
    calories: "",
    image: "",
    filtered: []
  }

  // methods

  addNewFoodBtn = () => {
    this.setState({
      addFood: !this.state.addFood // stores the state of the "addFood", it has to be stored in true or false to use ternary to create inputs
    })
  }

  inputName = (e) => {
    this.setState({
      foodName:e.target.value
    })
  }

  inputCalories = (e) => {
    this.setState({
      calories:e.target.value
    })
  }

  inputImage = (e) => {
    this.setState({
      image:e.target.value
    })
  }

  submission = (e) => {
    let updateArr = [...this.state.foodsArr]
    let newFood = {
      name: this.state.foodName,
      calories: this.state.calories,
      image: this.state.image
    }
    updateArr.push(newFood)
   console.log(updateArr)
   
    this.setState({
      foodsArr:updateArr,
      addFood: !this.state.addFood
    })
  }

  // searchBar = (e) => {
  //   return this.state.foodsArr.map((eachFood) => {
  //     eachFood.filter(filteredFoods => filteredFoods.name.includes(e.target.value))
  //   })
  // }

  // rendering
  render() {
    return (
      <div className="App">
      <input type="text" onChange = {this.searchBar}/>
       <FoodBox 
         foods = {this.state.foodsArr}
       />
       
       <button onClick={this.addNewFoodBtn}>Add New Food</button>
       <section>
         {this.state.addFood ? <input type="text" name= "Food Name" placeholder="Food Name" onChange = {this.inputName}></input> : null} <br/> {/** Ternary statements make the inpupts appear depending on the state of "add food" depending on whether it's true and false */}
         {this.state.addFood ? <input type="text" placeholder="calories" onChange = {this.inputCalories}></input> : null} <br/>
         {this.state.addFood ? <input type="url" placeholder="https..." onChange = {this.inputImage}></input> : null} <br/>
         {this.state.addFood ? <input type="submit" placeholder="submit" onClick = {this.submission}></input> : null}
       </section>
      </div>
    );
  }
}

export default App;

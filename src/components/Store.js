import React, { Component } from 'react';
import IconSwitch from './/IconSwitch';
import CardsView from './/CardsView';
import ListView from './/ListView';


export default class Store extends Component {
  constructor() {
    super();
    this.state = {
      icon: false,
    }
  }

  products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];  
  
  products1 = this.products.map((item) => (    
       { ...item, img: 'url('+item.img+')' }      
  ));

  onSwitch = (evt) => {    
    this.setState((PrevState)=>{
      return (
      {icon: !PrevState.icon,}
      )
    })    
  }  

  render() {
    // console.log(this.products1);
    return <>
      <IconSwitch icon={this.state.icon?'view_module':'view_list'} onSwitch={this.onSwitch} />
      {
        (this.state.icon)?<CardsView products={this.products1}/>:<ListView products={this.products1}/>
      }
      
    </>
  }
}
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import ProductLists from "./Components/ProductLists";
// import Footer from "./Components/Footer";
// import React,{useState} from "react";
// import AddItem from "./Components/AddItem";

// function App() {
//   const productLists = [
//     {
//       price: 99999,
//       name: "IPhone 10S Pro Max",
//       quantity: 0,
//     },
//     {
//       price: 9999,
//       name: "Redmi Note 10S  Max",
//       quantity: 0,
//     },
//   ];

//   let [productList, setProductList]= useState(productLists)
//   let [totalAmount, setTotalAmount]= useState(0)

//  const incrementQuantity = (index) =>{
//     let newProductList=[...productList] 
//     let newTotalAmount= totalAmount;
//     newProductList[index].quantity++
//     newTotalAmount+= newProductList[index].price
//     setTotalAmount(newTotalAmount)
//     setProductList(newProductList)
//   }

//   const decrementQuantity = (index) =>{
//     let newProductList=[...productList];
//     let newTotalAmount= totalAmount;
//     if(newProductList[index].quantity >0)  newProductList[index].quantity-- ; newTotalAmount-=newProductList[index].price;
//     setTotalAmount(newTotalAmount)
//     setProductList(newProductList)
//   }

//   const resetQuantity = () =>{
//     let newProductList= [...productList];
//     newProductList.map((products) =>{
//      products.quantity=0;
//     })
//     setProductList(newProductList);
//     setTotalAmount=0;
//   } 

//   const removeItem = (index) =>{
//    let newProductList = [...productList]
//    let newTotalAmount = totalAmount;
//    newTotalAmount-= newProductList[index].quantity* newProductList[index].price;
//    newProductList.splice(index, 1);
//    setProductList(newProductList);
//    setTotalAmount(newTotalAmount);
//   }; 

//   const addItem = (name, price) =>{
//    let newProductList= [...productList]
//    newProductList.push({
//     price: price,
//     name: name, 
//     quantity: 0
//    }
//    )
//    setProductList(newProductList);
//   };

//   return (
//     <>
//       <Navbar />
//       {/* to wrap different products in a container  */}

//       <AddItem addItem={addItem}/>
//       <main className="container mt-5">
//         <ProductLists productList={productList} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} removeItem={removeItem}/>
//       </main>
//       <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/> {/* to render things on UI */}
//     </>
//   );
// } 

// export default App;


import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductLists.js";
import Footer from "./Components/Footer.js";
import AddItem from "./Components/AddItem";
import cart from './cart.png';

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "IPhone 11S Max",
      quantity:0,
    }
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=> {
    if(sessionStorage.getItem("cart"))
    {
      setProductList(JSON.parse(sessionStorage.getItem("cart")));
    }
  }, [])

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(newProductList));
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = ({name, price}) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    sessionStorage.setItem("cart", JSON.stringify(newProductList));
    setProductList(newProductList);
  };

  return (
    <>
    <img src={cart} alt="Cart photo" style={{position: 'absolute', opacity: 0.6, bottom: '12rem', right: '6rem', height: '18rem'}}/>
      <Navbar />
      <main className="container mt-5 mx-8">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
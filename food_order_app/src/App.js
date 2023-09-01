import Navbar from "./components/Navrbar";
import Ui from './components/Ui';
//import image from './components/food.jpg';
import './App.css';
import './components/styles.css';
import { useState } from "react";
function App() {
  const [carts,setCarts] = useState([]);
  const [count,setCount] = useState(0);
  
  const addItem= (item)=>{
      const arr = [...carts];
      arr.push(item);
      setCarts(arr);
      setCount(count+(-1)*(-item.quantity));
  }
  const removeItem=(index)=>{
      const quantity = carts[index]["quantity"];
      carts.splice(index,1);
      setCarts(carts);
      setCount(count-quantity);
  }
  return (
    <div className='app'>
      <Navbar count={count} carts={carts} remove={removeItem}/>
      <div className='summary'>
              <h2>Delious food ,Delivered to You</h2>
              <p>Choose your favourite meel from our broad selection of available meals and 
                enjoy lunch or dinner at home
              </p>
              <p>
                All our meels are cooked with high-quality ingredients .just-in-time and of 
                course by exprience chefs 
              </p>
          </div>
      
      <Ui addItem = {addItem}/>
    </div>
  );
}

export default App;

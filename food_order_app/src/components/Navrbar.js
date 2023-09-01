//import { useState } from 'react';
import './styles.css';
//import { AiOutlineShoppingCart } from "react-icons/ai";
import cart from './cart.png';
import {Modal,ModalHeader} from 'reactstrap';
import { useEffect, useState } from 'react';
function Navbar(props) {
    
    const items = props.carts;
    const [carts,setItem] = useState([]);
    const [total,setTotal] = useState();
    
    useEffect(()=>{
        let sum = 0;
        for(let i=0;i<carts.length;i++){
            sum += Number(carts[i]["price"].substr(1))*(-1)*(-carts[i]["quantity"]);
        }
        sum = sum.toPrecision(3);
        console.log(sum);
        setTotal(sum);
        setItem(items);
    },[total,carts,items]);
    const [modal,setModal] = useState(false);
    return (
        <div className="nav">
            <div className='left-nav'>
                <h2>ReactMeals</h2>
            </div>
            <div className='right-nav'>
                <button onClick={(e)=>setModal(true)}
                ><img alt='cart' src={cart} style={{width:"20px",height:"20px",
                backgroundColor:"white"}}></img> Cart {props.count}</button>
            </div>
            <Modal size='lg' isOpen={modal} toggle={()=>setModal(!modal)}>
                <ModalHeader toggle={()=>setModal(!modal)}>
                <ul>
                   {carts.length>0?
                    carts.map((cart,index)=>{
                        return(
                           
                              <li>{cart.name} {cart.price} {cart.quantity}
                               <button className='btn-danger' 
                               style={{backgroundColor:"red",borderRadius:"5px",padding:"0px 10px 0px 10px"}}
                               onClick={(e)=>{
                                  const price = Number(cart.price.substr(1));
                                  props.remove(index);
                                  setTotal(total-price);
                               }}>
                                  Order
                               </button></li>
                            
                        )
                    }):''
                   }
                   </ul>
                   <hr></hr>
                   <h3>Total : {total}</h3>
                </ModalHeader>
            </Modal>
        </div>
    )
}
export default Navbar;
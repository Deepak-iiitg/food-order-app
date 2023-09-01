import './styles.css';
import {useState} from 'react';
function Ui(props){
    
    const addItem=(e,name,price,cl)=>{
        e.preventDefault();
        let quantity = document.getElementsByClassName(cl)[0].value;
        document.getElementsByClassName(cl)[0].value= '';
         if(quantity<=0){
            return;
         }
         props.addItem({name,price,quantity});
         console.log(name,price,quantity);
     }
    return(
        <div className="food-box">
          <div className='item'>
            <div className='left-item'>
               <h2>Sushi</h2>
               <p>fresh fish and veggles</p>
               <p className='price'>$22.99</p>
            </div>
            <div className='right-item'>
               <form onSubmit={(e)=>{
                addItem(e,'Sushi','$22.99','shusi')
               }}>
                   <div>
                      Amount<input type='text' className='shusi' required></input>
                   </div>
                   <div>
                    <button type='submit' style={{backgroundColor:'red'}}>Add</button>
                   </div>
               </form>
            </div>
            
          </div>
          <hr></hr>
          <div className='item'>
            <div className='left-item'>
               <h2>Green Bowl</h2>
               <p>Healthy ..and green</p>
               <p className='price'>$18.99</p>
            </div>
            <div className='right-item'>
               <form onSubmit={(e)=>{
                addItem(e,'Green Bowl','$18.99','green')
               }}>
                   <div>
                      Amount<input type='text' 
                      className='green' required></input>
                   </div>
                   <div>
                    <button type='submit' style={{backgroundColor:'red'}}>Add</button>
                   </div>
               </form>
            </div>
            
          </div>
          <hr></hr>
          <div className='item'>
            <div className='left-item'>
               <h2>Schnitzel</h2>
               <p>A german speciality</p>
               <p className='price'>$16.50</p>
            </div>
            <div className='right-item'>
              
               <form onSubmit={(e)=>{
                addItem(e,'Schnitzel','$16.50','sch')
               }}>
                   <div>
                      Amount<input type='text' className='sch' required></input>
                   </div>
                   <div>
                    <button type='submit' style={{backgroundColor:'red'}}>Add</button>
                   </div>
               </form>
            </div>
            
          </div>
          <hr></hr>
          <div className='item'>
            <div className='left-item'>
               <h2>Barbecuse</h2>
               <p>American raw,meaty</p>
               <p className='price'>$12.99</p>
            </div>
            <div className='right-item'>
               
               <form onSubmit={(e)=>{
                addItem(e,'Berbecause','$12.99','ber')
               }}>
                   <div>
                      Amount<input type='text' className='ber' required></input>
                   </div>
                   <div>
                    <button type='submit' style={{backgroundColor:'red'}}>Add</button>
                   </div>
               </form>
            </div>
            
          </div>
          <hr></hr>
        </div>
    )
}
export default Ui;
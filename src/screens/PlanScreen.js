import React, { useEffect, useState } from 'react'
import './PlanScreen.css'
import {db} from '../firebase'
const PlanScreen = () => {
    const [myproducts,setProducts]=useState([]);

    useEffect(()=>{
      db.collection("products").where("active",'==',true).get()
      .then((querySnapshot)=>{
        const products={}
        querySnapshot.forEach(async productDoc=>{
            products[productDoc.id]=productDoc.data;
            const priceSnap= await productDoc.ref.collection('prices').get();
            priceSnap.docs.forEach((price)=>{
                products[productDoc.id].prices={
                    priceId:price.id,
                    priceData:price.data()

                }
            })
        })
       setProducts(products);
      })
    },[]);
    console.log(myproducts);
  return (
    <div className='planScreen'>
     {Object.entries(myproducts).map(([priceId,priceData])=>{
        //add some logic to check if the user subscription is active
        return(
            <div className='planScreen_plans'>
                <div className='planScreen_info'>
                    <h3>priceData.name</h3>
                </div>
            </div>
        )
     })}
      
    </div>
  )
}

export default PlanScreen

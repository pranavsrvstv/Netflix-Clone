import React, { useEffect, useState } from 'react'
import './PlanScreen.css'
import {db} from '../firebase'
import { useSelector } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js'

import { selectUser } from '../features/counter/userSlice';
const PlanScreen = () => {
    const [products,setProducts]=useState([]);
    const user = useSelector(selectUser);
    const [subscription,setSubscription]=useState();

    useEffect(()=>{
        db.collection('customers')
        .doc(user.uid)//remember that user has uid and not just id
        .collection('subscriptions')
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach(async (subscription)=>{
                // console.log(subscription.data().role);
                setSubscription(
                    {
                        role:subscription.data().role,
                        current_period_end:subscription.data().current_period_end.seconds,
                        current_period_start:subscription.data().current_period_start.seconds,

                    }
                )
            })
        })
        // console.log(subscription);
    })

    const loadCheckout= async(priceId)=>{
//   console.log(user.uid);
        const docRef= await db.collection('customers').doc(user.uid).
        collection("checkout_sessions") //if a collection is not present and we are accessing it it willl be automatically created
        .add({
          price:priceId,
          success_url:window.location.origin,//these parameters should be named success_url and cancel_url only 
          cancel_url:window.location.origin,

        });
        
        docRef.onSnapshot(async (snap)=>{

            const {error,sessionId}= snap.data();
           
            if(error){
                 //Show  an error to the customer and inspect your cloud function log
                alert(`error occured: ${error.message}`)
            }
            if(sessionId){
                //we have a session,lets redirect to checkout
               const stripe= await loadStripe("pk_test_51MakrhSDgScifS4poe6EM3vlpJF5S02aPH235qGdlOQ9shOOomMh7ckikjT4ekY9QRUJQObT2TunRChHzzTTFSE700pgx4OJFz");

               stripe.redirectToCheckout({sessionId});
            }
        })
    }

    useEffect(()=>{
      db.collection("products").where("active",'==',true).get()
      .then(querySnapshot=>{
        const products={};//an empty object
        //querySnapshot here will be an array/object with all products
        querySnapshot.forEach(async (productDoc)=>{
            //productDoc is an individual product
            products[productDoc.id]=productDoc.data();
            //data(), is a function which access all data in the docs
            //In products object a key of productDoc.id will store a value of productdoc.data()
            const priceSnap= await productDoc.ref.collection('prices').get();
            //priceSnap will store the prices collection
            priceSnap.docs.forEach((price)=>{
                products[productDoc.id].prices={
                    priceId:price.id,
                    priceData:price.data()
                    

                }
                //in the products object , the key of productdoc.id will have an object called prices with two values{priceid, priceData}
            })
        })
       setProducts(products);
       
      })
    },[]);
    console.log(products);
    
  return (
    <div className='planScreen'>
        {subscription && <p>Renewal date :{new Date(subscription?.current_period_end*1000).toLocaleDateString()} </p>}
     {Object.entries(products).map(([productId,productData])=>{


       //We need to give a product role in stripe in products, using metadata: firebaseRole:basic etc, (small letter only )
        const isCurrentPackage= productData.name?.toLowerCase().includes(subscription?.role);
        // console.log(productData.prices)
        //add some logic to check if the user subscription is active
        return(
            <div key={productId} className={`${isCurrentPackage && 'planScreen_plan--disabled'} planScreen_plan`}>
                <div className='planScreen_info'> 
                    <h3>{productData.name}</h3>
                    <h6>{productData.description}</h6>
                    
                </div>
                {/* with onClick we need to use arrow functions only otherwise normal function will run without clicking on button as soon as the component mounts */}
                <button  type="button" onClick={()=>!isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                    {isCurrentPackage?'Current Package':'Subscribe'} </button>
            </div>
        )
     })}
      
    </div>
  )
}

export default PlanScreen

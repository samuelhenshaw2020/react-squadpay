import React, { useState } from 'react'
import SquadPay, {SquadParams} from "react-squadpay"

function App() {

  const params: SquadParams = {
    key: "test_pk_sample-public-key-1",
    email: "example@mail.com", // from HTML form
    amount: 5000, // no need to multiply by 100 for kobo, its taken care for you
    currencyCode: "NGN",
    reference: Date.now().toString(),
  }

  const Close = () => {
    console.log("Widget closed")
  } 

  const Load = () => {
    console.log("Widget Loaded")
  }

  /**
   * @param {object} data
   * @description  reponse when payment is successful
   */
  const Success = (data) => {
    console.log(data)
    console.log("Widget success")
  }

  return (
    <div> 
      
        <SquadPay  className='btn btn-success' text='Pay now' params={params} onClose={Close} onLoad={Load} onSuccess={(res)=>Success(res)} />
    </div>
  )
}

export default App

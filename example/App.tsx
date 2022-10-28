import React from 'react'
import SquadPay from "../libs"

function App() {

  const params = {
    key: "sandbox_pk_570ae070b2d3c21cc0bf84416927b74e3323d0203686",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email: "samuelhenshaw2020@gmail.com",
    amount: 5000,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currencyCode: "NGN"

  }

  const Close = () => {
    console.log("Widget closed")
  }

  const Load = () => {
    console.log("Widget Loaded")
  }

  const Success = (data: any) => {
    console.log(data)
    console.log("Widget success")
  }

  return (
    <div  className='p-5'>
        <h1>GTCO SQUAD</h1>
        <SquadPay className='btn btn-primary' text='Pay Now now' params={params} onClose={Close} onLoad={Load} onSuccess={(d: any)=>Success(d)} />
        
    </div>
  )
}

export default App

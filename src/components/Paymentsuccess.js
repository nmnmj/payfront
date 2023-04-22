import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Paymentsuccess = () => {
    let searchquery= useSearchParams()[0]
    let referencenum = searchquery.get("reference")
  return (
    <div style={{textAlign:"center", justifyContent:"center", alignItems:"center", display:"flex", height:"100vh", width:"100%"}}>
        <div>
            <h1>Order Successfull</h1>
            <h2>Reference No. :- {referencenum}</h2>
            
        </div>
    </div>
  )
}

export default Paymentsuccess
import React from 'react'

const Card = ({amount, img, checkouthandler}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{amount}</h3>
        <button onClick={()=>{
            checkouthandler(amount)
        }}>Buy Now</button>
    </div>
  )
}

export default Card
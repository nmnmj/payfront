import React from 'react'
import Card from './Card'
import axios from 'axios'

const Home = () => {
    
    let checkouthandler =async (amount)=>{
        let {key}= await axios.get("https://server-c5lziwrkc-nmnmj.vercel.app/apikey")
        let {data } = await axios.post("https://server-c5lziwrkc-nmnmj.vercel.app/checkout", {
            amount
        })
        // console.log(window)
        var options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Naman's account",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "https://server-c5lziwrkc-nmnmj.vercel.app/verification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);
            razor.open();
        
    }
  return (
    <div>
        <Card amount={1} 
        img="data:image/webp;base64,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"
        checkouthandler={checkouthandler} />
    </div>
  )
}

export default Home
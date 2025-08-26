import './App.css'

function App() {
  
  function loadScript() {
    return new Promise(function (reslove, reject) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        reslove();
      }
      script.onerror = () => {
        reject(err);
      }
      document.body.appendChild(script);
  })
  }


  async function openRazorPayCheckout() {
   try {
    // 1. making request to backend
    const resp = await fetch("http://localhost:3000/checkout", 
      {method: "Post"});
    const data = await resp.json();
    const order = data.order;
    // console.log("resp", resp);

    // load razorPayScript
    await loadScript();

    const finalOrderObject = {
      "key": "rzp_test_RA5zfGvwLOxOq1",
      "amount": order.amount, // Amount is in currency subunits. 
      "currency": order.currency,
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://picsum.photos/id/1/200/300",
      "order_id": order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
        },
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Boa Sarang", //your customer's name
          "email": "boasarang@example.com",
          "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    }

    // order create
    const rzp1 = new Razorpay(finalOrderObject);
    rzp1.open();

    // // error handling
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  

  } catch(err) {
    console.log("err : ", err);
   }
  }

  return (
    <>
      <h1>Payment Demo</h1>
      <a style={{cursor:'pointer'}}
      onClick={openRazorPayCheckout}
      >Pay for 100</a>
    </>
  )
}

export default App

import { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import "./Form.css"
function CheckoutForm() {
    let [showModel, setShowModel] = useState(false);
    let [orderId, setOrderID] = useState("");
    const { cartItems } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        // Add other fields as necessary
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if cartItems is empty
        if (cartItems.length === 0) {
            alert('First add items to cart');
            return; // Stop the form submission
        }

        const checkoutData = {
            ...formData,
            cartItems, // Include the cart items in the data sent to the backend
        };
        
        try {
            const response = await fetch('http://localhost:5000/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(checkoutData),
            });
            const data = await response.json();
            setOrderID(data.orderId);
            setShowModel(true);
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
       <div className="container">
            <h1 className='display-2 poppins-semibold text-center py-30' >Order Form</h1>
            <div style={{display: showModel ? "flex" : "none"}} className='order-id-model'>
                <h1 className='display-2 poppins-semibold'>Your Order ID: {orderId}</h1>
                 <button onClick={()=>setShowModel(!showModel)}>OK</button>
            </div>
           <form className='order-form' onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            {/* Add more form fields as needed */}
            <button type="submit">Submit</button>
        </form>
       </div>
    );
}

export default CheckoutForm;

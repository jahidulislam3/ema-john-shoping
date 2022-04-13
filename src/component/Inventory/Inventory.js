import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
const Inventory = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleNumberBlur = event => {
        setNumber(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault();
        const inventory = { name, email, address, number };
        console.log(inventory);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Inventory</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Phone Number</label>
                        <input onBlur={handleNumberBlur} type="text" name="number" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="SIgnUp" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;
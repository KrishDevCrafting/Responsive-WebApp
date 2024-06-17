// App.js
import React, { useState } from 'react';
import SignupModal from './CreateAccount';
 // Ensure you have your CSS imported

const Account = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        closeModal(); // Close the modal after form submission
    };

    return (
        <div className="App">
            <button className="btn" onClick={openModal}>Create Account</button>
            <SignupModal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                onSubmit={handleSubmit} 
            />
        </div>
    );
};

export default Account;

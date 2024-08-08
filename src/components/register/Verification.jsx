import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbPasswordMobilePhone } from "react-icons/tb";

export const Verification = () => {
    const navigate = useNavigate();

    // State management
    const [verificationCode, setVerificationCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('9876543210'); // Example phone number, replace with actual data
    const [resendCounter, setResendCounter] = useState(60); // Countdown for resend button

    useEffect(() => {
        // Countdown timer for resend button
        let timer;
        if (resendCounter > 0) {
            timer = setInterval(() => {
                setResendCounter(prevCounter => prevCounter - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [resendCounter]);

    const handleVerification = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://your-api-endpoint.com/auth/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, verificationCode }),
            });

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                navigate('/dashboard'); // Redirect to dashboard or desired route on successful verification
            } else {
                alert('Verification failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during verification');
        }
    };

    const handleResendCode = async () => {
        try {
            const response = await fetch('https://your-api-endpoint.com/auth/resend-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                setResendCounter(60); // Reset the countdown timer
                alert('Verification code resent successfully');
            } else {
                alert('Failed to resend verification code: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while resending the verification code');
        }
    };

    return (
        <div className='container-fluid register d-flex justify-content-center col-12'>
            <div className="register-container">
                <div className="register-box mt-5">
                    <div>
                        <button className='register-btn m-3'>REGISTER YOUR ACCOUNT</button>
                    </div>

                    <div>
                        <h3>VERIFICATION OTP HAS BEEN SENT TO </h3>
                        <h2>{phoneNumber}</h2>
                    </div>

                    <div>
                        <TbPasswordMobilePhone style={{ fontSize: 25 }} />
                        <span> VERIFICATION CODE</span>
                    </div>

                    <div>
                        <input
                            type="text"
                            className='register-input m-1'
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                    </div>

                    <div>HAVEN'T RECEIVED ANY CODE?</div>
                    <div>
                        <button
                            className='register-btn mt-3'
                            onClick={handleResendCode}
                            disabled={resendCounter > 0}
                        >
                            {resendCounter > 0 ? `Resend in ${resendCounter}s` : 'CLICK HERE TO RESEND THE CODE'}
                        </button>
                    </div>

                    <div>
                        <button className='register-btn mt-3 me-2' onClick={handleVerification}>VERIFY</button>
                        <button className='register-btn mt-3' onClick={() => navigate('/forgotVerification')}>FORGOT VERIFICATION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

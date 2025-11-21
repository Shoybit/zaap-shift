import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../Hooks/UseAuth';

const SocalLogin = () => {
    const { signInWithGoogle } = UseAuth(); // Get Google login function

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log('Google user:', result.user);
            })
            .catch(error => {
                console.log('Google login error:', error.message);
            });
    };

    return (
        <div className="mt-4 text-center">
            <p className="text-gray-500 mb-2">OR</p>
            <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-full max-w-xs mx-auto border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition"
            >
                <FcGoogle className="mr-2 w-6 h-6" />
                Continue with Google
            </button>
        </div>
    );
};

export default SocalLogin;

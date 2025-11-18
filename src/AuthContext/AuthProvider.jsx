import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const AuthProvider = ({ children }) => {
    const registeruser  = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

     const singInUser = (email, password ) => {
        return createUserWithEmailAndPassword(auth,email,password)
     }
    



    const authInfo = {
        registeruser,
        singInUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
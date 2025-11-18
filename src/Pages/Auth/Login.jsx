import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = UseAuth(); 

    const handelLogin = (data) => {
        console.log('form data:', data);

        signInUser(data.email, data.password)
            .then(result => {
                console.log("User logged in:", result.user);
            })
            .catch(error => {
                console.log("Login Error:", error.message);
            });
    };

    return (
<form onSubmit={handleSubmit(handelLogin)}>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

        <div className="card w-full max-w-sm bg-white shadow-xl rounded-xl p-6">
            
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                Welcome Back
            </h2>

            <fieldset className="fieldset space-y-3">

                {/* Email Field */}
                <div>
                    <label className="label font-semibold text-gray-600">Email</label>
                    <input 
                        type="email" 
                        {...register('email', { required: true })} 
                        className="input input-bordered w-full" 
                        placeholder="Enter your email" 
                    />
                    {errors.email?.type === 'required' && (
                        <p className="text-red-500 text-sm">Email is required</p>
                    )}
                </div>

                {/* Password Field */}
                <div>
                    <label className="label font-semibold text-gray-600">Password</label>
                    <input 
                        type="password" 
                        {...register('password', { required: true, minLength: 6 })} 
                        className="input input-bordered w-full" 
                        placeholder="Enter your password" 
                    />
                    {errors.password?.type === 'required' && (
                        <p className="text-red-500 text-sm">Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className="text-red-500 text-sm">Password must be at least 6 characters</p>
                    )}
                </div>

                <div className="flex justify-between text-sm mt-2">
                    <a className="link link-hover text-blue-600">Forgot password?</a>
                    <a href="/register" className="link link-hover text-blue-600">Create account</a>

                </div>

                <button className="btn btn-neutral w-full mt-4">Login</button>
            </fieldset>

        </div>
    </div>
</form>

    );
};

export default Login;

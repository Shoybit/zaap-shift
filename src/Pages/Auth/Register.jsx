import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registeruser } = UseAuth();

    const handleRegistration = (data) => {
        console.log('after', data);
        registeruser(data.email, data.password)
            .then(result => {
                console.log("User registered:", result.user);
            })
            .catch(error => {
                console.log("Registration Error:", error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="card w-full max-w-sm bg-white shadow-xl rounded-xl p-6">
                
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <fieldset className="fieldset space-y-4">

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
                                <p className="text-red-500 text-sm mt-1">Email is required</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="label font-semibold text-gray-600">Password</label>
                            <input 
                                type="password" 
                                {...register('password', { 
                                    required: true, 
                                    minLength: 6, 
                                    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/ 
                                })} 
                                className="input input-bordered w-full" 
                                placeholder="Enter your password" 
                            />
                            {errors.password?.type === 'required' && (
                                <p className="text-red-500 text-sm mt-1">Password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className="text-red-500 text-sm mt-1">
                                    Password must include an uppercase letter, a number, and a special character
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between text-sm mt-2">
                            <a className="link link-hover text-blue-600">Forgot password?</a>
                        </div>

                        <button className="btn btn-neutral w-full mt-4">Register</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;

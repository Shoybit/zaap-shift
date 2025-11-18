import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

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
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">

                        {/* Email Field */}
                        <label className="label">Email</label>
                        <input 
                            type="email" 
                            {...register('email', { required: true })} 
                            className="input" 
                            placeholder="Email" 
                        />
                        {errors.email?.type === 'required' && (
                            <p className="text-red-500">Email is required</p>
                        )}

                        {/* Password Field */}
                        <label className="label">Password</label>
                        <input 
                            type="password" 
                            {...register('password', { required: true, minLength: 6 })} 
                            className="input" 
                            placeholder="Password" 
                        />
                        {errors.password?.type === 'required' && (
                            <p className="text-red-500">Password is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className="text-red-500">Password must be at least 6 characters</p>
                        )}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>

                    </fieldset>
                </div>
            </div>
        </form>
    );
};

export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {registeruser} = UseAuth()

    const handleRegistration = (data) => {
        console.log('after', data);
        registeruser (data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(errors => {
            console.log(errors);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        {...register('email', { required: true })} 
                        className="input" 
                        placeholder="Email" 
                    />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}

                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        {...register('password', { required: true, minLength: 6 , pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/})} 
                        className="input" 
                        placeholder="Password" 
                    />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500'>
                    Password must include an uppercase letter, a number, and a special character
                    </p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;

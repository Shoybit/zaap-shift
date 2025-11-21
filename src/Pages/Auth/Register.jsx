import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocalLogin from '../SocalLogin';
import UseAuth from '../../Hooks/useAuth';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { registerUser, updateUserProfile } = UseAuth(); 
            const location = useLocation()
            const navigate = useNavigate()

const handleRegistration = async (data) => {
    try {
        const profileImg = data.photo[0];

        // 1️⃣ Register user
        const result = await registerUser(data.email, data.password);
        const user = result.user;
        console.log("User registered:", user);

        // 2️⃣ Upload image to ImgBB
        const formData = new FormData();
        formData.append("image", profileImg);

        const uploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        const res = await axios.post(uploadUrl, formData);
        const imageURL = res.data.data.display_url;
        console.log("Uploaded Image:", imageURL);

        // 3️⃣ Update Firebase user profile
        await updateUserProfile({
            displayName: data.name,
            photoURL: imageURL
        });

        console.log("Profile updated successfully!");

        reset();
        

    } catch (error) {
        console.error("Error during registration:", error);
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="card w-full max-w-sm bg-white shadow-xl rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <fieldset className="space-y-4">

                        {/* Name Field */}
                        <div>
                            <label className="label font-semibold text-gray-600">Name</label>
                            <input 
                                type="text"
                                {...register('name', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">Name is required</p>
                            )}
                        </div>

                        {/* Photo Field */}
                        <div>
                            <label className="label font-semibold text-gray-600">Photo</label>
                            <input 
                                type="file"
                                {...register('photo', { required: true })}
                                className="file-input input-bordered w-full"
                            />
                            {errors.photo && (
                                <p className="text-red-500 text-sm mt-1">Photo is required</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="label font-semibold text-gray-600">Email</label>
                            <input 
                                type="email"
                                {...register('email', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
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

                        <button className="btn btn-neutral w-full mt-4">Register</button>
                    </fieldset>

                    <p className="text-center mt-4 text-sm text-gray-600">
                        Already have an account
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>

                    <SocalLogin />

                </form>
            </div>
        </div>
    );
};

export default Register;

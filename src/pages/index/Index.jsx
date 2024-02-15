import React from "react";
import { WrapperForm } from '../../components/Form/WrapperForm'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from 'axios';

import { storeUserToken } from "../../app/redux/slices/authSlice";

function Index() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            // Make a POST request to your PHP backend for user login
            const response = await axios.post('/api/login', data);

            // Store user token or session data in Redux store
            dispatch(storeUserToken(response.data.token));

            // Redirect user to the homepage
            history.push('/homepage'); // Change '/' to your homepage route
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    return (
        <div className="">
            <WrapperForm>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
                    <h1 className="text-2xl font-bold">Bienvenidos</h1>
                    <label className="mt-4 text-xl">
                        <h2>Email</h2>
                        <input className="px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="email" {...register("email", { required: true })}></input>
                    </label>
                    <label className="mt-4 text-xl">
                        <h2>Password</h2>
                        <input type="password" className="px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="password" {...register("password", { required: true })}></input>
                    </label>
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        Enviar
                    </button>
                </form>
            </WrapperForm>
        </div>
    );
}

export default Index;


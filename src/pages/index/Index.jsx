import React, { useEffect } from "react";
import { WrapperForm } from '../../components/Form/WrapperForm'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { storeUserToken } from "../../app/redux/slices/authSlice";
import { usePostLoginUserMutation } from "../../app/redux/querys/authquerys";




function Index() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [postLoginForm, { isSuccess, isError, isLoading, error }] =
        usePostLoginUserMutation();
      const dispatch = useDispatch();
      const onSubmit = async (data) => {
        console.log(data)
        const response = await postLoginForm(data);
        dispatch(storeUserToken(response));
      };

  return (
    <div className="">
        <WrapperForm>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
        <h1 className="text-2xl text-bold">Bienvenidos</h1>
        <label className="mt-4 text-xl">
            <h2>Email</h2>
            <input className="px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="email" {...register("email", { required: true })}></input>
        </label>
        <label className="mt-4 text-xl">
            <h2>Password</h2>
            <input type="password" className="px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="password" {...register("password", { required: true })}></input>
        </label>
        <button type="submit">
            Enviar
        </button>
        </form>
        </WrapperForm>
    </div>
  )
}

export default Index
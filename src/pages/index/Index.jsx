import React, { useEffect } from "react";
import { WrapperForm } from '../../components/Form/WrapperForm'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
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
        console.log(data.email)
        jsCookie.set("MFM_EMAIL",data.email)
        const response = await postLoginForm(data);
        console.log(response);
        dispatch(storeUserToken(response));
      };

  return (
    <div className="mt-28">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
        <h1 className="text-[30px] text-bold">Bienvenid@</h1>
        <label className="mt-12 text-xl">
            <h2>Email</h2>
            <input className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="email" {...register("email", { required: true })}></input>
        </label>
        <label className="mt-12 text-xl">
            <h2>Password</h2>
            <input type="password" className="mt-6 px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="password" {...register("password", { required: true })}></input>
        </label>
        <button type="submit" className="mt-16 text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Ingresar
        </button>
        </form>
    </div>
  )
}
<script
  type="text/javascript"
  src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
export default Index
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostChangePasswordMutation, usePostRecoverQuestionsMutation } from '../../app/redux/querys/authquerys';


export const GetQuestionsForm = ({questionsList={pregunta_1:"pregunta1",pregunta_2:"pregunta_2"}, email={email}}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [postChangePassword, { isSuccess, isError, isLoading, error }] =
      usePostChangePasswordMutation();
      const onSubmit = async (data) => {
        data["email"]=email
        const response = await postChangePassword(data);
        if (response.error && response.error.data && response.error.data.errors) {
            window.alert(JSON.stringify(response.error.data.errors))
        } else if (response.error) {
            window.alert(JSON.stringify(response.error))
        } else if(response&&response.data&&response.data.message){
            window.alert(JSON.stringify(response.data.message))
            window.location="/"
        }
        
      };


  return (
    <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
        <h1 className="text-[30px] text-bold">Responda las isguientes preguntas y coloque su nueva contraseña</h1>
        <label className="mt-12 text-xl">
            <h2>{questionsList.pregunta_1}</h2>
            <input className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="answer_1" {...register("answer_1", { required: true })}></input>
        </label>
        <label className="mt-12 text-xl">
            <h2>{questionsList.pregunta_2}</h2>
            <input className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="answer_2" {...register("answer_2", { required: true })}></input>
        </label>
        <label className="mt-12 text-xl">
            <h2>Nueva contraseña</h2>
            <input type='password' className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="password" {...register("password", { required: true })}></input>
        </label>
        <label className="mt-12 text-xl">
            <h2>Confirma la nueva contraseña</h2>
            <input type='password' className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="password_confirmation" {...register("password_confirmation", { required: true })}></input>
        </label>
        <button type="submit" className="mt-16 text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Cambiar contraseña
        </button>
        <div className="w-full items-center flex flex-row justify-center">
        <Link to="/"  className=" text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Ya tengo una cuenta
        </Link>
        </div>
        </form> 
    </div>
  );
}

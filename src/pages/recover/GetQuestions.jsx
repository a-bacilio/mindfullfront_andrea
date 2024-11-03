import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostRecoverQuestionsMutation } from '../../app/redux/querys/authquerys';


export const GetQuestions = ({setQuestionsList=()=>{},QuestionList={}}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [postRecoverQuestions, { isSuccess, isError, isLoading, error }] =
      usePostRecoverQuestionsMutation();
      const onSubmit = async (data) => {
        const response = await postRecoverQuestions(data);
        if(response&&response.data&&response.data.data&&response.data.data.pregunta_1){
            console.log(response.data.data.pregunta_1);
        }
        
      };


  return (
    <div className="mt-28">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
        <h1 className="text-[30px] text-bold">Coloque su correo</h1>
        <label className="mt-12 text-xl">
            <h2>Email</h2>
            <input className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="email" {...register("email", { required: true })}></input>
        </label>
        
        <button type="submit" className="mt-16 text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Obtener preguntas
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

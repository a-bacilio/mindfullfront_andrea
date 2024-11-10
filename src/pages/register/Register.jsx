import React, { useEffect } from "react";
import { WrapperForm } from '../../components/Form/WrapperForm'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostRegisterUserMutation } from "../../app/redux/querys/authquerys";




function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [postRegisterForm, { isSuccess, isError, isLoading, error }] =
      usePostRegisterUserMutation();
      const onSubmit = async (data) => {
        console.log(data)
        data["question_2"]="1"
        data["answer_2"]="1"
        const response = await postRegisterForm(data);
        console.log(response);
        if(response && response.data && response.data.message && response.data.message=="User was created"){
          window.alert("Usuario creado")
          window.location="/"
        }else if(response && response.data && response.data.errors){
          window.alert(JSON.stringify(response.data.errors))
        }else if(response.data){
            window.alert(JSON.stringify(response.data))
        }else if(response && response.error && response.error.data && response.error.data.errors){
            window.alert(JSON.stringify(response.error.data.errors))
        }else if(response && response.error && response.error.data){
            window.alert(JSON.stringify(response.error.data))
        }else if(response && response.error){
            window.alert(JSON.stringify(response.error))
        }else if(response){
            window.alert(JSON.stringify(response))
        }else{
            window.alert("No se ha recibido respuesta")
        }
      };

  return (
    <div className="mt-28">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col items-center justify-start">
        <h1 className="text-[30px] text-bold">Registrese a continuación</h1>
        <label className="mt-12 text-xl">
            <h2>Email</h2>
            <input className="px-2 py-1 mt-6 border-2 border-solid rounded-lg border-black" name="email" {...register("email", { required: true })}></input>
        </label>
        <label className="mt-2 text-xl">
            <h2>Password</h2>
            <input type="password" className=" px-2 py-1 mt-1 border-2 border-solid rounded-lg border-black" name="password" {...register("password", { required: true })}></input>
        </label>
        <label className="mt-2 text-xl">
            <h2>Confirme su contraseña</h2>
            <input type="password" className="px-2 py-1  border-2 border-solid rounded-lg border-black" name="email" {...register("password_confirmation", { required: true })}></input>
        </label>
        <label className="mt-2 text-xl">
            <h2>Nombre</h2>
            <input type="text" className="px-2 py-1  border-2 border-solid rounded-lg border-black" name="name" {...register("name", { required: true })}></input>
        </label>
        <label className="mt-2 text-xl">
            <h2>Pregunta de seguridad 1</h2>
            <input type="text" className="px-2 py-1  border-2 border-solid rounded-lg border-black" name="question_1" {...register("question_1", { required: true })}></input>
        </label>
        <label className="mt-2 text-xl">
            <h2>Respuesta 1</h2>
            <input type="text" className="px-2 py-1  border-2 border-solid rounded-lg border-black" name="answer_1" {...register("answer_1", { required: true })}></input>
        </label>
        <button type="submit" className="mt-16 text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Registrarse
        </button>
        <div className="w-full items-center flex flex-row justify-center">
        <Link to="/"  className=" text-xl text-white px-6 py-2 rounded mb-4 bg-rose-400 border border-black">
            Ya tengo una cuenta
        </Link>
        </div>
        </form>
        
        
    </div>
  )
}
<script
  type="text/javascript"
  src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
export default Register
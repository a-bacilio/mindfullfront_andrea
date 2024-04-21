import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { usePostLoginUserMutation, usePostRecoverQuestionsMutation, usePostRegisterUserMutation } from "../app/redux/querys/authquerys";

function Apitest() {

    //LOGIN TEST

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [postLoginForm, { isSuccess, isError, isLoading, error }] =
        usePostLoginUserMutation();

    const [login_sent_message, set_login_sent_message] = useState("")
    const [login_answer, set_login_answer] = useState("")
    const [login_error, set_login_error] = useState("")

    const onSubmit = async (data) => {
        console.log(data)
        
        const { data: response, error } = await postLoginForm(data)
        set_login_sent_message(JSON.stringify(data))
        set_login_answer(JSON.stringify(response))
        set_login_error(JSON.stringify(error))
    };

    //REGISTER TEST

    const {
        register:register_register,
        handleSubmit:register_handleSubmit,
        formState: { errors: register_errors },
    } = useForm();

    const [postRegisterForm, { isSuccessRegisterForm, isErrorRegisterForm, isLoadingRegisterForm, errorRegisterForm }] =
        usePostRegisterUserMutation();

    const [register_sent_message, set_register_sent_message] = useState("")
    const [register_answer, set_register_answer] = useState("")
    const [register_error, set_register_error] = useState("")

    const onSubmitRegister = async (data) => {
        console.log(data)
        const { data: response, error } = await postRegisterForm(data)
        set_register_sent_message(JSON.stringify(data))
        set_register_answer(JSON.stringify(response))
        set_register_error(JSON.stringify(error))
    };

    //RECOVER QUESTIONS TEST

    const {
        register: recover_question_register,
        handleSubmit: recover_question_handlesubmit,
        formState: { errors: recover_question_errors },
    } = useForm();

    const [post_recover_questions_Form, { isSuccess_recover_questions_Form, isError_recover_questions_Form, isLoading_recover_questions_Form, error_recover_questions_Form }] =
        usePostRecoverQuestionsMutation();

    const [recover_questions_sent_message, set_recover_questions_sent_message] = useState("")
    const [recover_questions_answer, set_recover_questions_answer] = useState("")
    const [recover_questions_error, set_recover_questions_error] = useState("")

    const onSubmit_recover_questions = async (data) => {
        console.log(data)
        const { data: response, error } = await post_recover_questions_Form(data)
        set_recover_questions_sent_message(JSON.stringify(data))
        set_recover_questions_answer(JSON.stringify(response))
        set_recover_questions_error(JSON.stringify(error))
    };


   

    return (
        <div className='w-full h-full px-1'>
            <div>Test de APIS</div>
            <div>
                <h1 className='mt-5 text-xl'>Test login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label name="email">
                            <h2>Correo</h2>
                            <input name="email" {...register("email", { required: true })} />
                        </label>
                        <label name="password">
                            <h2>Contraseña</h2>
                            <input type="password" name="password" {...register("password", { required: true })} />
                        </label>
                        <label>
                            <input className='p-2 bg-white rounded-sm' type="submit" />
                        </label>
                    </form>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se envia</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{login_sent_message}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Respuesta)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{login_answer}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Error)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{login_error}</div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mt-5 text-xl'>Test Register</h1>
                <div>
                    <form onSubmit={register_handleSubmit(onSubmitRegister)}>
                        <label name="name">
                            <h2>Nombre</h2>
                            <input name="name" {...register_register("name", { required: true })} />
                        </label>
                        <label name="email">
                            <h2>Correo</h2>
                            <input name="email" {...register_register("email", { required: true })} />
                        </label>
                        <label name="password">
                            <h2>Contraseña</h2>
                            <input type="password" name="password" {...register_register("password", { required: true })} />
                        </label>
                        <label name="password_confirmation">
                            <h2>Confirmar contraseña</h2>
                            <input type="password" name="password_confirmation" {...register_register("password_confirmation", { required: true })} />
                        </label>
                        <label name="question_1">
                            <h2>Pregunta de seguridad 1</h2>
                            <input type="text" name="question_1" {...register_register("question_1", { required: true })} />
                        </label>
                        <label name="answer_1">
                            <h2>Respuesta a la pregunta 1</h2>
                            <input type="text" name="answer_1" {...register_register("answer_1", { required: true })} />
                        </label>
                        <label name="question_2">
                            <h2>Pregunta de seguridad 2</h2>
                            <input type="text" name="question_2" {...register_register("question_2", { required: true })} />
                        </label>
                        <label name="answer_2">
                            <h2>Respuesta a la pregunta 2</h2>
                            <input type="text" name="answer_2" {...register_register("answer_2", { required: true })} />
                        </label>
                        <label>
                            <input className='p-2 bg-white rounded-sm' type="submit" />
                        </label>
                    </form>


                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se envia</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{register_sent_message}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Respuesta)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{register_answer}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Error)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{register_error}</div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mt-5 text-xl'>Test Recover Questions</h1>
                <div>
                    <form onSubmit={recover_question_handlesubmit(onSubmit_recover_questions)}>
                        <label name="email">
                            <h2>Correo</h2>
                            <input name="email" {...recover_question_register("email", { required: true })} />
                        </label>
                        
                        <label>
                            <input className='p-2 bg-white rounded-sm' type="submit" />
                        </label>
                    </form>


                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se envia</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{recover_questions_sent_message}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Respuesta)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{recover_questions_answer}</div>
                    </div>
                    <div className='bg-white p-2 rounded-sm mt-8'>
                        <h2>Que se recibe (Error)</h2>
                        <div className='border-solid border-2 border-black rounded-lg p-2'>{recover_questions_error}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apitest
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostRegisterUserMutation } from "../../app/redux/querys/authquerys";
import { GetQuestions } from "./GetQuestions";




function Recover() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [postRegisterForm, { isSuccess, isError, isLoading, error }] =
      usePostRegisterUserMutation();
      const onSubmit = async (data) => {
        console.log(data)
        const response = await postRegisterForm(data);
        console.log(response);
        if(response && response.data && response.data.message && response.data.message=="User was created"){
          window.alert("Usuario creado")
          window.location="/"
        }else{
          window.alert("El correo ya esta siendo usado")
        }
      };

  return (
    
    
    <GetQuestions/>
    
    
  )
}
<script
  type="text/javascript"
  src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
export default Recover
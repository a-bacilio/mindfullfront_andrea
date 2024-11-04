import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostRegisterUserMutation } from "../../app/redux/querys/authquerys";
import { GetQuestions } from "./GetQuestions";
import { useState } from "react";
import {GetQuestionsForm} from "./GetQuestionsForm";




function Recover() {

    const [card, setCard] = useState(1)
    const [questionsList, setQuestionsList] = useState({pregunta_1:"pregunta1",pregunta_2:"pregunta_2"})
    const [email, setEmail] = useState("")



  return (
    
    <div className="mt-24">
         {card==1 && (<GetQuestions setQuestionsList={setQuestionsList} setCard={setCard} setEmail={setEmail}/> )}
         {card==2 && (<GetQuestionsForm questionsList={questionsList} email={email}/> )}
    </div>
    
    
    
  )
}
<script
  type="text/javascript"
  src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
export default Recover
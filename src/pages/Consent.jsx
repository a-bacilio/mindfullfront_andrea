import React from 'react'

function Consent() {
  return (
    <><div class="w-full max-w-96 mt-8 mb-8 h-full p-10 overflow-auto bg-purple-800/75 rounded-lg text-white text-justify">
      <div className='mb-8'>
        CONSENTIMIENTO INFORMADO PARA PARTICIPAR EN UN ESTUDIO DE INVESTIGACIÓN
      </div>

      <div className='mb-8'>
        Titulo del estudio: IMPLEMENTACIÓN DE UNA APLICACIÓN MÓVIL DE MINDFULNESS PARA MEJORAR LOS ÍNDICES DE ESTRÉS PERCIBIDO EN ESTUDIANTES UNIVERSITARIOS DE PREGRADO EN UNA UNIVERSIDAD DE LIMA, PERÚ.</div>
      <div className='mb-8'>Investigadora: Andrea Montero Institución: Universidad Peruana Cayetano Heredia</div>


      <div className='mb-8'>
        Propósito del estudio:
        Lo estamos invitando a participar en un estudio para determinar si una aplicación nueva de mindfulness puede mejorar los índices de estrés en los estudiantes de pregrado entre el segundo y quinto año, de la Universidad Peruana Cayetano Heredia (UPCH).
      </div><div className='mb-8'>El estrés puede afectar el bienestar psicológico e interfiere con el aprendizaje y el desempeño clínico. Por este motivo, hay una necesidad clara para que las universidades incluyan el bienestar de los estudiantes en salud mental como un objetivo en el currículo.
      </div><div>Actualmente, una de las intervenciones que se utiliza para la reducción de estrés es el uso de entrenamiento en Mindfulness Based Stress Reduction (MBSR). Esto consiste en un entrenamiento de 8 semanas en el que los participantes aprenden a enfocar su atención en el presente a través de ejercicios de meditación.
      </div><div className='mb-8'>También es posible reducir el estrés a través de otras formas de meditación, realizando ejercicio, haciendo modificaciones en la dieta, manteniendo un fuerte circulo social y durmiendo mejor.
      </div>

      <div className='mb-8'>
        El objetivo del presente estudio consiste en implementar una aplicación móvil de mindfulness enfocada en estudiantes universitarios entre el segundo y quinto año, que les permita enfocarse en su bienestar y prevenir enfermedades de salud mental. Asimismo, se busca brindar una terapia más breve a las antes descritas para fomentar su facilidad de uso.
      </div>
      Procedimientos:
      <div className='mb-8'>
        Si decide participar en este estudio se realizará lo siguiente:</div>
      <div className='mb-8'>
        1.	Se le realizará una encuesta de 10 preguntas de aproximadamente 5 minutos de duración donde se le preguntará sobre su estrés percibido en la vida diaria
        2.	Se le brindara una aplicación de mindfulness para su uso, que incluye 30 sesiones de 5 minutos. La app estará habilitada por un periodo de 2 meses. (mayo 2024-junio 2024).
        3.	Se repetirá la encuesta de estrés percibido en el nivel 15 y al finalizar la app.
        4.	Al finalizar los 2 meses se le solicitara llenar una encuesta sobre la usabilidad de la app de 21 preguntas que tomara unos 7 minutos.
      </div>
      <div className='mb-8'>
        Riesgos:
        Existe la posibilidad de que alguna de las preguntas pueda generarle alguna incomodidad, usted es libre de contestarlas o no.
      </div><div className='mb-8'>
        Beneficios:
        Recibirá los resultados de su estrés percibido y será evaluado por orientación y consejería si es necesario.
        Se le brindará acceso a una aplicación para disminuir el estrés percibido.
        Ayudará en el proceso de desarrollo de una aplicación de mindfulness que brindará beneficios a los alumnos de la Universidad Peruana Cayetano Heredia..
      </div>
      <div className='mb-8'> Costos y compensación
        Los costos de todos los exámenes serán cubiertos por el estudio y no le ocasionarán gasto alguno. No deberá pagar nada por participar en el estudio.
      </div>
      <div className='mb-8'>
        Confidencialidad:
        Nosotros guardaremos su información con códigos y no con nombres. Sólo los investigadores tendrán acceso a las bases de datos. Si los resultados de este seguimiento son publicados, no se mostrará ninguna información que permita la identificación de las personas que participaron en este estudio.
      </div>
      <div className='mb-8'>
        USO FUTURO DE INFORMACIÓN
        Deseamos almacenar los datos recaudados en esta investigación por 20 años. Estos datos podrán ser usados para investigaciones futuras.
        Estos datos almacenados no tendrán nombres ni otro dato personal, sólo serán identificables con códigos.
        Si no desea que los datos recaudados en esta investigación permanezcan almacenados ni utilizados posteriormente, aún puede seguir participando del estudio. En ese caso, terminada la investigación sus datos serán eliminados.
        Previamente al uso de sus datos en un futuro proyecto de investigación, ese proyecto contará con el permiso de un  Comité Institucional de Ética en Investigación.
        Autorizo a tener mis datos almacenados por 20 años para un uso futuro en otras investigaciones. (Después de este periodo de tiempo se eliminarán).
      </div>
      <div className='mb-8'>
        Derechos del participante:
        Si decide participar en el estudio, puede retirarse de éste en cualquier momento, o no participar en una parte del estudio sin daño alguno. Si tiene alguna duda adicional, por favor pregunte al personal del estudio o llame a la Dra. Andrea Montero Quiñe, al teléfono 942222576.
      </div>
      <div className='mb-8'>Si tiene preguntas sobre los aspectos éticos del estudio, o cree que ha sido tratado injustamente puede contactar a la Dra. Frine Samalvides Cuba, presidenta del Comité Institucional de Ética en Investigación de la Universidad Peruana Cayetano Heredia al teléfono 01-3190000 anexo 201355 o al correo electrónico: duict.cieh@oficinas-upch.pe
        Una copia de este consentimiento informado le será entregada vía correo electrónico.</div>
      <div className='mb-8'>
        DECLARACIÓN Y/O CONSENTIMIENTO
        Acepto voluntariamente participar en este estudio, comprendo de las actividades en las que participaré si decido ingresar al estudio, también entiendo que puedo decidir no participar y que puedo retirarme del estudio en cualquier momento.</div>

    </div >

      <div class='flex-row flex space-x-20'>
        <button className='bg-white w-32 opacity-55 rounded-lg'>No acepto</button>
        <button className='bg-white w-32 opacity-80 rounded-lg'>Acepto</button>

      </div></>
      
  )
}

export default Consent
import jsCookie from "js-cookie";

const checktoken = (error) => {
    if (error && error.data && error.data.error){
        if ((error.data.error == "expired token") || (error.data.error == "token not found") || (error.data.error == "invalid token") ){
          jsCookie.set("MFM_NAME", "");
          jsCookie.set("MFM_LEVEL", "");
          jsCookie.set("MFM_LASTCOMP", "");
          jsCookie.set("MFM_TOKEN", "");
          window.alert("Necesita loguearse nuevamente");
          window.location="/"
        }
      }
}
export default checktoken;
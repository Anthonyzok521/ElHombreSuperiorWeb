import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ContainerCards } from "../../Cards/ContainerCards";

//const recaptcha_host = import.meta.env.VITE_RECAPTCHA_HOST;
const sitekey = import.meta.env.VITE_RECAPTCHA_SY;

export const Recaptcha: React.FC = () => {
  const captchaRef = React.createRef<ReCAPTCHA>();
  const [robot, setRobot] = useState<boolean>(true);

  const isRobot = () => {
    setRobot(false);
  };

  const handleClick = async () => {
    if(!robot){    
      const main = document.querySelector("#container") as HTMLElement;
      ReactDOM.render(<ContainerCards />, main);
      const form = document.querySelector("#recaptcha") as HTMLElement;
      form.remove();
    }

    alert("Por favor, confirma que no eres un robot");
  };
  return (
    <form id="recaptcha" className="w-full flex justify-center gap-10 flex-col">
      <div className="w-full">
        <h1 className="text-3xl font-bebas text-center">Completa el reCaptcha</h1>
        <ReCAPTCHA sitekey={sitekey} ref={captchaRef} onChange={isRobot} />
      </div>
      <div className="w-full flex justify-center">
        {robot ? (
          <></>
        ) : (
          <button onClick={handleClick} className="p-2 bg-amber-300 rounded-md text-black font-bebas hover:bg-amber-400 active:bg-amber-500 transition-all">
            Ver links
          </button>
        )}
      </div>
    </form>
  );
};

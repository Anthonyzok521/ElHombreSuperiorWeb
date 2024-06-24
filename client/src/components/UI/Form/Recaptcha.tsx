import React, { useRef } from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ContainerCards } from "../../Cards/ContainerCards";

const recaptcha_host = import.meta.env.VITE_RECAPTCHA_HOST;
const sitekey = import.meta.env.VITE_RECAPTCHA_SY;

export const Recaptcha: React.FC = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = captchaRef.current?.getValue();
    captchaRef.current?.reset();

    await fetch(recaptcha_host + "/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((respose) => respose.json())
      .then((data) => {
        console.log(data);
        const main = document.querySelector("#container") as HTMLElement;
        ReactDOM.createPortal(<ContainerCards />, main);
        const form = document.querySelector("#recaptcha") as HTMLElement;
        form.remove();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form id="recaptcha" onSubmit={handleSubmit} className="w-full flex justify-center gap-10 flex-col">
      <div className="w-full">
        <ReCAPTCHA sitekey={sitekey} ref={captchaRef} />
      </div>
      <div className="w-full flex justify-center">
      <button
        type="submit"
        className="p-2 bg-amber-300 rounded-md text-black font-bebas"
      >
        Ver links
      </button>
      </div>
      
    </form>
  );
};

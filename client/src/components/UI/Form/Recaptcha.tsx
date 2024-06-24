import React, { useRef} from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ContainerCards } from "../../Cards/ContainerCards";

const recaptcha_host = import.meta.env.VITE_RECAPTCHA_HOST;



export const Recaptcha: React.FC = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = captchaRef.current?.getValue();
    captchaRef.current?.reset();

    await fetch(recaptcha_host + "/post", {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form action="/verify" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="input" />
      <ReCAPTCHA
        sitekey={import.meta.env.REACT_APP_SITE_KEY}
        ref={captchaRef}
      />
      <button type="submit">Ver links</button>
    </form>
  );
};

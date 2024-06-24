import { Recaptcha } from "../Form/Recaptcha";

export const Main: React.FC = () => {
  return (
    <main id="container" className="w-full flex justify-center items-center">
      {/*<Cards /> From Success ReCaptcha*/}

      <form action="" method="post">
        <Recaptcha />
      </form>
    </main>
  );
};

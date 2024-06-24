type Props = {
  link: string;
  title: string;
  description: string;
  image: string;
};

export const Cards: React.FC<Props> = (props: Props) => {

  return (
    <div className="h-56 w-56 rounded-lg bg-white flex flex-col justify-between overflow-hidden">
      <header>
        <h1 className="text-xl text-center text-black">{props.title}</h1>
      </header>
      <div className="w-full p-4 flex justify-center">
        <a href={props.link} className="w-full hover:animate-bounce transition-all flex justify-center">
        <img
          src={props.image}
          className="max-h-20 max-w-20 object-cover rounded-lg "
          alt={props.title}
        />
        </a>
      </div>
      <div className="bg-amber-300 h-10 hover:h-20 hover:cursor-pointer transition-all">
        <div className="flex flex-col justify-center items-center p-3 ">
          <h3 className="text-black font-bebas uppercase">Descripción</h3>
        <p className="text-center text-black">{props.description}</p>
        </div>
        
      </div>
    </div>
  );
};

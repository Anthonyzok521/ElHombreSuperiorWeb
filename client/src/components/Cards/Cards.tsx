type Props = {
  link: string;
  title: string;
  description: string;
  image: string;
};

export const Cards: React.FC<Props> = (props: Props) => {
  return (
    <div className="h-60 w-60 rounded-lg bg-white p-5">
      <header>
        <h1 className="text-xl text-black">{props.title}</h1>
      </header>
    </div>
  );
};

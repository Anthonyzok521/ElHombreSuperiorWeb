type Props = {
  banner: string;
};

export default function Header({ banner }: Props) {
  return (
    <header className="w-full h-72 overflow-hidden">
      <div className="w-full max-md:aspect-w-16 max-md:aspect-h-9 aspect-w-16 aspect-h-9 h-80 ">
        <img
          src={banner}
          className="max-md:object-cover object-cover rounded-e-sm opacity-60"
          alt="El Hombre Superior logo"
        />
      </div>
    </header>
  );
}

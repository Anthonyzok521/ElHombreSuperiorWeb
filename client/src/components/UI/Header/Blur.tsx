type Props = {
  banner: string;
};

export default function Blur({ banner }: Props) {
  return (
    <div className="overflow-hidden absolute w-full h-72 shadow-xl blur-md">
      <div className="absolute w-full max-md:aspect-w-16 max-md:aspect-h-9 aspect-w-16 aspect-h-9 h-80">
        <img
          src={banner}
          className="max-md:object-cover object-cover rounded-e-sm"
          alt="El Hombre Superior logo"
        />
      </div>
    </div>
  );
}

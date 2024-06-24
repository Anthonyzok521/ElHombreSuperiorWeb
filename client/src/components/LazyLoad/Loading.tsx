export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full bg-zinc-900 gap-10">
      <div className="scale-150">
      <div className=" animate-spin rounded-full border-b-8 border-t-8 border-r-8 border-l-8 border-b-yellow-500 border-t-yellow-500 border-r-transparent border-l-transparent"></div>
      </div>
      <h1 className="text-3xl font-bebas animate-pulse">El Hombre Superior</h1>
    </div>
  );
};

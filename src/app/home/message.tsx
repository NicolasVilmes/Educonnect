interface Message {
  Text: string;
  Tittle: string;
}

export const Message = ({ Tittle, Text }: Message) => {
  return (
    <main className="h-[150px] w-full border-[1px] border-slate-500 rounded-xl drop-shadow-2xl p-3">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl">{Tittle}</h1>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <div className="p-2">
        <p>{Text}</p>
      </div>
    </main>
  );
};

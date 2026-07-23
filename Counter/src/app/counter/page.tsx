'use client';

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const increament = () => setCount(prev => prev + 1);
  const decreament = () => setCount(prev => prev - 1);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl text-center space-y-6 border border-zinc-800">
        <h1 className="text-3xl font-bold text-lime-400">
          Counter App
        </h1>

        <p className="text-6xl font-bold text-white">
          {count}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={decreament}
            className="w-12 h-12 rounded-full bg-red-500 text-white text-2xl font-bold hover:bg-red-600 active:scale-95 transition-all"
          >
            −
          </button>

          <button
            onClick={increament}
            className="w-12 h-12 rounded-full bg-lime-500 text-black text-2xl font-bold hover:bg-lime-400 active:scale-95 transition-all"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
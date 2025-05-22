import { useState } from 'react';

export default function Testing() {
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState('pending');

  function increment() {
    let newValue = number + 1;
    setNumber(newValue);
  }

  function decrement() {
    let newValue = number - 1;
    setNumber(newValue);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <span className="text-3xl font-bold">{number}</span>
      <div className="w-full flex justify-center items-center gap-4 mt-4">
        <button
          onClick={increment}
          className="bg-blue-600 text-amber-50 p-2 rounded-lg w-[50px] cursor-pointer">
          +
        </button>

        <button
          onClick={decrement}
          className="bg-blue-600 text-amber-50 p-2 rounded-lg w-[50px] cursor-pointer">
          -
        </button>
      </div>

      <span className="text-3xl font-bold mt-5">{status}</span>
      <div className="w-full flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => {
            setStatus('passed');
          }}
          className="bg-blue-600 text-amber-50 p-2 rounded-lg w-[50px] cursor-pointer">
          pass
        </button>

        <button
          onClick={() => {
            setStatus('failed');
          }}
          className="bg-blue-600 text-amber-50 p-2 rounded-lg w-[50px] cursor-pointer">
          fail
        </button>
      </div>
    </div>
  );
}

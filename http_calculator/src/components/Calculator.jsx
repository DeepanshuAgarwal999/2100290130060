import React, { useState } from "react";
import { AxiosPrivateInstance } from "../utils/axios.instance";

const Calculator = () => {
  // p,f,e,r
  // window size =10
  const [windowSize] = useState(10);
  const [error, setError] = useState(null);
  const [average, setAverage] = useState(null);
  const getNumbers = async (number) => {
    try {
      console.log(number);
      const { data } = await AxiosPrivateInstance.get(`/test/${number}`);

      if (data.number && data.number.length < windowSize) {
        const average =
          data.number.reduce((a, b) => a + b) / data.number.length;
        setAverage(average);
        console.log(average);
      }

      console.log(data);
    } catch (err) {
      setError("Response is too long ");
      console.log("Response taking too long", err);
    }
  };
  return (
    <section className="">
      <h1>Calculator</h1>
      <div className=" flex gap-10">
        <button onClick={() => getNumbers("primes")}>
          generate prime number
        </button>
        <button onClick={() => getNumbers("fibo")}>
          generate fibonacci number
        </button>
        <button onClick={() => getNumbers("even")}>generate even number</button>
        <button onClick={() => getNumbers("rand")}>
          generate random number
        </button>
      </div>
      <h4>"Average of number is : "</h4> {average ? average : 0}
      {error && error}
    </section>
  );
};

export default Calculator;

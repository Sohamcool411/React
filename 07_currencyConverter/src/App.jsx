import { useState } from "react";
import InputBox from "./components/Inputbox";
import UseCurrencyInfo from "./hooks/useCurrencyinfo";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = UseCurrencyInfo(from);
  

  const swap=function(){
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert=function(){
    setConvertedAmount(amount * currencyInfo[to]);
  }

  // useEffect(() => {
  //   setConvertedAmount(amount * currencyInfo[to]);
  // }, [amount, from, to, swap]);

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/26825058/pexels-photo-26825058/free-photo-of-black-and-white-photograph-of-canoes-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <h1 className="text-3xl bg-gray-300 ">CURRENCY CONVERTER</h1>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox label="From"
                  amount={amount}
                  onAmountChange={setAmount}
                  onCurrencyChange={setFrom}
                  currencyOptions={Object.keys(currencyInfo)}
                  selectCurrency={from}/>
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={() =>swap()}
                >
                  SWAP
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                label="To"
                amount={convertedAmount}
                onCurrencyChange={setTo}
                currencyOptions={Object.keys(currencyInfo)}
                selectCurrency={to} />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

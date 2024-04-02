import React, { useState } from "react";

export default function MainPage() {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountinSourceCurrency, setAmountinSourceCurrency] = useState(0);
  const [amountinTargetCurrency, setAmountinTargetCurrency] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date,  targetCurrency,amountinSourceCurrency,sourceCurrency);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-green-500 lg:mx-32">
        Convert Your Currencies
      </h1>
      <p className="pt-5 text-2xl lg:mx-32 opacity-40">
        Check live rates, send money securely, set rate alerts, receive
        notifications and more.
      </p>

      <div className="lg:mx-32">
        <section>
          <form className="flex flex-col gap-5 pt-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor={"date"}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="Date"
                id={date}
                name={date}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor={"sourceCurrency"}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id={sourceCurrency}
                name={sourceCurrency}
                value={sourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg focus:ring-green-500 focus:border-green-500
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Select Source Currency"
                required
              >
                <option value="USD">USD</option>
              </select>
            </div>

            <div>
              <label
                htmlFor={targetCurrency}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                id={targetCurrency}
                name={targetCurrency}
                value={targetCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg focus:ring-green-500 focus:border-green-500
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-green-500 dark:focus:border-green-500"
                required
              >
                <option value="USD">USD</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div>
              <label
                htmlFor={amountinSourceCurrency}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amout in source currency
              </label>
              <input
                onChange={(e) => setAmountinSourceCurrency(e.target.value)}
                type="number"
                id={amountinSourceCurrency}
                name={amountinSourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in source currency"
                required
              />
            </div>

            <div>
              <button className="p-2 font-medium bg-green-600 rounded-lg hover:bg-green-700">
                Get the target currency
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

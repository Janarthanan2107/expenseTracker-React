import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const Tracker = () => {
  // database
  const [items, setItems] = useState([]);

  // states
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  // onchange function for radio button
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItems = {
      id: uuidv4(),
      transaction,
      amount,
      typeOfTrans: selectedValue,
    };

    setItems([...items, newItems]);

    // Save the items to localStorage
    localStorage.setItem("items", JSON.stringify([...items, newItems]));

    // toast messages
    toast.success("Successfully created!");

    // nullish values
    setTransaction("");
    setAmount("");
    setSelectedValue("");
    console.log(items);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-2  h-[calc(100vh-8rem)]">
      <Toaster />
      <h2 className="text-[1.25rem] font-semibold -mt-[5rem] underline underline-offset-4">
        Tracker Form
      </h2>
      <div className="form-container flex justify-center items-center flex-col shadow-md rounded-md p-3">
        <form className="form flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Transaction</label>
            <input
              className="px-3 py-2 rounded-md border border-gray-300 w-[280px]"
              placeholder="Enter your transaction"
              value={transaction}
              onChange={(event) => setTransaction(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold mx-1">Amount</label>
            <input
              className="px-3 py-2 rounded-md border border-gray-300 w-[280px]"
              placeholder="Enter your amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            ></input>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="radio"
                id="Expense"
                checked={selectedValue === "Expense"}
                onChange={handleRadioChange}
              />
              <label>Expense</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="radio"
                id="Income"
                checked={selectedValue === "Income"}
                onChange={handleRadioChange}
              />
              <label>Income</label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="py-2 px-3 text-white bg-cyan-500 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tracker;

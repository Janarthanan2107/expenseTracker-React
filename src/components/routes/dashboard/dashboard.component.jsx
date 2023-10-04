import { useState, useEffect } from "react";
import { BiPencil, BiSolidTrashAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const Transaction = () => {
  //database
  const [items, setItems] = useState([]);

  const deleteItems = (id) => {
    const remaining = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(remaining));
    setItems(remaining);
    toast.error("Successfully deleted!");
  };

  const balance = () => {
    let data = items
      .filter((item) => item.amount > 0)
      .reduce((total, item) => total + item.amount, 0);
    console.log(data);
    return Number(data);
  };

  const totalExpense = () => {
    let data = items
      .filter((item) => item.amount < 0)
      .reduce((total, item) => total + item.amount, 0);
    console.log(data);
    return data;
  };

  // Load data from localStorage when the component initializes
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  return (
    <div className="h-[calc(100vh-8rem)]">
      <Toaster />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[1.25rem] font-semibold underline underline-offset-4">
            Transaction
          </h1>
          <div className="grid grid-cols-2 gap-1 divide-x">
            <div className="font-semibold text-green-500 p-2">
              Balance : {balance()}
            </div>
            <div className="font-semibold text-red-500 p-2">
              Expense : {totalExpense()}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.length > 0 ? (
            items.map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center shadow-md rounded-md p-3 mt-3 w-[280px]"
                  key={index}
                >
                  <div className="flex gap-1 items-start flex-col">
                    <span className="font-semibold mx-3">
                      {item.transaction}
                    </span>
                    <span className="font-normal text-sm mx-3 text-gray-500">
                      {item.typeOfTrans}
                    </span>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        item.typeOfTrans === "Income"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.amount}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="py-2 px-3 text-white font-semibold rounded-md bg-violet-400">
                      <BiPencil />
                    </button>
                    <button
                      className="py-2 px-3 text-white font-semibold rounded-md bg-red-400"
                      onClick={() => deleteItems(item.id)}
                    >
                      <BiSolidTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center shadow-md rounded-md p-5 mt-3">
              <p className="text-[1.25rem] font-semibold text-gray-500">
                No records found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;

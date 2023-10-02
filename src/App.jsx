const App = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 h-screen bg-slate-200">
      <h1 className="text-indigo-900 font-bold text-lg underline underline-offset-8">Expense Tracker</h1>
      <div className="flex justify-between flex-col-reverse sm:flex-row gap-3 p-3 bg-white shadow-lg rounded-3xl">
        {/* form */}
        <div className="form-container flex items-center justify-center flex-col gap-3 w-72">
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="expense" className="font-semibold">
              Transaction:
            </label>
            <input
              type="text"
              id="expense"
              className=" p-2 shadow rounded-md font-semibold text-slate-500"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="amount" className="font-semibold">
              Amount:
            </label>
            <input
              type="text"
              id="amount"
              className=" p-2 shadow rounded-md font-semibold text-slate-500"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="type" className="font-semibold">
              Type of transaction:
            </label>
            <div className="flex gap-4">
              <span className="flex items-center gap-2">
                <input type="radio" name="radioButton" id="income" />
                <label htmlFor="income">Income</label>
              </span>
              <span className="flex items-center gap-2">
                <input type="radio" name="radioButton" id="expense" />
                <label htmlFor="expense">Expense</label>
              </span>
              {/* <div class="option">
                        <input type="radio" name="radioButton" id="option-one">
                        <label for="option-one" id="label-one">Java</label>
                    </div>
                    <div class="option">
                        <input type="radio" name="radioButton" id="option-two">
                        <label for="option-two" id="label-two">C</label>
                    </div> */}
            </div>
          </div>
          <button className=" w-full py-2 px-4 bg-cyan-500 rounded-md text-white font-semibold">
            Submit
          </button>
        </div>
        {/* list of expense and calc */}
        <div className="list-container flex items-center justify-center flex-col gap-5">
          {/* calc */}
          <div className="p-3 bg-white rounded-3xl shadow-lg grid grid-cols-2 items-center divide-x">
            <div className="text-center flex gap-2 justify-center p-2">
              <span className="text-rose-500">Expenses:</span>
              <span className="font-semibold text-rose-500">$800</span>
            </div>
            <div className="text-center flex gap-2 justify-center p-2">
              <span className="text-teal-600">Balance:</span>
              <span className="font-semibold text-teal-600">$14200</span>
            </div>
          </div>
          {/* expennses */}
          <div className="flex flex-col gap-3">
            <div className="card rounded-2xl hover:bg-slate-100 p-2">
              <div className="flex gap-1 items-start justify-between min-w-[250px]">
                {/* expense */}
                <span className="font-semibold mx-3">Salary</span>
                {/* amount */}
                <span className="font-normal text-sm mx-3 text-gray-500">
                  15000
                </span>
              </div>
            </div>
            <div className="card rounded-2xl hover:bg-slate-100 p-2">
              <div className="flex gap-1 items-start justify-between min-w-[250px]">
                {/* expense */}
                <span className="font-semibold mx-3">Food</span>
                {/* amount */}
                <span className="font-normal text-sm mx-3 text-gray-500">
                  800
                </span>
              </div>
            </div>
            <div className="card rounded-2xl hover:bg-slate-100 p-2">
              <div className="flex gap-1 items-start justify-between min-w-[250px]">
                {/* expense */}
                <span className="font-semibold mx-3">Food</span>
                {/* amount */}
                <span className="font-normal text-sm mx-3 text-gray-500">
                  800
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

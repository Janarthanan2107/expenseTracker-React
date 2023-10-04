const Header = () => {
  return (
    <div className="w-full h-20 shadow-md flex justify-between items-center mx-auto px-5">
      <div className="logo font-semibold">
        <h2 className="text-violet-500 text-xl">Expense Tracker</h2>
      </div>
      <nav>
        <ul className="flex gap-5 items-center font-semibold">
          <li className="hover:shadow-md hover:p-2 rounded-md hover:bg-slate-300">
            <a href="/transaction">Transaction</a>
          </li>
          <li className="hover:shadow-md hover:p-2 rounded-md hover:bg-slate-300">
            <a href="/tracker">Tracker</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

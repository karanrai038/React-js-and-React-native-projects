import { useState } from "react";
import { useQuery } from "react-query";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { getCustomer } from "../api/cutomer";
import Deposit from "../components/Deposit";
import Transaction from "../components/Transactions";
import Withdraw from "../components/Withdraw";

const DetailPage = () => {
  const [isDeposit, setIsDeposit] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isTransaction, setIsTransaction] = useState(true);
  const [style, setStyle] = useState("btn-success tab-active");

  const btnHandler = (type) => {
    if (type == "deposit") {
      setIsDeposit(true);
      setIsTransaction(false);
      setIsWithdraw(false);
    }
    if (type == "withdraw") {
      setIsWithdraw(true);
      setIsDeposit(false);
      setIsTransaction(false);
    }
    if (type == "transaction") {
      setIsWithdraw(false);
      setIsDeposit(false);
      setIsTransaction(true);
    }
  };

  const { data, error, isError, isLoading } = useQuery(["customers"], () => {
    return getCustomer(sessionStorage.getItem("id"));
  });

  if (sessionStorage.getItem("id") == null) {
    return <Navigate to="/login" replace />;
  }
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-4 h-screen overflow-hidden">
        <div className="bg-gray-800">
          <div className="text-center mt-10">
            <span className="underline italic text-lg font-bold">
              {data.name}
            </span>
            <div>
              Session Expires is : <span className="text-xl">04:20 </span>mins
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[80vh] gap-y-20 tabs ">
            <div
              className={`tab tab-bordered btn ${isDeposit ? style : ""}`}
              onClick={() => btnHandler("deposit")}
            >
              Deposit
            </div>
            <div
              className={`tab tab-bordered btn ${isWithdraw ? style : ""}`}
              onClick={() => btnHandler("withdraw")}
            >
              Withdraw
            </div>
            <div
              className={`tab tab-bordered btn ${isTransaction ? style : ""}`}
              onClick={() => btnHandler("transaction")}
            >
              Transactions
            </div>
          </div>
        </div>
        <div className=" col-span-3 bg-gray-700">
          <div className="flex justify-between px-10 py-10">
            <div className="text-2xl">Welcome To IBS Bank</div>
            <div className="text-2xl text-orange-500">
              Account Bal:
              <span className="text-3xl text-green-500">{data.balance}</span>
            </div>
          </div>
          {/* for different tabls */}
          <div className="w-screen h-[0.1px] bg-gray-800 mb-6"></div>
          {isTransaction && <Transaction data={data} />}
          {isDeposit && <Deposit data={data} />}
          {isWithdraw && <Withdraw data={data} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

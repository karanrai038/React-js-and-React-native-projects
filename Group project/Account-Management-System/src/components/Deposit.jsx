import { useState } from "react";
import { deposit } from "../api/cutomer";
import { ToastContainer, toast } from "react-toastify";
import { QueryClient, useMutation, useQueryClient } from "react-query";
const Deposit = ({ data }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation((data) => deposit(data.id, data.newData), {
    onSuccess: () => {
      toast("Deposit Successful");
      queryClient.invalidateQueries("customers");
    },
  });

  const depositHandler = () => {
    if (amount <= 0) {
      toast("Please enter a valid amount");
      setError(true);
      setAmount(0);
      return;
    }
    setError(false);
    const newData = {
      ...data,
      balance: parseInt(data.balance) + parseInt(amount),
      transaction: [
        ...data.transaction,
        {
          id: data.transaction.length + 1,
          type: "deposit",
          amount: amount,
          date: new Date().toLocaleString(),
        },
      ],
    };
    const input = {
      id: data.id,
      newData: newData,
    };
    mutation.mutate(input);
    setAmount(0);
  };
  return (
    <div className="flex justify-center flex-col gap-6 items-center">
      <h1 className="text-xl font-semibold">Amount to deposit</h1>
      <input
        type="text"
        placeholder="Enter amount to deposit..."
        className="input input-bordered input-secondary w-full max-w-lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-secondary btn-wide" onClick={depositHandler}>
        Deposit
      </button>
    </div>
  );
};

export default Deposit;

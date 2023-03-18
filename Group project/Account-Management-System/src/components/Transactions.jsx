const Transaction = ({ data }) => {
  return (
    <div className="overflow-x-auto px-10 mt-10">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.transaction &&
            data.transaction.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Transaction;
<tr>
  <th>3</th>
  <td>Brice Swyre</td>
  <td>Tax Accountant</td>
  <td>Red</td>
</tr>;

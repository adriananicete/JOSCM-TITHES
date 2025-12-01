function ExpenseCRUDTableMobile() {
  return (
    <table className="w-full text-left min-w-[600px]">
      <thead>
        <tr className="border-b">
          <th className="py-2">Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="py-2">2025-11-28</td>
          <td>Electric Bill</td>
          <td>₱1,500</td>
          <td>Utilities</td>
          <td className="flex gap-2">
            <button className="text-blue-600">Edit</button>
            <button className="text-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenseCRUDTableMobile
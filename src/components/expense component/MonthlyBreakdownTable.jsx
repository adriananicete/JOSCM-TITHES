function MonthlyBreakdownTable() {
    return ( 
        <table className="w-full text-left mt-3">
      <thead>
        <tr className="border-b">
          <th className="py-2">Month</th>
          <th>Total Expenses</th>
          <th>Total Tithes</th>
          <th>Difference</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="py-2">January</td>
          <td>₱2,300</td>
          <td>₱1,000</td>
          <td className="text-red-600">-₱1,300</td>
        </tr>
      </tbody>
    </table>
     );
}

export default MonthlyBreakdownTable;
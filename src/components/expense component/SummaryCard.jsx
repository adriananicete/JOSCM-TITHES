function SummaryCard({ icon:Icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <Icon />
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
      <h3 className="text-lg font-bold">{value}</h3>
    </div>
  );
}

export default SummaryCard;

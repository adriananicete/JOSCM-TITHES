function CategoryListMobile() {
  return (
    <div className="flex flex-col gap-2">
      {["Food", "Utilities", "Transportation", "Ministry", "Misc"].map((c) => (
        <div key={c} className="flex justify-between border p-2 rounded-lg">
          <p>{c}</p>
          <p className="font-semibold">₱1,200</p>
        </div>
      ))}
    </div>
  );
}


export default CategoryListMobile
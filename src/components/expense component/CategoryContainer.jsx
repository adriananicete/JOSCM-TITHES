import CategoryChartMobile from "./CategoryChartMobile";
import CategoryListMobile from "./CategoryListMobile";

function CategoryContainer() {
  return (
    <section className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Expense Categories</h2>
      <div className="flex flex-col gap-3">
        <CategoryListMobile />
        <CategoryChartMobile />
      </div>
    </section>
  );
}

export default CategoryContainer;

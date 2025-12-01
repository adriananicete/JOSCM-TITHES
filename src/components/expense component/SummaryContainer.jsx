import SummaryCard from "./SummaryCard";
import { FaFileAlt } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";

function SummaryContainer() {
    return ( 
      <section className="w-full">
        <h2 className="text-xl font-semibold mb-3">PCF for this Month</h2>
        <div className="flex flex-col gap-3">
          <SummaryCard icon={FaReceipt} title="PCF-0001" value="₱25,430" />
          <SummaryCard icon={FaReceipt} title="PCF-0002" value="₱13,200" />
          <SummaryCard icon={FaReceipt} title="PCF-0003" value="₱2,210" />
          <SummaryCard icon={FaReceipt} title="PCF-0004" value="₱5,430" />
          <SummaryCard icon={FaReceipt} title="PCF-0005" value="₱3,200" />
        </div>
      </section>
     );
}

export default SummaryContainer;
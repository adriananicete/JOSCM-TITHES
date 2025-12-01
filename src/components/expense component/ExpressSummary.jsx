import Template from "../../layout/Template";
import Headbar from "../home/home-components/Headbar";
import QuickAction2 from "../home/home-components/QuickAction2";
import SummaryContainer from "./SummaryContainer";

function ExpenseSummary() {
    return ( 
        <Template>
            <Headbar title={'Expense Summary'} />
            <QuickAction2 />
            <SummaryContainer />
        </Template>
     );
}

export default ExpenseSummary;
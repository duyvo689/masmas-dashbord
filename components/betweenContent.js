import FinanceSummary from "./betweenContent/financeSummary"
import ScoreChart from "./betweenContent/scoreChart"

export default function Between() {
    return (
        <>
            <div className="col-span-2 item-container">
                <FinanceSummary />
            </div>
            <div className="col-span-1 item-container">
                <ScoreChart />
            </div>
        </>
    )
}
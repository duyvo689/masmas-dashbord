import FinanceSummary from "./betweenContent/financeSummary"
import ScoreChart from "./betweenContent/scoreChart"

export default function Between() {
    return (
        <>
            <div className="col-span-2 bg-white shadow rounded">
                <FinanceSummary />
            </div>
            <div className="col-span-1 bg-white shadow rounded">
                <ScoreChart />
            </div>
        </>
    )
}
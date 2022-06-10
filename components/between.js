import FinanceSummary from "./between/financeSummary"

export default function Between() {
    return (
        <>
            <div className="col-span-2 bg-white shadow rounded">
                <FinanceSummary />
            </div>
            <div className="col-span-1 bg-yellow-200 w-full">
                Phai2
            </div>
        </>
    )
}
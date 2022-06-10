import Tables from "./endContent/tables"
import Graph from "./endContent/graph"

export default function EndContent() {
    return (
        <>
            <div className="col-span-2 item-container">
                <Tables />
            </div>
            <div className="col-span-1 item-container">
                <Graph />
            </div>
        </>
    )
}
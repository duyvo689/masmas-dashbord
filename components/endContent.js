import Tables from "./endContent/tables"
import Graph from "./endContent/graph"

export default function EndContent() {
    return (
        <>
            <div className="col-span-2 bg-white shadow">
                <Tables />
            </div>
            <div className="col-span-1 bg-white shadow">
                <Graph />
            </div>
        </>
    )
}
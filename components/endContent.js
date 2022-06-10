import Tables from "./endContent/tables"
import Graph from "./endContent/graph"

export default function EndContent() {
    return (
        <>
            <div className="md:col-span-2 col-span-1 item-container">
                <Tables />
            </div>
            <div className="md:col-span-1 md:block hidden item-container">
                <Graph />
            </div>
        </>
    )
}
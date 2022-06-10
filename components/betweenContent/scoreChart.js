export default function ScoreChart() {
    return (
        <div className="flex flex-col items-center justify-center p-6 rounded shadow">
            <p className="text-sm text-gray-500 mt-2">Your score is</p>
            <h3 className="italic font-thin text-gray-400 text-lg">Awesome</h3>
            <div className="">
                Dong ho
            </div>

            <p className="text-sm text-gray-400 mt-2">Your score is based on the last</p>
            <p className="text-sm text-gray-600 font-normal mt-2">287 Transactions</p>
            <span className="btn">View my Account</span>
        </div>
    )
}
export default function FinanceSummary() {
    return (
        <div className="grid grid-row-3 gap-10 p-6">
            <div className="flex justify-between">
                <span>
                    <h3 className="italic font-thin text-gray-400 text-lg">Finance Summary</h3>
                    <p className="text-sm text-gray-500 mt-2">Check out each column for more details</p>
                </span>
                <img src="./img/icon-dollar.svg" alt="" />
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <p className="text-sm text-gray-500">Annual Companies Taxes</p>
                    <p className="font-thin text-gray-400 italic text-sm mt-2">$500,00</p>
                </div>
                <div className="col-span-2">
                    <p className="text-sm text-gray-500">Next Tax Review Date</p>
                    <p className="font-thin text-gray-400 italic text-sm mt-2">July 24,2021</p>
                </div>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <p className="text-sm text-gray-500">Average Product Price</p>
                    <p className="font-thin text-gray-400 italic text-sm mt-2">$89.90</p>

                </div>
                <div className="col-span-2">
                    <p className="text-sm text-gray-500">Satisfaction Rate</p>
                    <img src="./img/Progress.png" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="flex -space-x-2 overflow-hidden col-span-1">
                    <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="col-span-2">
                    <span className="highlight-indigo">5 days ago</span>
                </div>
            </div>
        </div>
    )
}
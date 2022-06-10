export default function Business() {
    return (
        <div className="p-6">
            <div className=" flex justify-between">
                <h3 className="font-thin text-lg italic text-gray-400">For Business Sharks</h3>
                <svg width="4" height="15" viewBox="0 0 4 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" fill="#8592A3" />
                </svg>
            </div>
            <p className="text-sm font-normal text-gray-500 my-3">Here, i focus ona range of items and featured that we use in life without them</p>
            <div className="flex gap-5 flex-col">
                <span className="font-thin text-sm italic text-gray-400">Basic price is $30</span>
                <div className="flex items-center p-4 bg-white rounded-lg border-indigo-300 border-solid border justify-between">
                    <input id="" type="checkbox" value="" className="w-4 h-4 bg-white rounded border-gray-200 " />
                    <label htmlFor="" className="ml-2 text-xs font-extralight highlight-green">+$30</label>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg border-indigo-300 border-solid border justify-between">
                    <input checked id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-indigo-500 rounded border-indigo-300 focus:ring-indigo-400" />
                    <label htmlFor="disabled-checked-checkbox" className="ml-2 text-xs font-extralight highlight-indigo">+$75</label>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg border-indigo-300 border-solid border justify-between">
                    <input id="disabled-checkbox" type="checkbox" value="" className="w-4 h-4 bg-white rounded border-gray-200 " />
                    <label htmlFor="disabled-checkbox" className="ml-2 text-xs font-extralight highlight-green">+$125</label>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg border-indigo-300 border-solid border justify-between">
                    <input disabled id="disabled-checkbox" type="checkbox" value="" className="w-4 h-4 bg-white rounded border-gray-200 " />
                    <label htmlFor="disabled-checkbox" className="ml-2 text-xs font-extralight highlight-green">+$48</label>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <div className="flex justify-between">
                    <span className="font-normal text-sm text-gray-500">Vat Taxes</span>
                    <span className="font-normal text-sm text-gray-500">$24</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="font-normal text-sm text-gray-500">Total Amount</span>
                    <span className="text-lg text-indigo-400 font-thin">$99</span>
                </div>
            </div>
            <div className="btn w-full">Purchase</div>
        </div>
    )
}
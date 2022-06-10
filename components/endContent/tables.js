export default function Tables() {
    return (
        <div className="overflow-x-auto">
            <div className="w-full flex items-center justify-center bg-white font-thin overflow-hidden">
                <div className="w-full">
                    <div className="bg-white shadow rounded">
                        <table className="w-full table-auto top-0">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-600 uppercase text-xs font-thin">
                                    <th className="py-3 px-7 text-left">Product</th>
                                    <th className="py-3 px-7 text-left">Category</th>
                                    <th className="py-3 px-7 text-left">Payment</th>
                                    <th className="py-3 px-4 text-left">Order Status</th>
                                    <th className="py-3 px-7 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-xs font-thin">
                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/phone-oneplus.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">OnePlus 7Pro</p>
                                                <span className="font-normal text-gray-400">OnePlus</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-phone.png" />
                                            </div>
                                            <span>Smart Phone</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$120<span className="text-gray-400">/499</span></p>
                                            <p>Partially Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-indigo">Confirmed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/magic-mouse.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">Magic Mouse</p>
                                                <span className="font-normal text-gray-400">Apple</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-mouse.png" />
                                            </div>
                                            <span>Mouse</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$49<span className="text-gray-400"></span></p>
                                            <p>Fully Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-green">Completed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/imac.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">iMac Pro</p>
                                                <span className="font-normal text-gray-400">Apple</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-computer.png" />
                                            </div>
                                            <span>Computer</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$49<span className="text-gray-400">/899</span></p>
                                            <p>Fully Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-green">Completed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/note10.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">Note 10</p>
                                                <span className="font-normal text-gray-400">Samsung</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-phone.png" />
                                            </div>
                                            <span>Smart Phone</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$149<span className="text-gray-400"></span></p>
                                            <p>Fully Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-green">Completed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/iphone11.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">Iphone 11 pro</p>
                                                <span className="font-normal text-gray-400">Apple</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-phone.png" />
                                            </div>
                                            <span>Smart Phone</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$399<span className="text-gray-400"></span></p>
                                            <p>Fully Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-green">Completed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/iphone11.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">Mi Led TV 4X</p>
                                                <span className="font-normal text-gray-400">Xiaomi</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-tv.png" />
                                            </div>
                                            <span>Smart Phone</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$349<span className="text-gray-400">/2599</span></p>
                                            <p>Partially Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-indigo">Confirmed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-7 h-7" src="./img/logitech-mouse.png" />
                                            </div>
                                            <div className="">
                                                <p className="font-medium text-sm">Logitic MX</p>
                                                <span className="font-normal text-gray-400">Logitech</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6" src="./img/Icon-mouse.png" />
                                            </div>
                                            <span>Mouse</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="items-center justify-center">
                                            <p className="text-indigo-500">$89<span className="text-gray-400"></span></p>
                                            <p>Fully Paid</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 text-center">
                                        <span className="highlight-green">Completed</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:scale-110">
                                                <svg width="4" height="15" viewBox="0 0 4 15" fill="#8592A3" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 5.97243C0.7875 5.97243 0 6.75993 0 7.72243C0 8.68494 0.7875 9.47243 1.75 9.47243C2.7125 9.47243 3.5 8.68494 3.5 7.72243C3.5 6.75993 2.7125 5.97243 1.75 5.97243ZM1.75 0.722435C0.7875 0.722435 0 1.50994 0 2.47243C0 3.43494 0.7875 4.22243 1.75 4.22243C2.7125 4.22243 3.5 3.43494 3.5 2.47243C3.5 1.50994 2.7125 0.722435 1.75 0.722435ZM1.75 11.2224C0.7875 11.2224 0 12.0099 0 12.9724C0 13.9349 0.7875 14.7224 1.75 14.7224C2.7125 14.7224 3.5 13.9349 3.5 12.9724C3.5 12.0099 2.7125 11.2224 1.75 11.2224Z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}




import Business from "./firstContent/business"
import Event from "./firstContent/event"
import Congratulation from "./firstContent/congratulation"

export default function FirstContent() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            <div className="col-span-1">
                <div className="grid grid-rows-none gap-6">
                    <div className="grid grid-cols-2 auto-rows-min row-span-1 gap-4">
                        <div className="col-span-2 item-container">
                            <Congratulation />
                        </div>
                    </div>

                    {/* Order + Sales */}
                    <div className="grid grid-cols-2 auto-rows-min row-span-1 gap-4">
                        {/* Order */}
                        <div className="item-container col-span-1 p-5 flex flex-col gap-2">
                            <div className="flex justify-between">
                                <img src="/img/icon-order.svg" alt="" />
                                <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.43787 5.25C1.47537 5.25 0.687866 6.0375 0.687866 7C0.687866 7.9625 1.47537 8.75 2.43787 8.75C3.40037 8.75 4.18787 7.9625 4.18787 7C4.18787 6.0375 3.40037 5.25 2.43787 5.25ZM2.43787 0C1.47537 0 0.687866 0.7875 0.687866 1.75C0.687866 2.7125 1.47537 3.5 2.43787 3.5C3.40037 3.5 4.18787 2.7125 4.18787 1.75C4.18787 0.7875 3.40037 0 2.43787 0ZM2.43787 10.5C1.47537 10.5 0.687866 11.2875 0.687866 12.25C0.687866 13.2125 1.47537 14 2.43787 14C3.40037 14 4.18787 13.2125 4.18787 12.25C4.18787 11.2875 3.40037 10.5 2.43787 10.5Z" fill="#435971" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.43787 5.25C1.47537 5.25 0.687866 6.0375 0.687866 7C0.687866 7.9625 1.47537 8.75 2.43787 8.75C3.40037 8.75 4.18787 7.9625 4.18787 7C4.18787 6.0375 3.40037 5.25 2.43787 5.25ZM2.43787 0C1.47537 0 0.687866 0.7875 0.687866 1.75C0.687866 2.7125 1.47537 3.5 2.43787 3.5C3.40037 3.5 4.18787 2.7125 4.18787 1.75C4.18787 0.7875 3.40037 0 2.43787 0ZM2.43787 10.5C1.47537 10.5 0.687866 11.2875 0.687866 12.25C0.687866 13.2125 1.47537 14 2.43787 14C3.40037 14 4.18787 13.2125 4.18787 12.25C4.18787 11.2875 3.40037 10.5 2.43787 10.5Z" fill="white" fillOpacity="0.3" />
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="text-gray-500 text-sm">Order</h3>
                                <span className="text-gray-400 italic font-thin text-xl">$1,286</span>
                            </div>

                            <div className="flex items-center">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 5L8.94588 3.94588L5.74549 7.14627V0H4.25451V7.14627L1.05412 3.94588L0 5L5 10L10 5Z" fill="#FF3E1D" />
                                </svg>
                                <span className="text-red-500 ml-2">$1,286</span>
                            </div>
                        </div>

                        {/* Sales */}
                        <div className="item-container col-span-1 p-5 flex flex-col gap-3">
                            <p className="text-gray-500 text-sm">Sales</p>
                            <div className="">
                                <h3 className="text-gray-400 italic font-thin text-xl">482k</h3>
                                <span className="py-0.5 px-3 bg-cyan-100 text-cyan-400 rounded-md inline-block">+34%</span>
                            </div>
                            <div className="">
                                <p className="text-gray-400 text-xs font-thin">Sales Target</p>
                                <div className="flex items-center justify-center">
                                    <svg width="90" height="8" viewBox="0 0 90 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="89.6857" height="8" rx="4" fill="#435971" />
                                        <rect width="89.6857" height="8" rx="4" fill="white" fillOpacity="0.9" />
                                    </svg>
                                    <span className="text-gray-500 text-xs font-thin">78%</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Expenses + Transactions*/}
                    <div className="grid grid-cols-2 auto-rows-min row-span-1 gap-4">

                        {/* Expenses */}
                        <div className="relative item-container col-span-1 pt-5">
                            <h3 className="text-gray-500 pl-5 text-sm">Expenses</h3>
                            <img src="./img/expenses.png" alt="" />
                            <div className="w-44 flex items-center justify-center text-center flex-col absolute 
                            -translate-y-2/4 -translate-x-2/4 top-2/3 left-2/4

                            ">
                                <p className='text-gray-400 font-thin italic text-xl'>78%</p>
                                <p className='font-thin text-xs text-gray-500 px-2'>$21k Expenses more than last month</p>
                            </div>
                        </div>

                        {/* Transactions */}
                        <div className="item-container col-span-1 p-5 flex flex-col gap-2">
                            <div className="flex justify-between">
                                <img src="/img/icon-transactions.svg" alt="" />
                                <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.43787 5.25C1.47537 5.25 0.687866 6.0375 0.687866 7C0.687866 7.9625 1.47537 8.75 2.43787 8.75C3.40037 8.75 4.18787 7.9625 4.18787 7C4.18787 6.0375 3.40037 5.25 2.43787 5.25ZM2.43787 0C1.47537 0 0.687866 0.7875 0.687866 1.75C0.687866 2.7125 1.47537 3.5 2.43787 3.5C3.40037 3.5 4.18787 2.7125 4.18787 1.75C4.18787 0.7875 3.40037 0 2.43787 0ZM2.43787 10.5C1.47537 10.5 0.687866 11.2875 0.687866 12.25C0.687866 13.2125 1.47537 14 2.43787 14C3.40037 14 4.18787 13.2125 4.18787 12.25C4.18787 11.2875 3.40037 10.5 2.43787 10.5Z" fill="#435971" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.43787 5.25C1.47537 5.25 0.687866 6.0375 0.687866 7C0.687866 7.9625 1.47537 8.75 2.43787 8.75C3.40037 8.75 4.18787 7.9625 4.18787 7C4.18787 6.0375 3.40037 5.25 2.43787 5.25ZM2.43787 0C1.47537 0 0.687866 0.7875 0.687866 1.75C0.687866 2.7125 1.47537 3.5 2.43787 3.5C3.40037 3.5 4.18787 2.7125 4.18787 1.75C4.18787 0.7875 3.40037 0 2.43787 0ZM2.43787 10.5C1.47537 10.5 0.687866 11.2875 0.687866 12.25C0.687866 13.2125 1.47537 14 2.43787 14C3.40037 14 4.18787 13.2125 4.18787 12.25C4.18787 11.2875 3.40037 10.5 2.43787 10.5Z" fill="white" fillOpacity="0.3" />
                                </svg>
                            </div>
                            <div className="">
                                <h3 className="text-gray-500 text-sm">Transactions</h3>
                                <span className="text-gray-400 italic font-thin text-xl">$14,854</span>
                            </div>
                            <div className="flex items-center">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.28572 3.15286V10H5.71429V3.15286L8.78072 6.21929L9.79072 5.20929L5 0.418579L0.20929 5.20929L1.21929 6.21929L4.28572 3.15286Z" fill="#71DD37" />
                                </svg>
                                <span className="text-green-500 ml-2">+28.14%</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 auto-rows-min item-container">
                <Event />
            </div>
            <div className="md:col-span-1 md:block auto-rows-min item-container hidden">
                <Business />
            </div>
        </div>
    )
}
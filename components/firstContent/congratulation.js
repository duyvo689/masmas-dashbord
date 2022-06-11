export default function Congratulation() {
    return (
        <div className="flex justify-between">
            <div className="py-5 pl-5">
                <h3 className="italic font-thin text-gray-400 text-lg">Congratulations Katie!</h3>
                <p className="text-gray-600 text-sm mt-1 mb-4">Best seller of the month</p>

                <h2 className="italic text-indigo-500 text-xl font-thin">$48.9k</h2>
                <p className="text-gray-400 text-base font-extralight my-2">78% of target</p>
                <div className="btn">View Sales</div>
            </div>
            <div className="mx-auto mt-auto mb-0 xl:block hidden">
                <img className="" src="/img/cup.svg" alt="" />
            </div>
        </div>
    )
}
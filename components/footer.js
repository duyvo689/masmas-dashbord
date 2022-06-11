export default function Footer() {
    return (
        <div className="flex justify-between mt-8 mb-2 text-gray-500 font-thin text-md">
            <div className="">
                <p>Masmas Admin ©</p>
            </div>
            <div className="flex gap-3 cursor-pointer cursor-pointer">
                <a className="hover:text-slate-300" href="#">Upgrade</a>
                <a className="hover:text-slate-300" href="#">More Themes</a>
                <a className="hover:text-slate-300" href="#">Support</a>
                <a className="hover:text-slate-300" href="#">Contact</a>
            </div>
        </div>
    )
}
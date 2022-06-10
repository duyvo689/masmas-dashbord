export default function Footer() {
    return (
        <div className="flex justify-between mt-8 mb-2 text-gray-500 font-thin text-md">
            <div className="">
                <p>Masmas Admin ©</p>
            </div>
            <div className=" flex gap-3 cursor-pointer">
                <a href="#">Upgrade</a>
                <a href="#">More Themes</a>
                <a href="#">Support</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}
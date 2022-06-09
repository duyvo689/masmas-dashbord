import Business from "./firstContent/business"
export default function FirstContent() {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 bg-green-200">
                Giua 1
                <div className="grid grid-rows-3 gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                        <div className="col-span-1 bg-yellow-200">
                            giua -giua
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-green-200">
                Giua 2
            </div>
            <div className="col-span-1 w-full shadow-sm bg-white rounded">
                <Business />
            </div>
        </div>
    )
}
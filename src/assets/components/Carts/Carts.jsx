import Cart from "./Cart";

const Carts = ({ selectedItems, totalcredit, cardTotalPrice, remaining }) => {
    return (
        <div className="w-80 md:w-[25%] ml-5 mr-3 mt-10 md:mt-0">
            <div className="rounded-md bg-white p-5">
                <h1 className="text-[#2F80ED] font-bold border-b-2 pb-3 border-[#1C1B1B33]">Credit Hour Remaining {remaining} hr</h1>
                <h2 className="font-bold pt-3 text-[#1C1B1B]">Course Name</h2>
                <div className="mt-2 border-b-2 border-[#1C1B1B33] pb-8">
                    <ol className="text-[#1C1B1B99]">
                        {selectedItems.map(item => <Cart key={item.price} item={item} totalcredit={totalcredit} />)}
                    </ol>
                </div>
                <div className="mt-3 border-b-2 border-[#1C1B1B33] pb-4">
                    <p className="font-semibold text-[#1C1B1BCC]">Total Credit Hour : {totalcredit} hr</p>
                </div>
                <div className="mt-3">
                    <p className="font-bold text-[#1C1B1BCC]">Total Price : {cardTotalPrice} USD</p>
                </div>
            </div>
        </div>
    );
};


export default Carts;

import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';


const Item = ({ item, selectedBtnHandleClick }) => {
    const { details, price, credit, courseName, image } = item;

    return (
        <div>
            <div className="card h-[450px] w-[370px] bg-base-100 shadow-md">
                <figure>
                    <img className="mt-5 w-[330px]" src={image} alt={courseName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{courseName}</h2>
                    <p className="text-[#1C1B1BCC]">{details}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-4 text-[#1C1B1BCC] font-medium">
                            <button className="text-xl"><FiDollarSign></FiDollarSign></button>
                            <h3 className="text-xl">Price: {price}</h3>
                        </div>
                        <div className="flex gap-4 text-[#1C1B1BCC] font-medium">
                        <button className="text-xl"><BsBook></BsBook></button>
                        <h3 className="text-xl">Credit: {credit}hr</h3>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="w-full bg-[#2F80ED] hover:bg-[#27005D] transition-all py-2 mt-4 rounded-md text-[#fff] font-bold" onClick={() => selectedBtnHandleClick(item, credit, price)}>
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Item;

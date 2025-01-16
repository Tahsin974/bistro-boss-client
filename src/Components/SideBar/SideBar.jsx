import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { Link, NavLink } from "react-router";

const SideBar = ({menuItems,pages}) => {
    const [open,setOpen] = useState(true)
    return (
        <div className={` w-80 bg-[#D1A054] p-5 flex flex-col ${!open && 'w-[70px]'} duration-500 space-y-6`}>
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className={`${!open && 'hidden'}`}>
                <h2 className="text-2xl "><span className="cinzel-bold">BISTRO BOSS</span>
                <br />
                <span
                  className="cinzel-light text-lg"
                >
                  RESTUARANT
                </span></h2>
                </div>
                <div onClick={()=> setOpen(!open)} className={`cursor-pointer  duration-300 ${!open && 'rotate-180'}`}>
                <FaArrowLeft size={25}/>

                </div>
            </div>
            {/* Body Content */}
            <div className="">
            <p className="font-bold text-center mt-4 text-gray-600">{!open ? '.....' : 'Menu'}</p>
            <ul className="my-2 flex-1">
                {
                    menuItems.map(item => <div key={item.index}>
                        
                    <li
                    
                    className={`py-2 cinzel-light`}
                    >
                        <NavLink
                        to={item.path}
                        className="flex gap-x-4 items-center text-xl uppercase"
                        ><div className="indicator">
                            {item.icon}
                            {
                                item.totalItems ? <span className="badge badge-sm indicator-item left-2 bottom-2">{item?.totalItems}</span> : <></>
                            }
                            
                            </div> <p className={` ${!open && ' overflow-hidden'} duration-300 items-center`}>{item.label} </p>
                        {/* {item.totalItems ? <div className="badge">{item?.totalItems}</div> : <></>} */}
                        
                        </NavLink>
                    </li>
                    </div>)
                }
            </ul>
            </div>
            <div className="">
            <p className="font-bold text-center mt-4 text-gray-600">{!open ? '.....' : 'Pages'}</p>
            <ul className="my-2 flex-1">
                {
                    pages.map(item => <div key={item.index}>
                        
                    <li
                    
                    className={`py-2 cinzel-light`}
                    >
                        <Link
                        to={item.path}
                        className="flex gap-x-4 items-center text-xl uppercase"
                        ><div>{item.icon}</div> <p className={` ${!open && ' overflow-hidden'} duration-300`}>{item.label}</p></Link>
                    </li>
                    </div>)
                }
            </ul>
            </div>
            
        </div>
    );
};

export default SideBar;
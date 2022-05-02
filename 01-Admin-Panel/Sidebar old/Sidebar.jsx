import React,{useState} from "react";
import Logo from '../../imgs/logo.png';
import './Sidebar.css';


import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";


const Sidebar = () => {

    // this make only one state active:
    const [selected,setSelected]= useState(0); //(0) means that the first item will be active


    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={selected === index?'menuItem active':'menuItem'} 
                        key ={index}
                        onClick={()=>setSelected(index)}
                        >
                            {/* key ={index} only removes warnings in this case */}

                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>

        </div>
    )
}                           

export default Sidebar;
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../../Components/MenuItem/MenuItem";

const PopularItems = () => {
    const [menu,setMenu] = useState([]);
    useEffect(() =>{
        axios.get('./menu.json')
        .then(res => {
            const popularItems = res.data.filter(popularItem => popularItem.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="my-28 space-y-10">
            <SectionTitle
            subHeading='Popular Items'
            Heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-5 justify-items-center">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItems;
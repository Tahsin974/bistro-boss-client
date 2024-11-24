import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import ItemCard from "../../../Components/ItemCard/ItemCard";

const ChefRecommands = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        axios.get('./menu.json')
        .then(res => {
            const soupItems = res.data.filter(soupItem => soupItem.category === 'soup');
            console.log(soupItems)
            setMenu(soupItems);
        })
    },[])
    return (
        <section className="my-28 space-y-10">
            <SectionTitle
            subHeading='Should Try'
            Heading='CHEF RECOMMENDS'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                menu.map(item => <ItemCard
                key={item._id}
                item={item}
                ></ItemCard>)
                }
            </div>
            
        </section>
    );
};

export default ChefRecommands;
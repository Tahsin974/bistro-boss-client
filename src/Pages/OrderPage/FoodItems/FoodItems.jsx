import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodTab from "../FoodTab/FoodTab";
import "./FoodItems.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const FoodItems = () => {
  const [menu] = useMenu();
 
  const [tabIndex,setTabIndex] = useState(0)
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <section className="flex  justify-center my-28 space-y-10">
     <Tabs defaultIndex={tabIndex} onSelect={(index) => {
        
        setTabIndex(index)}}>
    <TabList className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 text-center  mx-auto mb-10  max-w-md'>
      <Tab >SALADS</Tab>
      <Tab >PIZZAS</Tab>
      <Tab >SOUPS</Tab>
      <Tab >DESSERTS</Tab>
      <Tab >DRINKS</Tab>
    </TabList>

    <TabPanel>
    <FoodTab items={salads}></FoodTab>
    </TabPanel>
    <TabPanel>
    <FoodTab items={pizzas}></FoodTab>
    </TabPanel>
    <TabPanel>
    <FoodTab items={soups}></FoodTab>
    </TabPanel>
    <TabPanel>
    <FoodTab items={desserts}></FoodTab>
    </TabPanel>
    <TabPanel>
    <FoodTab items={drinks}></FoodTab>
    </TabPanel>
  </Tabs>
    </section>
  );
};

export default FoodItems;


/* 
<div role="tablist" className="tabs tabs-bordered space-x-3">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SALADS"
        />
        <div role="tabpanel" className="tab-content p-10">
          <FoodTab items={salads}></FoodTab>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="PIZZAS"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <FoodTab items={pizzas}></FoodTab>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="SOUPS"
        />
        <div role="tabpanel" className="tab-content p-10">
          <FoodTab items={soups}></FoodTab>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="DESSERT"
        />
        <div role="tabpanel" className="tab-content p-10">
          <FoodTab items={desserts}></FoodTab>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="DRINKS"
        />
        <div role="tabpanel" className="tab-content p-10">
          <FoodTab items={drinks}></FoodTab>
        </div>
      </div>

*/

import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

import "./FoodItems.css";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FoodTab from "../FoodTab/FoodTab";
const FoodItems = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  const { category } = useParams();

  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const initialIndex = categories.indexOf(category);
  console.log(tabIndex);

  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <section className="my-28 space-y-10">
      <Tabs
        defaultIndex={initialIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="mb-10">
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
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

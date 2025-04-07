import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

import "./FoodItems.css";
import { useParams } from "react-router";
import FoodTab from "../FoodTab/FoodTab";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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
    <>
      <section className="my-28 space-y-10">
        <TabGroup
          defaultIndex={initialIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex justify-center gap-4">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className="btn rounded-none bg-transparent border-0 shadow-none py-1 px-3 text-lg/6 font-semibold text-[#BB8506] focus:outline-none data-[selected]:bg-white/10  data-[hover]:bg-white/5 data-[selected]:border-b-2 data-[selected]:border-t-0 data-[selected]:border-l-0 data-[selected]:border-r-0 data-[selected]:border-[#BB8506] data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="py-10">
            <TabPanel>
              <FoodTab items={salads} />
            </TabPanel>
            <TabPanel>
              <FoodTab items={pizzas} />
            </TabPanel>
            <TabPanel>
              <FoodTab items={soups} />
            </TabPanel>
            <TabPanel>
              <FoodTab items={desserts} />
            </TabPanel>
            <TabPanel>
              <FoodTab items={drinks} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
    </>
  );
};

export default FoodItems;

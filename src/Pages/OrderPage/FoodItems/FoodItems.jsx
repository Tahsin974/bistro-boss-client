import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab} from "@mui/material";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu"
import FoodTab from "../FoodTab/FoodTab"
import './FoodItems.css'
const FoodItems = () => {
  const [menu] = useMenu()
  const [value, setValue] = useState('1');
  
  

  const salads = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const soups = menu.filter(item => item.category === 'soup');
  const desserts = menu.filter(item => item.category === 'dessert');
  const drinks = menu.filter(item => item.category === 'drinks');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <section className="my-28 space-y-10">
      <Box >
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} className=" mb-10"
    centered>
            <Tab label="SALADS" value="1" />
            <Tab label="PIZZAS" value="2" />
            <Tab label="SOUPS" value="3" />
            <Tab label="DESSERTS" value="4" />
            <Tab label="DRINKS" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FoodTab
          items={salads}
          isPrice={true}
          >
          </FoodTab>
        </TabPanel>
        <TabPanel value="2">
        <FoodTab
          items={pizzas}
          isPrice={true}
          >
          </FoodTab>
        </TabPanel>
        <TabPanel value="3">
        <FoodTab
          items={soups}
          isPrice={true}
          >
          </FoodTab>
        </TabPanel>
        <TabPanel value="4">
        <FoodTab
          items={desserts}
          isPrice={true}
          >
          </FoodTab>
        </TabPanel>
        <TabPanel value="5">
        <FoodTab
          items={drinks}
          isPrice={true}
          >
          </FoodTab>
        </TabPanel>
      </TabContext>
    </Box>
      
    </section>
  );
};

export default FoodItems;

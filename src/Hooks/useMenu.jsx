import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const BaseUrl = "http://localhost:5000";

  useEffect(() => {
    axios.get(`${BaseUrl}/all-items`).then((res) => {

        setMenu(res.data);
        setLoading(false);
    });
}, []);
  return [menu, loading];
};

export default useMenu;

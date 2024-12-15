import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get('/menu').then((res) => {

        setMenu(res.data);
        setLoading(false);
    });
}, []);
  return [menu, loading];
};

export default useMenu;

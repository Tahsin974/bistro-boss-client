
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
//   const [menu, setMenu] = useState([]);
//   const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

//   useEffect(() => {
//     axiosPublic.get('/menu').then((res) => {

//         setMenu(res.data);
//         setLoading(false);
//     });
// }, [axiosPublic]);


const { data: menu = [],isPending : loading,refetch } = useQuery({
  queryKey: ["menu"],
  queryFn: async () => {
    const res = await axiosPublic.get("/menu");
    return res.data;
  },
});
  return [menu, loading,refetch];
};

export default useMenu;

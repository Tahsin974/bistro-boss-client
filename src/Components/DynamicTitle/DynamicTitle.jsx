import { Helmet } from "react-helmet-async";

const DynamicTitle = ({pageName}) => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | {pageName}</title>
      </Helmet>
    </div>
  );
};

export default DynamicTitle;

import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import Banner from "../Header/Banner";

const Home = () => {
  const Categories = useLoaderData();

  return (
    <div>
      <Banner Categories={Categories}></Banner>
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
        {Categories.map((Category) => (
          <CategoriesCard
            key={Category.id}
            Category={Category}
          ></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

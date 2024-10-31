import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const Home = () => {
      const data = useLoaderData()
      return (
            <section className=" container mx-auto">
                  <Products data={data.slice(0, 30 - 6)}></Products>
            </section>
      );
};

export default Home;
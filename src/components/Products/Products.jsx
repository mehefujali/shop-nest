import PropTypes from "prop-types";
import Product from "../Product/Product";
const Products = ({ data }) => {
      return (
            <div>
                  <div className=" l grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {
                              data.map(product => <Product product={product} key={product.id}></Product>)
                        }
                  </div>
            </div>
      );
};
Products.propTypes = {
      data: PropTypes.array.isRequired
}

export default Products;
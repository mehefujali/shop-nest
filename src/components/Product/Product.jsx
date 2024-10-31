import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Product = ({ product }) => {
      const { title, images, price } = product

      return (
            <div>

                  <div className=" w-full h-ful p-7 rounded-lg border-2 flex gap-1 flex-col justify-between items-start">
                        {<img className=" mb-3 w-full h-full rounded-lg " src={images[0]} alt={title} />}
                        <h1 className=" text-xl font-bold">{title}</h1>
                        <h1 className=" text-xl">${price}</h1>
                        <NavLink to={`product/${product.id}`}><button className=" btn bg-[#FF6F61] text-white">Buy Now</button></NavLink>
                  </div>
            </div>
      );
};
Product.propTypes = {
      product: PropTypes.object.isRequired
}
export default Product;
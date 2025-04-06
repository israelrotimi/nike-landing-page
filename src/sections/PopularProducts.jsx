import ShoeCard from "../components/ShoeCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <div 
    className="flex flex-col gap-10 my-2 mx-3">
      <h1
      className="font-palanquin font-bold text-4xl">Our 
      <span
      className="text-coral-red"> Popular</span> Products</h1>
      <p
      className="font-montserrat info-text">
      Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
      </p>
      <div 
      className="flex flex-wrap items-center justify-center">
        {products.map(({imgURL, name, price}, i) => (
          <div key={i}
          className="flex flex-col gap-5 my-5 mx-1">
            <div
            className="flex justify-center items-center bg-card bg-center bg-cover w-52 min-h-52 rounded-xl max-sm:p-4">
              <img src={imgURL} alt=""
              width={150}
              height={103.34}
              className='object-contain' />
            </div>
            <div className="flex gap-3 text-lg">
              <span className="text-coral-red">Star</span>
              <span className="info-text">(4.5)</span>
            </div>
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-coral-red text-2xl font-bold">{price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularProducts
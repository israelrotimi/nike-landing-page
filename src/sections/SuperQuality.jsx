import Button from "../components/Button"
import { shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <div 
    className="flex max-md:flex-wrap gap-10 w-full min-h-[50vh]">
      <div 
      className="flex flex-col gap-10 md:w-1/2">
        <h2
        className="text-4xl font-palanquin font-bold">We Provide You 
        <span className="text-coral-red"> Super Quality </span> Shoes</h2>
        <p 
        className="font-montserrat info-text text-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p 
        className="font-montserrat info-text text-lg">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button text="View details" />
      </div>
      <div 
      className="flex items-center justify-center w-full md:w-1/2">
        <img src={shoe8} alt=""
         />
      </div>
    </div>
  )
}

export default SuperQuality
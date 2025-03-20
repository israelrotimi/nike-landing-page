import {offer} from "../assets/images"
import {arrowRight} from "../assets/icons"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <div 
    className="flex flex-col md:flex-row gap-10">
      <div className="flex max-md:order-1 md:w-[120%] md:h-[120%]">
        <img src={offer} alt=""
        className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-5 my-10">
        <h2 
        className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="info-text font-montserrat">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p 
        className="info-text font-montserrat">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex gap-10">
        <Button text="Shop now" iconUrl={arrowRight} />
        <Button text="Learn more" primary={false} />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer
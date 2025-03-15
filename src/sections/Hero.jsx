import { bigShoe1, bigShoe2, bigShoe3, thumbnailBackground } from "../assets/images"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section 
    className="flex flex-col xl:flex-row max-container min-h-screen gap-10">
    <div 
    className="flex flex-col gap-12 mx-10 my-2"
    >
      <h4 className="text-coral-red text-xl font-montserrat">Our Summer Collections</h4>
      <h1
      className="sm:text-8xl max-sm:text-[72px] max-sm:leading-[82px] text-sans font-palanquin font-bold"
      >The New Arrival 
        <br /><span className="text-coral-red"> Nike </span>
         Shoes</h1>
      <p className="info-text max-w-sm">Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
      <Button text="Shop now" iconUrl={arrowRight} />
      <div className="flex gap-16 flex-wrap">
        {statistics.map(({ value, label }) => (
          <div className="gap-5">
          <h3 className="text-4xl font-palanquin font-bold">{value}</h3>
          <p className="font-montserrat info-text">{label}</p>
        </div>
        ))}
      </div>
    </div>
    <div 
    className="bg-hero bg-primary bg-cover bg-center items-center justify-center flex flex-col xl:min-h-screen my-2 max-xl:py-40">
      <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
      <div className="flex gap-5">
      {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}      
      </div>
    </div>
    </section>
  )
}

export default Hero
import { services } from "../constants"

const Services = () => {
  return (
    <div 
    className="w-full my-4">
      <div className="flex flex-wrap gap-10">
        {services.map(({imgURL, label, text}, i) => (
          <div key={i}
          className="flex flex-col gap-5 w-80 shadow p-6">
          <img src={imgURL} alt={label}
          className="w-[100px]" />
          <h3 className="text-2xl">{label}</h3>
          <p className="info-text font-montserrat">{text}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Services
import { services } from "../constants"

const Services = () => {
  return (
    <div 
    className="w-full my-4">
      <div className="flex flex-wrap gap-10">
        {services.map(({img, label, text}, i) => (
          <div key={i}
          className="flex flex-col gap-5 w-80 shadow p-6">
          <img src={img} alt={label} />
          <h3 className="text-2xl">{label}</h3>
          <p className="info-text font-montserrat">{text}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Services
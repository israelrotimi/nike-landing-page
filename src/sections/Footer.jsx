import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-10">
      <div className="w-full flex flex-wrap justify-between gap-10">
        <div className="flex flex-col gap-5 w-full md:w-1/3 mb-10">
          <div className="gap-3 h-10">
            <img src={footerLogo} width={150} />
            <h3 className="text-lg">Nike</h3>
          </div>
          <p className="text-white">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5">
            {socialMedia.map(({src, alt}, i) => (
              <a href="#" key={i}>
                <img src={src} alt={alt} className="bg-white p-3 rounded-full" />
              </a>
            ))}
          </div>
        </div>
        {footerLinks.map(({ title, links }, i) => (
          <div key={i} className="flex flex-col gap-5 text-white">
            <h3 className="text-2xl space-y-2">{title}</h3>
            {links.map(({name, href}, i) => (
              <a key={i} href={href}>{name}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex  flex-col items-center justify-center md:justify-between w-full">
        <p className="text-white cursor-pointer">
          &copy; Copyright. All rights reserved.
        </p>
        <p className="text-white cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </div>
  )
}

export default Footer
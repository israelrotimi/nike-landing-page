import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-1/3 flex items-center justify-center">
        <h2 className="font-palanquin text-4xl font-bold">
         Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
        </h2>
      </div>
      <div className="w-[40%] flex space-x-5 px-3 py-2 items-center justify-center rounded-full border border-black">
        <input type="text" placeholder="suscribe@nike.com" className="font-light outline-none w-2/3" />
        <Button text="Sign Up" />
      </div>
    </div>
  )
}

export default Subscribe
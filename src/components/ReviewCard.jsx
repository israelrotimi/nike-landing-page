import {star} from "../assets/icons"

const ReviewCard = ({ imgUrl, comment, customer, rating}) => {
  return (
    <div 
    className="flex flex-col justify-center items-center gap-5">
        <img src={imgUrl} alt="customer"
        className="rounded-full w-2/3" />
        <p className="info-text font-montserrat w-2/3">
            {comment}
        </p>
        <p className="info-text font-montserrat text-lg">
            <img src={star} alt="Star" /> {rating}
        </p>
        <h3 className="text-xl font-bold">{customer}</h3>
    </div>
  )
}

export default ReviewCard
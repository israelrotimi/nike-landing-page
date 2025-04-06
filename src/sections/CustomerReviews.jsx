import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <div 
    className="flex flex-col gap-10">
      <h2 
    className="text-4xl font-palanquin font-bold">
      What Our <span className="text-coral-red">Customers</span> Say?
    </h2>
    <div className="flex flex-wrap items-center justify-center">
      {reviews.map(({imgURL, customer, rating, feedback}, i) => (
        <ReviewCard key={i} imgUrl={imgURL} comment={feedback} customer={customer} rating={rating} />
      ))}
    </div>
    </div>
  )
}

export default CustomerReviews
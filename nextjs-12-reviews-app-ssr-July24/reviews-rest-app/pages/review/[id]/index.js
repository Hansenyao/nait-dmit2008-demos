//localhost:3000/review/1
import AdaptationReviewCard from "../../../components/AdaptationReviewCard";
import { BASE_URL } from "../../../utils/api/base";

export async function getServerSideProps(context){
  const {id}=context.params
  const resp=await fetch(BASE_URL+"/reviews/"+id);
  const data=await resp.json();

  return {
    props:{
      review:data
    }
  }
}

export default function index({review}) {
  return (
    <AdaptationReviewCard
                    id={review.id}
                    rating={review.rating}
                    title={review.title}
                    comment={review.comment}
                  />
  )
}

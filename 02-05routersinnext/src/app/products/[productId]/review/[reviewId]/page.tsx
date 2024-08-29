import {notFound} from "next/navigation"

export default function ReviewDetail({
    params
}:{
    params: {
        reviewId : string;
        productId: string;
    };
}) {if(parseInt(params.reviewId) > 1000){
    notFound()
}
    return(
        <>
            <h1>Review no {params.reviewId} of product {params.productId}</h1>
        </>
    )
}
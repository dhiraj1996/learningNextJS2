export default function ReviewDetail({
    params
}:{
    params: {
        reviewId : string;
        productId: string;
    };
}) {
    return(
        <>
            <h1>Review no {params.reviewId} of product {params.productId}</h1>
        </>
    )
}
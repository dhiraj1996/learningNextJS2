import { Metadata } from "next";

type Props = {
    params: {
        productId: String;
    };
};

export const generateMetadata = ({params}: Props) : Metadata => {
    return{
        title: `Product ${params.productId}`,
    }
}

export default function ProductId({params}: Props) {
    return <h1> Product with id is {params.productId} </h1>
}
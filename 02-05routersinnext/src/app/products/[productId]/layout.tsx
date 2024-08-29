export default function ProductDetailLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return(
        <>
            {children}
            <h1>Features of Products</h1>
        </>
    )
}
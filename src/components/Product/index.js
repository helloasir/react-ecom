import "./index.css";

export default function Product(props) {
    const {sku, brand, name, price,image_key} = props

    return (
        <div
            key={sku}
            className={"product"}
        >
            <img
                src={'https://z.nooncdn.com/products/tr:n-t_400/'+image_key+'.jpg'}
                alt={`Image of ${name}`}
                className={"image-product"}
            />
            <h3>{name}</h3>
            <p>Brand : {brand}</p>
            <h4> Price AED {price}</h4>
            {/* <span>Sold By {Sold_By}</span> */}
            {/* <div>
                <button
                    className="snipcart-add-item"
                    data-item-id={id}
                    data-item-image={imageUrl}
                    data-item-name={name}
                    data-item-url="/"
                    data-item-price={price}
                >
                    Add to Cart
                </button>
            </div> */}
        </div>
    );
}
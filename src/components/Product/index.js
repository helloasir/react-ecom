import "./index.css";

export default function Product(props) {
    const {Noon_SKU, Product_Name, Brand_Name, Sold_By} = props

    return (
        <div
            key={Noon_SKU}
            className={"product"}
        >
            {/* <img
                src={imageUrl}
                alt={`Image of ${name}`}
                className={"image-product"}
            /> */}
            <h3>{Noon_SKU}</h3>
            <p>{Product_Name}</p>
            <h4> {Brand_Name}</h4>
            <span>Sold By {Sold_By}</span>
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
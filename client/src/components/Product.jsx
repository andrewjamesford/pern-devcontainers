
const Product = ({ product }) => {
    const { id, name, description, price, image } = product;

    return (
        <li key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <img src={image} alt={name} />
        </li>
    );
}

export default Product;

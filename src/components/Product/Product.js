import {
    Container,
    Image,
    Title,
    Subtitle,
} from "./styledProduct";

const Product = ({ img, title, subtitle }) => {
    return (
        <Container>
            <Image src={img} alt={title} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
};

export default Product;

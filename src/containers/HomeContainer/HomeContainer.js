import shopData from "../../data/shopData.json";
import discoverData from "../../data/discoverData.json";
import { Product } from "../../components";
import {
    Container,
    LeftContainer,
    LeftTitle,
    LeftSubContainer,
    RightContainer,
    RightSubContainer,
    RightTitle,
} from "./styledHomeContainer";

const HomeContainer = () => {
    return (
        <Container>
            <LeftContainer>
                <LeftTitle>SHOP</LeftTitle>
                <LeftSubContainer>
                    {shopData.map(product => (
                        <Product
                            key={product.id}
                            img={product.img}
                            title={product.title}
                            subtitle={product.subtitle}
                        />
                    ))}
                </LeftSubContainer>
            </LeftContainer>
            <RightContainer>
                <RightTitle>DISCOVER</RightTitle>
                <RightSubContainer>
                    {discoverData.map(product => (
                        <Product
                            key={product.id}
                            img={product.img}
                            title={product.title}
                            subtitle={product.subtitle}
                        />
                    ))}
                </RightSubContainer>
            </RightContainer>
        </Container>
    );
};

export default HomeContainer;

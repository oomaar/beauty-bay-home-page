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
    ButtonsContainer,
    Button,
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
                    <ButtonsContainer>
                        <Button>What's New</Button>
                        <Button>Makeup</Button>
                    </ButtonsContainer>
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
                    <ButtonsContainer>
                        <Button>Advice</Button>
                        <Button>Trends</Button>
                    </ButtonsContainer>
                </RightSubContainer>
            </RightContainer>
        </Container>
    );
};

export default HomeContainer;

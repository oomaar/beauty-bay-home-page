import SearchIcon from '@material-ui/icons/Search';
import {
    Logo,
    Edited,
    Tribe,
    Orders,
    Account,
    WishList,
    Bag,
} from "../../svg";
import {
    Container,
    LogoContainer,
    SearchContainer,
    IconsContainer,
    Icon,
} from "./styledBrand";

const Brand = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <SearchContainer>
                Hey, what are you looking for?
                <SearchIcon />
            </SearchContainer>
            <IconsContainer>
                <Icon>
                    <Edited />
                </Icon>
                <Icon>
                    <Tribe />
                </Icon>
                <Icon>
                    <Orders />
                </Icon>
                <Icon>
                    <Account />
                </Icon>
                <Icon>
                    <WishList />
                </Icon>
                <Icon>
                    <Bag />
                </Icon>
            </IconsContainer>
        </Container>
    );
};

export default Brand;

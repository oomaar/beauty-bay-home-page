import {
    Container,
    LinkContainer,
    NavLink,
} from "./styledNavbar";

const Navbar = () => {
    return (
        <Container>
            <LinkContainer>
                <NavLink>Stay @ Home</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Explore</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Brands</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>By BEAUTY BAY</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Makeup</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Skincare</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Bath & Body</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Wellness</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Haircare</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Accessories</NavLink>
            </LinkContainer>
            <LinkContainer>
                <NavLink>Makeup Brushes</NavLink>
            </LinkContainer>
        </Container>
    );
};

export default Navbar;

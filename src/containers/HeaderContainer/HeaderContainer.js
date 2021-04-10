import { Brand, Navbar } from "../../components";
import { Container } from "./styledHeaderContainer";

const HeaderContainer = () => {
    return (
        <Container>
            <Brand />
            <Navbar />
        </Container>
    );
};

export default HeaderContainer;


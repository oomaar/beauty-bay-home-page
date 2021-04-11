import ClearIcon from '@material-ui/icons/Clear';
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import { Edited, Tribe } from "../../svg";
import {
    Container,
    SubContainer,
    LinksContainer,
    SideLink,
    SignupContainer,
    SignupTitle,
    InputContainer,
    SignupInput,
    SignupButton,
    SocialContainer,
    IconsContainer,
    Icon,
} from "./styledSidebar";

const Sidebar = ({ setSideBar }) => {
    return (
        <Container>
            <SubContainer>
                <ClearIcon onClick={() => setSideBar(false)} className="cross__icon" />

                <LinksContainer>
                    <SideLink>Stay @ Home</SideLink>
                    <SideLink>Explore</SideLink>
                    <SideLink>Brands</SideLink>
                    <SideLink>By BEAUTY BAY</SideLink>
                </LinksContainer>

                <LinksContainer>
                    <SideLink>Makeup</SideLink>
                    <SideLink>Skincare</SideLink>
                    <SideLink>Bath & Body</SideLink>
                    <SideLink>Wellness</SideLink>
                    <SideLink>Haircare</SideLink>
                    <SideLink>Accessories</SideLink>
                    <SideLink>Makeup Brushes</SideLink>
                </LinksContainer>

                <LinksContainer>
                    <SideLink><Edited /></SideLink>
                    <SideLink><Tribe /></SideLink>
                    <SideLink>My Hauls</SideLink>
                    <SideLink>Help & Information</SideLink>
                    <SideLink>Site Preferences</SideLink>
                </LinksContainer>

                <SignupContainer>
                    <SignupTitle>Signup for newness and exclusive promos</SignupTitle>
                    <InputContainer>
                        <SignupInput placeholder="Your email" />
                        <SignupButton>Sign up</SignupButton>
                    </InputContainer>
                </SignupContainer>


                <SocialContainer>
                    <SignupTitle>Connect with us</SignupTitle>
                    <IconsContainer>
                        <Icon>
                            <TwitterIcon />
                        </Icon>
                        <Icon>
                            <FacebookIcon />
                        </Icon>
                        <Icon>
                            <YouTubeIcon />
                        </Icon>
                        <Icon>
                            <InstagramIcon />
                        </Icon>
                        <Icon>
                            <PinterestIcon />
                        </Icon>
                    </IconsContainer>
                </SocialContainer>
            </SubContainer>
        </Container>
    );
};

export default Sidebar;

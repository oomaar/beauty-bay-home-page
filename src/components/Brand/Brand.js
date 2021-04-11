import SearchIcon from '@material-ui/icons/Search';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import { useState } from 'react';
import {
    Logo,
    Edited,
    Tribe,
    Orders,
    Account,
    WishList,
    Bag,
} from "../../svg";
import SearchBar from '../SearchBar/SearchBar';
import {
    Container,
    SubContainer,
    LogoContainer,
    SearchContainer,
    IconsContainer,
    Icon,
    ResponsiveContainer,
    ResponsiveSubContainer,
} from "./styledBrand";

const Brand = () => {
    const [search, setSearch] = useState(false);

    return (
        <Container>
            {search && <SearchBar search={search} setSearch={setSearch} />}
            <SubContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <SearchContainer onClick={() => setSearch(true)}>
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
            </SubContainer>
            <ResponsiveContainer>
                <ResponsiveSubContainer>
                    <IconsContainer>
                        <Icon>
                            <FormatAlignLeftIcon />
                        </Icon>
                        <Icon>
                            <Account />
                        </Icon>
                    </IconsContainer>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <IconsContainer>
                        <Icon>
                            <WishList />
                        </Icon>
                        <Icon>
                            <Bag />
                        </Icon>
                    </IconsContainer>
                </ResponsiveSubContainer>

                <ResponsiveSubContainer>
                    <SearchContainer onClick={() => setSearch(true)}>
                        Hey, what are you looking for?
                <SearchIcon />
                    </SearchContainer>
                </ResponsiveSubContainer>
            </ResponsiveContainer>
        </Container>
    );
};

export default Brand;

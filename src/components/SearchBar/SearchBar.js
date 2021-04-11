import ClearIcon from '@material-ui/icons/Clear';
import {
    Container,
    SubContainer,
    InputContainer,
    SearchInput,
    CrossBtnContainer,
} from "./styledSearchBar";

const SearchBar = ({ search, setSearch }) => {
    return (
        <Container search={search}>
            <SubContainer>
                <InputContainer>
                    <ClearIcon onClick={() => setSearch(false)} className="cross__icon" />
                    <SearchInput placeholder="Search BEAUTY BAY" />
                </InputContainer>
            </SubContainer>
            <CrossBtnContainer>
                <ClearIcon onClick={() => setSearch(false)} className="cross__icon" />
            </CrossBtnContainer>
        </Container>
    );
};

export default SearchBar;

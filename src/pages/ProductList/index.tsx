import { useParams } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from "./style";
import { useState } from "react";
import { SelectChangeHandler, Sort, } from "./type";

const ProductList = () => {
    const [filters, setFilters] = useState({
        color: '',
        size: ''
    })
    const [sort, setSort] = useState<Sort>("newest")

    const handleFilters: SelectChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSort: SelectChangeHandler = (e) => {
        const value = e.target.value as Sort
        setSort(value)
    }

    console.log("filters", filters);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={handleSort}>
                        <Option value={'newest'}>Newest</Option>
                        <Option value={'asc'}>Price (asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filter={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
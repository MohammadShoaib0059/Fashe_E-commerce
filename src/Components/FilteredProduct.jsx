import styled from "styled-components";
import { mobile } from "../Responsive";
import { Filtered_Category, Filtered_Product, getproducts } from "../Redux/Slicer/ProductSlice";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterData from "./FilterData";
import { useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div``;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const FilteredProduct = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
    dispatch(Filtered_Category(category))
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, [category]);
    const handleFilter = (price) => {
    dispatch(Filtered_Product(price));
    // console.log(FilteredProduct());
  };
  return (
    <Container>
    <img src="../Images/banner-1.jpg" width="100%"/>
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"electronics"}>electronics</MenuItem>
          <MenuItem value={"jewelery"}>jewelery</MenuItem>
          <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
        </Select>
      </FormControl>
        <FilterAltIcon/>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <button onClick={() => handleFilter('all')}>All Products</button>
        <button onClick={() => handleFilter(168)}>168</button>
        <button onClick={() => handleFilter(70)}>70</button>
      </Filter>
    </FilterContainer>
      <FilterData/>
  </Container>
  )
}

export default FilteredProduct

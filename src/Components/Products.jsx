import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/Slicer/CartSlice";
import { getproducts } from "../Redux/Slicer/ProductSlice";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { addToFav } from "../Redux/Slicer/FavoritesSlicer";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getproducts());
  }, []);
  console.log(products);

  const AddToCart = (item) => {
    dispatch(add(item));
  };
  const AddToFavorite = (item) => {
    dispatch(addToFav(item));
  };
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
        {products.map((item) => {
          return (
            <Container>
              <Circle />
              <Image src={item.image} width="270px" />
              <Info>
                <Icon>
                  <ShoppingCartOutlined onClick={() => AddToCart(item)} />
                </Icon>
                <Icon>
                  <SearchOutlined />
                </Icon>
                <Icon>
                  <FavoriteBorderOutlined onClick={() => AddToFavorite(item)} />
                </Icon>
              </Info>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

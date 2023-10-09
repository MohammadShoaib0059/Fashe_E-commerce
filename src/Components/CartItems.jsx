import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  remove,
} from "../Redux/Slicer/CartSlice";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0px 5px;
  width: 75px;
  height: 33px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems.length);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(totalPrice);
  const [quantit, setQuantity] = useState(0);
  const [finalamount, setFinalamount] = useState(0);
  const dispatch = useDispatch();
  const handlIncreaseClick = (id) => {
    dispatch(increaseItemQuantity(id));
    // if (action === "add") {
    //   setQuantity(quantity + 1);
    // } else {
    //   setQuantity(quantity - 1);
    // }
  };
  const handlDecreaseClick = (id) => {
    dispatch(decreaseItemQuantity(id));
  };
  const RemoveItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <Container>
        {cartItems.length === 0 ? (
          <>
            <img src="/Images/EmptyCart_3-Copy.png" />
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/sale"
                style={{
                  backgroundColor: "red",
                  textDecoration: "none",
                  textAlign: "center",
                  width: "50%",
                  padding: 10,
                  color: "white",
                  borderRadius: 30,
                  border: "white",
                }}
              >
                <LocalMallIcon /> RETURN TO SHOP
              </Link>
            </Container>
          </>
        ) : (
          <Wrapper>
            <img src="../Images/master-slide-02.jpg.webp" width="100%" />
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                {cartItems.map((item) => {
                  return (
                    <>
                      <Product>
                        <ProductDetail>
                          <Image src={item.image} />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.id}
                            </ProductId>
                            <ProductColor color="black" />
                            <ProductSize>
                              <b>Price:</b> {item.price}
                            </ProductSize>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add onClick={() => handlIncreaseClick(item.id)} />
                            <ProductAmount>{item.quantity}</ProductAmount>
                            <Remove
                              onClick={() => handlDecreaseClick(item.id)}
                            />
                          </ProductAmountContainer>
                          <ProductPrice>
                            $ {item.price * item.quantity}
                          </ProductPrice>
                        </PriceDetail>
                      </Product>
                      <Hr />
                    </>
                  );
                })}
              </Info>
              <Summary style={{ minHeight: 400 }}>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Total Cart Quantity</SummaryItemText>
                  <SummaryItemPrice>$ {totalQuantity}</SummaryItemPrice>
                </SummaryItem>
                {/* <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem> */}
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                </SummaryItem>
                <Button>PROCEED TO PAY</Button>
              </Summary>
            </Bottom>
          </Wrapper>
        )}
      </Container>
    </div>
  );
};

export default CartItems;

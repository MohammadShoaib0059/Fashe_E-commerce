import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";

const Navigation = () => {
  const CartItem = useSelector((state) => state.cart.cart);
  const FavoritesItems = useSelector((state) => state.Favorites.Fav);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="../Images/logo.png.webp"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "10px",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "10px",
                }}
                to="/shop"
              >
                Shop
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "10px",
                }}
                to="/sale"
              >
                Sale
              </Link>
              <Nav.Link href="#action1">Blog</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action1">Contact</Nav.Link>
            </Nav>
            <Link
              style={{ textDecoration: "none", color: "#000", padding: "10px" }}
              to="/favorite"
            >
              <Badge
                badgeContent={
                  FavoritesItems.length > 0 ? FavoritesItems.length : 0
                }
                color="primary"
              >
                <FavoriteIcon></FavoriteIcon>
              </Badge>
            </Link>
            <NavDropdown
              title={<AccountCircleIcon />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              style={{ textDecoration: "none", color: "#000", padding: "10px" }}
              to="/cart"
            >
              <Badge
                badgeContent={CartItem.length > 0 ? CartItem.length : 0}
                color="primary"
              >
                <ShoppingCartIcon></ShoppingCartIcon>
              </Badge>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

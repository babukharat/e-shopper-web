import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";
import CustomerDetails from "../../inventry-module/customer/details/CustomerDetails";
import CustomerOrders from "../../inventry-module/customer/details/CustomerDetails";
import CustomerBilling from "../../inventry-module/customer/details/CustomerDetails";
import CustomerHome from "../../inventry-module/customer/home/CustomerHome";
import AddVendor from "../../inventry-module/vendors/addVendor/AddVendor";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>E-Shoppers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="customerHome" className="nav-link">
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavDropdown title="Customer">
                          <NavDropdown.Item>
                            <NavLink to="customerOrders" className="me-auto">
                              Order
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="customerDetails">Details</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="customerBilling">Billing</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>
                      <li className="nav-item">
                        <NavDropdown title="Inventory">
                          <NavDropdown.Item>
                            <NavLink to="addproduct" className="me-auto">
                              Add Product
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="showproduct">Stock Available</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>

                      <li className="nav-item">
                        <NavLink to="product" className="nav-link">
                          Product
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="offers" className="nav-link">
                          Offers
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="report" className="nav-link">
                          Report
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="addVendor" className="nav-link">
                          AddVendors
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="addVendor" className="nav-link">
                          Employee Login
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="logout" className="nav-link">
                          logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/customerHome" element={<CustomerHome />}></Route>
        <Route path="/customerDetails" element={<CustomerDetails />}></Route>
        <Route path="/customerOrder" element={<CustomerOrders />}></Route>
        <Route path="/customerBilling" element={<CustomerBilling />}></Route>
        <Route path="/addVendor" element={<AddVendor />}></Route>

        {/* <Route path="/inventory" element={<Inventory />}></Route> */}
        {/* <Route path="/offers" element={<Offers />}></Route> */}
        {/* <Route path="/product" element={<Product />}></Route> */}
        {/* <Route path="/vendor" element={<Vendors />}></Route> */}
        {/* <Route path="/report" element={<Report />}></Route> */}
        {/* <Route path="/logout" element={<Logout />}></Route> */}
      </Routes>
    </>
  );
}

export default NavBar;

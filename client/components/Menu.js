import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';



const styles = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 20 + 'px',
  color: '#08489D'
}

const Menu = (props) => {

  let categories = props.categories;
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a  href="#"><img src="http://www.whichcraft.com/wp-content/uploads/2015/05/WhichCraftLogoMediumGrey.png" weign="80" height="80"/>AlcoShop</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
        <NavItem eventKey={1} href="#cart">
          <button>
            <i className="ion-ios-cart"></i>
          </button>
        </NavItem>

        <NavDropdown  eventKey={categories.length} title="" id="basic-nav-dropdown">
            {categories.map(category => (
                <MenuItem eventKey={3.1} href={'#category/'+category.toLowerCase() }>{category}</MenuItem>
          ))}
        </NavDropdown>

      </Nav>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl className='search'
            type="text" placeholder="Search"
            onKeyPress={props.onSearch}/>
        </FormGroup>
      </Navbar.Form>

    </Navbar>
  );
};
export default Menu;

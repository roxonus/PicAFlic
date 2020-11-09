// import React from 'react';
// import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
// import styled from 'styled-components';
// const Styles = styled.div`
//   .navbar { background-color: #222; }
//   a, .navbar-nav, .navbar-light .nav-link {
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: #9FFFCB;
//     &:hover { color: white; }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
// `;
// export const NavigationBar = () => (
//   <Styles>
//     <Navbar expand='large'>
//       <Navbar.Brand href='/'>Tutorial</Navbar.Brand>
//       <Navbar.Toggle aria-controls='basic-navbar-nav'/>
//       <Form className='form-center'>
//         <FormControl type='text' placeholder='Search' className='' />
//       </Form>
//       <Navbar.Collapse id='basic-navbar-nav'>
//         <Nav className='ml-auto'>
//           <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
//           <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles>
// )
import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Your personal CMS
      </a>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;

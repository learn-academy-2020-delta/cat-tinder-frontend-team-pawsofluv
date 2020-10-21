import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer.js'
// import { Nav, NavItem, NavLink } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() })

it('Checks for the Nav tag', () => {
  const renderFooter= shallow(<Footer />)
  expect(renderFooter.find('Nav').exists());
})

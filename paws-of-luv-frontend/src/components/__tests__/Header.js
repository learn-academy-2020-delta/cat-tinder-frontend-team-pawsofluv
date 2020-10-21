import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header.js'
// import { Nav, NavItem, NavLink } from 'reactstrap';

Enzyme.configure({ adapter: new Adapter() })

it('Checks for the Nav tag', () => {
  const renderHeader= shallow(<Header />)
  expect(renderHeader.find('Nav').exists());
})

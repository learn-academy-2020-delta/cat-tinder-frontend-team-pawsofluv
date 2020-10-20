import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the header', () => {
  const header = shallow(<Header />)
  expect(header.find('p').text()).toEqual('Header')
})

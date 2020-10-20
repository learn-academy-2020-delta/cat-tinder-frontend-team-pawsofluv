import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the header', () => {
  const footer = shallow(<Footer />)
  expect(footer.find('p').text()).toEqual('Footer')
})

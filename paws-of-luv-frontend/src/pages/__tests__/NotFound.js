import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the not found msg', () => {
  const notFound = shallow(<NotFound />)
  expect(notFound.find('h1').text()).toEqual('Oopsies.')
})

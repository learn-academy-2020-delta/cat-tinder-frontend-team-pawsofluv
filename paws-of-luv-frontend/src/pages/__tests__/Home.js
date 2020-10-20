import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the cat home page', () => {
  const home = shallow(<Home />)
  expect(home.find('h1').text()).toEqual('Paws of Luv')
})

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the cat new', () => {
  const catNew = shallow(<CatNew />)
  expect(catNew.find('h3').text()).toEqual('Cat New')
})

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow.js'

Enzyme.configure({ adapter: new Adapter() })

it('renders the cat show', () => {
  const catShow = shallow(<CatShow />)
  expect(catShow.find('h3').text()).toEqual('Cat Show')
})

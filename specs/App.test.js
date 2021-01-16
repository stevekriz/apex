import { configure, mount, render, shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('App should have a header should exists', () => {
    expect(mount(<App />).find('h1').text()).toEqual('More places to stay');
  });
});





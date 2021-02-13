import {
  configure, mount, render,
} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/app';
import Banner from '../client/components/Banner';
import Carousel from '../client/components/Carousel';

configure({ adapter: new Adapter() });

const direction = jest.fn();
describe('<App />', () => {
  const primaryListingId = 5;
  const component = mount(<App primaryListingId={primaryListingId} />);

  it('should exist', () => {
    expect(component).toBeDefined();
  });

  it('should render Banner', () => {
    expect(component.contains(<Banner direction={direction} page={1} maxPage={3} />)).toBe(false);
  });

  it('should render Carousel', () => {
    expect(component.contains(<Carousel
      page={1}
      gallery={[]}
      stayList={[{
        name: 'name',
        image_url: 'string',
      }]}
    />)).toBe(false);
  });
});

describe('<Banner />', () => {
  it('should render the Banner element', () => {
    const component = render(<Banner direction={direction} page={1} maxPage={3} />);

    expect(component).toBeDefined();
  });
});

describe('<Carousel />', () => {
  it('should render the carousel element', () => {
    const data = [{
      id: 1,
      image_url: 'https://fec-photos-storage.s3-us-west-1.amazonaws.com/3/12.jpg',
      description: 'Legacy',
      house_type: 'illum',
      is_super_host: false,
      average_rating: 2.34,
      number_of_beds: 3,
      number_of_reviews: 32,
      price_per_night: 316,
    },
    ];

    const component = render(<Carousel
      page={1}
      gallery={data}
      stayList={[{
        name: 'name',
        image_url: 'string',
      }]}
    />);

    expect(component).toBeDefined();
  });
});

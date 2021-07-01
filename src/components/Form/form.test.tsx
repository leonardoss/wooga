import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Form, { validateField } from './form.component';

const options = {
  action: '/foobar',
  method: 'post',
  layout: 'vertical',
  fields: [
    {
      type: 'text',
      label: 'Name',
      name: 'someName',
      validation: [
        {
          required: {
            value: true,
            msg: 'field required',
          },
        },
        {
          fieldStartsWith: {
            value: 'wooga.name',
            msg: 'expected field starting with: wooga.name',
          },
        },
      ],
    },
    {
      type: 'text',
      label: 'Name 2',
      name: 'someName 2',
      validation: [
        {
          required: {
            value: true,
            msg: 'field required',
          },
        },
      ],
    },
  ],
  submitButton: {
    label: 'Send data',
  },
  onSubmitForm: (values: any) => {
    console.log('--+ FORM SUBMITED: values on form: ', values);
  },
};
const MOCK_PROPS = {
  fields: options.fields,
  action: '/foo/bar.php',
  method: 'GET',
  onSubmitForm: jest.fn(),
};

describe('Testing App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form {...MOCK_PROPS} />, div);
  });
  it('Form renders correctly', () => {
    const tree = renderer.create(<Form {...MOCK_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should chekck if "required" condition works as expected depending of the currentValue', () => {
    expect(validateField('required', '', '')).toBe(false);
    expect(validateField('required', '', 'some value')).toBe(true);
  });
  it('should chekck if "fieldStartsWith" condition works as expected depending of the currentValue', () => {
    expect(validateField('fieldStartsWith', 'some value', 'other value')).toBe(false);
    expect(validateField('fieldStartsWith', 'some value', 'some value')).toBe(true);
    expect(validateField('fieldStartsWith', 'some value', 'some value extended')).toBe(true);
  });

});

import React, { FC } from 'react';
import './App.css';

import Form from './components/Form';

const options = {
  action: '/foobar',
  method: 'post',
  layout: 'horizontal',
  fields: [
    {
      type: 'text',
      label: 'Name',
      name: 'someName',
      validation: [
        {
          fieldStartsWith: {
            value: 'wooga.name',
            msg: 'expected field starting with: wooga.name',
          },
        },
        {
          required: {
            value: true,
            msg: 'field required',
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

const App: FC = () => {
  return (
    <div className="App">
      <Form {...options} />
    </div>
  );
};

export default App;

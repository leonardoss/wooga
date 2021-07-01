import React, { FC } from 'react';

import Form from './components/Form/form.component';

import './App.scss';

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

const App: FC = () => {
  return (
    <div className="App">
      <h1>Wooga - Frontend engineer technical test</h1>
      <Form {...options} />
    </div>
  );
};

export default App;

import React, { FC } from 'react';
import { FormProps, SubmitButtonType } from '../components/Form/form.types';

import Form from '../components/Form/form.component';

const fields = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    validation: [
      {
        required: {
          value: true,
          msg: 'Name is required',
        },
      },
      {
        fieldStartsWith: {
          value: 'leonardo',
          msg: 'expected field starting with: leonardo',
        },
      },
    ],
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'lastName',
    validation: [
      {
        required: {
          value: true,
          msg: 'field required',
        },
      },
      {
        fieldStartsWith: {
          value: 'silva',
          msg: 'expected field starting with: silva',
        },
      },
    ],
  },
];
const moreFields = [
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    validation: [
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
    label: 'City',
    name: 'city2',
  },
];
const submitButton: SubmitButtonType = {
  label: 'Send data',
};

export default {
  title: 'Form',
  argTypes: {
    action: {
      defaultValue: '/foobar.php',
      type: { name: 'string', required: true },
      description: 'Specifies where to send the form-data after submit',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: `string` },
        defaultValue: { summary: '/' },
      },
    },
    method: {
      defaultValue: 'get',
      type: { name: 'boolean', required: false },
      description: 'Specifies how to send form-data (HTTP verb to be used',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: `get|post` },
        defaultValue: { summary: 'get' },
      },
    },
    layout: {
      defaultValue: 'vertical',
      type: { name: 'boolean', required: false },
      description: 'Defines the form layout',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: `vertical | horizontal` },
        defaultValue: { summary: 'vertical' },
      },
    },
    submitButton: {
      defaultValue: submitButton,
      type: { name: 'array', required: false },
      description: 'Define attributes to submit button',
      control: {
        type: 'array',
      },
      table: {
        type: { summary: `SubmitButtonType` },
        defaultValue: { summary: '{ label: "Submit" }' },
      },
    },
    onSubmitForm: {
      defaultValue: '',
      type: { name: 'function', required: true },
      description: 'Fired after submit the form and verifying data with success',
      table: {
        type: { summary: `(formData: any) => void` },
        defaultValue: { summary: '' },
      },
    },
    fields: {
      defaultValue: fields,
      type: { name: 'array', required: true },
      description: 'Array of fields',
      control: {
        type: 'array',
      },
      table: {
        type: { summary: `FieldsType[]` },
        defaultValue: { summary: '' },
      },
    },
  },
};

export const SimpleExample: FC<FormProps> = ({
  action,
  method,
  layout,
  submitButton,
  onSubmitForm,
  fields,
}: FormProps) => (
  <div style={{ margin: 'auto', maxWidth: 600 }}>
    <Form
      action={action}
      method={method}
      layout={layout}
      submitButton={submitButton}
      onSubmitForm={onSubmitForm}
      fields={fields}
    />
  </div>
);

export const ExampleManyFields: FC<FormProps> = ({
  action,
  method,
  layout,
  submitButton,
  onSubmitForm,
  fields,
}: FormProps) => (
  <div style={{ margin: 'auto', maxWidth: 600 }}>
    <Form
      action={action}
      method={method}
      layout={layout}
      submitButton={submitButton}
      onSubmitForm={onSubmitForm}
      fields={[...fields, ...moreFields]}
    />
  </div>
);

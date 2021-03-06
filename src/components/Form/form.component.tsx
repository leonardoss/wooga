import React, { FC, FormEvent, useState } from 'react';

import Field from './field.component';

import { FormProps, FieldType, GenericObjectType, ValidationType } from './form.types';

import './form.scss';

export const validateField = (
  key: string,
  value: string,
  currentValue: string
): boolean | undefined => {
  switch (key) {
    case 'required':
      return currentValue !== '';
    case 'fieldStartsWith':
      return currentValue.includes(value);
  }
};

const Form: FC<FormProps> = ({
  fields,
  action,
  method,
  layout,
  onSubmitForm,
  submitButton,
}: FormProps) => {
  const [fieldValue, setFieldValue] = useState<GenericObjectType>({});
  const [errors, setErrors] = useState<GenericObjectType>({});

  const handleValidation = (): boolean => {
    let isValid = true;

    fields.forEach(({ name, validation }) => {
      const currentValue = fieldValue[name] || '';

      if (typeof validation !== 'undefined') {
        validation.map((item: ValidationType) => {
          for (const key in item) {
            if (!validateField(key, item[key].value, currentValue)) {
              setErrors((prevState) => {
                const newValue = {
                  [name]: {
                    ...prevState[name],
                    [key]: `${item[key].msg}`,
                  },
                };
                return Object.assign({}, prevState, newValue);
              });

              isValid = false;
            } else {
              if (Object.keys(errors).length !== 0) {
                setErrors((prevState) => {
                  const objTransformed = prevState[name];
                  if (objTransformed) {
                    delete objTransformed[key];
                  }
                  const newValue = {
                    [name]: {
                      ...objTransformed,
                    },
                  };
                  return Object.assign({}, prevState, newValue);
                });
              }
            }
          }
        });
      }
    });

    return isValid;
  };

  const handleSubmit = (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    if (handleValidation()) {
      if (typeof onSubmitForm === 'function') {
        onSubmitForm(fieldValue);
      }
    }
  };

  return (
    <form action={action} method={method} onSubmit={handleSubmit} className={`layout-${layout}`}>
      {fields.map((field: FieldType) => (
        <Field
          key={field.name}
          field={field}
          errors={errors}
          setFieldValue={setFieldValue}
          fieldValue={fieldValue}
        />
      ))}
      <div className="form-control">
        <input type="submit" value={submitButton?.label || 'Submit'} className="btn btn-submit" />
      </div>
    </form>
  );
};

export default Form;

import React, { FC } from 'react';

import { FieldType, GenericObjectType } from './form.types';
import type { State } from './form.types';

interface FieldProps {
  field: FieldType;
  setFieldValue: any;
  fieldValue: GenericObjectType;
  errors: any;
}

const Field: FC<FieldProps> = ({ field, setFieldValue, fieldValue, errors }: FieldProps) => {
  const { name, label, type } = field;

  return (
    <div className="form-control" key={name}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={fieldValue[name] || ''}
        onChange={({ target }) =>
          setFieldValue((prevState: State) => {
            const newValue: Partial<State> = { [target.name]: target.value };

            return Object.assign({}, prevState, newValue);
          })
        }
      />
      {errors[name] &&
        Object.keys(errors[name]).map((key) => (
          <div key={errors[name][key]} className="error">
            {errors[name][key]}
          </div>
        ))}
    </div>
  );
};

export default Field;

import React, { FC } from 'react';

import { FieldType, GenericObjectType } from './form.types';

interface FieldProps {
  field: FieldType;
  setFieldValue: (arg: GenericObjectType) => void;
  fieldValue: GenericObjectType;
  errors: GenericObjectType;
}

const Field: FC<FieldProps> = ({ field, setFieldValue, fieldValue, errors }: FieldProps) => {
  const { name, label, type } = field;

  return (
    <div className="form-control" key={name}>
      <label className="form-label" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type || 'text'}
        name={name}
        className={`input-${type}`}
        value={fieldValue[name] || ''}
        onChange={({ target }) =>
          setFieldValue((prevState: GenericObjectType) => ({
            ...prevState,
            [target.name]: target.value,
          }))
        }
      />
      {errors[name] &&
        Object.keys(errors[name]).map((key) => (
          <div key={errors[name][key]} className="error">
            * {errors[name][key]}
          </div>
        ))}
    </div>
  );
};

export default Field;

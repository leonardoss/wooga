# Wooga - Interview Technical test

## Form Component

The idea was to create a generic `<Form />` component to easily generate forms starting with a
simple input. Visual examples can be found on Storybook. Below let's discuss the API.

## API

### `Form`

| Name          | Type                      | Description                                                 | Default             |
| ------------- | ------------------------- | ----------------------------------------------------------- | ------------------- |
| action        | `string`                  | Specifies where to send the form-data after submit          | `/`                 |
| method?       | `get\|post`               | Specifies how to send form-data (HTTP verb to be used)      | `get`               |
| layout?       | `vertical\|horizontal`    | Defines the form layout                                     | `vertical`          |
| submitButton? | `SubmitButtonType`        | Define attributes to submit button                          | `{label: "Submit"}` |
| onSubmitForm  | `(formData: any) => void` | Fired after submit the form and verifying data with success | ''                  |
| fields        | `FieldType[]`             | Array of fields                                             | '[]'                |

### `FieldType`

| Name       | Type               | Description                                             | Default    |
| ---------- | ------------------ | ------------------------------------------------------- | ---------- |
| type       | `string`           | Specifies the type of the input. Ex. "text", "password" | `text`     |
| name       | `string`           | Defines a name for field                                | `vertical` |
| label      | `string`           | Label to be showed above the field                      | `name`     |
| validation | `ValidationType[]` | Array of validations                                    | `[]`       |

### `ValidationType`

| Name           | Options                       | Description                                |
| -------------- | ----------------------------- | ------------------------------------------ |
| validation key | `required \| fieldStartsWith` | Specifies the key for the given validation |

| Validation key    | options   | Description                                             |
| ----------------- | --------- | ------------------------------------------------------- |
| `fieldStartsWith` | `string`  | Validate if the field values start with the give string |
| `required`        | `boolean` | Validates if the field has value                        |

#### Example of use

    ```javascript
        {
          fieldStartsWith: {
            value: 'wooga.name',
            msg: 'expected field starting with: wooga.name',
          },
        }
    ```

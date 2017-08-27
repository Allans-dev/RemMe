import React from 'react';
import { Field, reduxForm } from 'redux-form';

let QuickAdd = props => {
  const { handleSubmit } = props
  return (
    <div className="quickAdd">
      <form>
        <Field label="Name" type="text" name="name" component="input" />
        <Field label="Email" type="email" name="email" component="input" />
        <Field label="Phone" type="number" name="phoneNumber" component="input" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

QuickAdd = reduxForm({
  form: 'quickAdd'
})(QuickAdd)

export default QuickAdd;

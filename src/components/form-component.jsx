import React from 'react'
import withForm from '../containers/form-container'
import TextInput from './text-input'

const FormComponent = ({
  maySend,
  form,
  handleSend,
  handleInput,
  handleBlur }) => {

  const { name, age, email, phone, propose } = form

  return <div className="FormComponent">
    <form onSubmit={handleSend}>
      <TextInput
        key="name"
        value={name.value}
        validate={name.validators}
        type="name"
        name="name"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="name"
        error={name.error}
        required
      />
      <TextInput
        key="age"
        value={age.value}
        validate={age.validators}
        type="age"
        name="age"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="age"
        error={age.error}
        required
      />
      <TextInput
        key="email"
        value={email.value}
        validate={email.validators}
        type="email"
        name="email"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="email"
        error={email.error}
        required
      />
      <TextInput
        key="phone"
        value={phone.value}
        validate={phone.validators}
        type="phone"
        name="phone"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="phone"
        error={phone.error}
        required
      />
      <TextInput
        key="propose"
        value={propose.value}
        validate={propose.validators}
        type="propose"
        name="propose"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="propose"
        error={propose.error}
        required
      />
      {maySend && <button type="submit">
        Submit
      </button>}
    </form>
    <div>
      <h1>Error log</h1>
      {
        Object.entries(form).map(i => {
          const [key, { error }] = i
          if (error) return <h4 key={key}>{error}</h4>
        })
      }
    </div>
  </div>
}

export default withForm(FormComponent)

import React from 'react'
import withForm from '../containers/form-container'
import TextInput from './text-input'
import SelectInput from './select-input'

const FormComponent = ({
  maySend,
  form,
  handleSend,
  handleInput,
  handleBlur }) => {

  const { name, age, email, phone, propose } = form

  return <form onSubmit={handleSend}>
    <div className="form">
      <TextInput
        value={name.value}
        type="text"
        name="name"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="name"
        error={name.error}
        required
      />
      <div className="form__section--double">
        <SelectInput
          value={age.value}
          name="age"
          onChange={handleInput}
          placeholder="age"
          error={age.error}
          size="sm"
          icon="caretDown"
          required
        />
        <TextInput
          value={email.value}
          type="email"
          name="email"
          onChange={handleInput}
          onBlur={handleBlur}
          placeholder="email"
          error={email.error}
          size="sm"
          required
        />
      </div>
      <TextInput
        value={phone.value}
        type="text"
        name="phone"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="phone"
        error={phone.error}
        icon="globe"
        required
      />
      <TextInput
        value={propose.value}
        type="text"
        name="propose"
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder="what is your propose:"
        error={propose.error}
        required
      />
      {maySend && <button type="submit" className="form__submit">
        Confirm
      </button>}
    </div>
    <div className="log">
      {
        Object.entries(form).map(i => {
          const [key, { error }] = i
          if (error) return <p key={key}>{error}</p>
        })
      }
    </div>
  </form>
}

export default withForm(FormComponent)

import React from 'react'
import {connect} from 'react-redux'
import {sendForm} from '../redux/form'
import {required, greaterThan, validateField, validateForm} from '../utils/validators'

export default function withForm(C) {

  class FormContainer extends React.Component {
    state = {
      sended: false,
      maySend: false,
      form: {
        name: {
          value: '',
          validators: [
            required,
            greaterThan(1)
          ],
          error: ''
        },
        age: {
          value: '',
          validators: [required],
          error: ''
        },
        email: {
          value: '',
          validators: [required],
          error: ''
        },
        phone: {
          value: '',
          validators: [
            required,
            greaterThan(10)
          ],
          error: ''
        },
        propose: {
          value: '',
          validators: [required],
          error: ''
        }
      }
    };

    handleInput = e => {
      const { value, name } = e.currentTarget;
      this.setState(({ form }) => ({
        form: {
          ...form,
          [name]: {
            ...form[name],
            error: '',
            value: value
          },
        }
      }));
    };

    handleBlur = e => {
      const {name, value} = e.currentTarget;
      const {form} = this.state;
      const {validators} = form[name]
      const res = validateField(value, validators)
      const resForm = validateForm(this.state.form)
      if (resForm) {
        this.setState({
          maySend: true
        })
      }
      if (!res) {
        this.setState(({form}) => ({
          form: {
            ...form,
            [name]: {
              ...form[name],
              error: `invalid ${name} field`
            },
          }
        }))
      }
    }

    handleSend = e => {
      e.preventDefault();
      const { form } = this.state;
      const data = {}
      for (let key in form) {
        data[key] = form[key]['value'] 
      }
      console.log(data, 'data')
      this.props.sendForm()
    }

    render() {
      return <C
        {...this.state}
        {...this.props}
        handleBlur={this.handleBlur}
        handleInput={this.handleInput}
        handleSend={this.handleSend}
      />
    }
  }

  return connect(null, {sendForm})(FormContainer)
}
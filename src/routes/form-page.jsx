import React from 'react'
import {connect} from 'react-redux'
import {moduleName} from '../redux/form'
import FormComponent from '../components/form-component'
import UserMessage from '../components/user-message'

const FormPage = ({sended}) => {
  console.log(sended, 'sended')
  return <main className="wrapper">
    <section className="block close">Close</section>
    <section className="block privacy-policy">
      <p>
        We collect your data to keepyou updated about our programs.<br />
        By submitting this form you agree to the <br />
        <span>Privacy Policy</span>.
      </p>
    </section>
    {!sended && <FormComponent />}
    {sended && <UserMessage />}
    <div className="main-logo">
      <svg width="81" height="70" viewBox="0 0 81 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81 59.1601L46.7743 39.4488V0H34.2257V39.4488L0 59.1601L6.26112 70L40.5132 50.2887L74.7389 70L81 59.1601Z" fill="#EEEEEE"/>
      </svg>
    </div>
  </main>
}

export default connect(state => ({
  sended: state[moduleName].sended
}))(FormPage)

import React, { Fragment } from 'react'

const RegisterForm = () => {
  return (
    <Fragment>
        <form>
        <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:'1px'}}>Sign into your account</h5>

<div class="form-outline mb-4">
  <input type="text" id="form2Example17" class="form-control form-control-lg" />
  <label class="form-label" for="form2Example17">FullName</label>
</div>
<div class="form-outline mb-4">
  <input type="email" id="form2Example17" class="form-control form-control-lg" />
  <label class="form-label" for="form2Example17">Email Adress</label>
</div>

<div class="form-outline mb-4">
  <input type="password" id="form2Example27" class="form-control form-control-lg" />
  <label class="form-label" for="form2Example27">Password</label>
</div>

<div class="pt-1 mb-4">
  <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
</div>
        </form>
    </Fragment>
  )
}

export default RegisterForm
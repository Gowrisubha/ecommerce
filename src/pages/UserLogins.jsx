import React from 'react'

export default function UserLogins() {
  return (
    <div className="text-center ">
       <h1 className="text-center">Choose Login account</h1>
        <hr /> 
        <div class="row   ms-5 ps-5">

  <div class="col-sm-6 mb-3 mb-sm-0 col-lg-4 ms-5 ps-5 mt-5 pt-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Customer Login</h5>
        <p class="card-text">Kindly login into your account to use our services.</p>
        <a href="/login" class="btn btn-dark">Login as a customer</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-4 ms-5 ps-5 mt-5 pt-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Admin Login</h5>
        <p class="card-text">Authorised people only.</p>
        <a href="/adminlogin" class="btn btn-dark">Login as admin</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

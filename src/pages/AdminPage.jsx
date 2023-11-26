import React from 'react'

export default function AdminPage() {
  return (
   <>
    <h1 className="text-center">See the status of your product verification</h1>
        <hr />
        <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Item ID</th>
      <th scope="col">Item Name</th>
      <th scope="col">Applied Date</th>
      <th scope="col">View Item</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rosegold Ring</td>
      <td>10/11/2023</td>
      <td>
      <button type="button" class="btn btn-success">Verify</button>
      <button type="button" class="btn btn-danger">Discard</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>T-shirt women</td>
      <td>10/11/2023</td>
      <td><button type="button" class="btn btn-success">Verify</button>
      <button type="button" class="btn btn-danger">Discard</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Shoe-sports</td>
      <td>11/11/2023</td>
      <td><button type="button" class="btn btn-success">Verify</button>
      <button type="button" class="btn btn-danger">Discard</button></td>
    </tr>
  </tbody>
</table>
   </>
  )
}

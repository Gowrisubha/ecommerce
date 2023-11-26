import React from "react";
import { Footer, Navbar } from "../components";
const ProductVerificationPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Verify your Product</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Product name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your product name"
                  required
                />
              </div>
              
              <div class="form my-3">
                <label for="Email">Purchase Details</label>
                <textarea
                  rows={3}
                  class="form-control"
                  id="Purchase_det"
                  placeholder="Enter your purchase details"
                  required
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Description</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your product description"
                  required
                />
              </div>
              <div class="form mb-3">
              <label for="Image">Upload product image</label>
             <input type="file" class="form-control" aria-label="file example" required/>
             <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>
              <div className="text-center">
              <a href="/" class="btn btn-dark">Send</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductVerificationPage;

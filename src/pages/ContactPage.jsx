import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Report a product</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div class="form my-3">
                <label for="Email">Product ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="Email"
                  placeholder="XXXXAB001"
                  required
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Description</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Explain why this product is fake"
                  required
                />
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

export default ContactPage;

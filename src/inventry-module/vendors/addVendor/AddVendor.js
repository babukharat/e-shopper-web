import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../Database/DBService";

function AddVendor() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getRegisterUser = (userObj) => {
    registerUser(userObj);
    reset();
  };
  return (
    <>
      <div className="container">
        <h2 className="text-primary">Add Vendors</h2>
        <div className="row col-md-3">
          <form onSubmit={handleSubmit(getRegisterUser)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                {...register("name", {
                  required: "This Field is Required...",
                })}
              />
              <h6>{errors.name?.message}</h6>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                {...register("mobile", {
                  required: "This Field is required...",
                  pattern: {
                    value: /^[6789]{1}[0-9]{9}$/,
                    message: "Invalid Mob Number!",
                  },
                })}
              />
              <h6>{errors.mobile?.message}</h6>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  required: "This Field is Required...",
                })}
              />
              <h6>{errors.name?.message}</h6>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                {...register("add", {
                  required: "This Field is Required...",
                })}
              />
              <h6>{errors.add?.message}</h6>
            </div>
            <div className="mb-3 text-center">
              <input
                type="submit"
                className="btn btn-outline-success"
                value="Register Vendor"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVendor;

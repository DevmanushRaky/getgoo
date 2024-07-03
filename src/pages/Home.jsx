import  { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TbCameraPlus } from "react-icons/tb";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    houseNo: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    aadharFront: null,
    aadharBack: null,
    image: null,
  });

  const fileInputRef = useRef(null);
  const fileInputRefFront = useRef(null);
  const fileInputRefBack = useRef(null);

  const handleButtonClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleRemoveImage = (name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/vehicle");
  };

  return (
    <>
      <div className="container-fluid container-hero pb-5">
        <div className="row">
          <div className="col-md-6 pt-3 col-sm-12 col-xs-12">
            <img src="./assets/main1.png" className="first-img" alt="First" />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="./assets/main2.png" className="second-img" alt="Second" />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        className="container-fluid pb-5"
        style={{ marginTop: "15rem", backgroundColor: "#FBF9F9" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className='home-text'>
            <p className="py-3">
              Thank you for choosing to register with us. By filling out this
              form, you are taking the first step towards joining our community
              of cab drivers, cab owners, and vehicle rental partners.
            </p>
            <p className="py-1">Please read the following carefully:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {/* Owner Information form */}
            <form onSubmit={handleSubmit} className="container mt-4">
              <div className="mb-3">
                <div
                  style={{
                    height: 155,
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    border: "1px dotted #C7C7C7",
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 10,
                    }}
                  >
                    <TbCameraPlus />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      id="uploadButton"
                      type="button"
                      style={{
                        height: 37,
                        width: 105,
                        borderRadius: 10,
                        backgroundColor: "#EBEBEB",
                        border: "none",
                      }}
                      onClick={() => handleButtonClick(fileInputRef)}
                    >
                      Upload
                    </button>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      ref={fileInputRef}
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    {formData.image && (
                      <div
                        style={{
                          marginLeft: 10,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span>{formData.image.name}</span>
                        <button
                          type="button"
                          style={{ marginLeft: 5 }}
                          onClick={() => handleRemoveImage("image")}
                        >
                          X
                        </button>
                      </div>
                    )}
                    <p>Accepts images (.jpeg, .png, .jpg format)</p>
                  </div>
                </div>
                <p>
                  <b>
                    Upload Photo<sup className="text-danger">*</sup>
                  </b>
                  &nbsp;&nbsp;{" "}
                  <span style={{ color: "#A1A1A1", fontSize: 12 }}>
                    Max Size 10 MB.
                  </span>
                </p>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Your Email (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <p>
                  <b>
                    ADDRESS<sup className="text-danger">*</sup>
                  </b>
                </p>
                <input
                  type="text"
                  className="form-control"
                  name="houseNo"
                  placeholder="House No., Flat No., Street Name, Society Name"
                  value={formData.houseNo}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      placeholder="Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      <b>
                        PHONE NUMBER<sup className="text-danger">*</sup>
                      </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Alternate Phone Number</b>
                      &nbsp;&nbsp;
                      <span style={{ color: "#A1A1A1", fontSize: 12 }}>
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="alternatePhoneNumber"
                      value={formData.alternatePhoneNumber}
                      onChange={handleChange}
                      placeholder="+91"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <p>
                      <b>
                        UPLOAD AADHAR<sup className="text-danger">*</sup>
                      </b>
                      &nbsp;&nbsp;
                      <span style={{ color: "#A1A1A1", fontSize: 12 }}>
                        max size 5mb.
                      </span>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="form-label">
                        <b>Front Photo</b>
                      </label>
                      <button
                        type="button"
                        className="upload-buttons"
                        onClick={() => handleButtonClick(fileInputRefFront)}
                      >
                        UPLOAD
                      </button>
                      <input
                        type="file"
                        className="form-control"
                        name="aadharFront"
                        ref={fileInputRefFront}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <div className="col-md-4">
                        {formData.aadharFront && (
                          <div
                            style={{
                              marginLeft: 10,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              border: "1px solid #A1A1A1",
                              padding: "5px 25px",
                            }}
                          >
                            <span>{formData.aadharFront.name}</span>
                            <button
                              type="button"
                              style={{
                                marginLeft: 5,
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => handleRemoveImage("aadharFront")}
                            >
                              X
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="form-label">
                        <b>Back Photo</b>
                      </label>

                      <button
                        type="button"
                        className="upload-buttons"
                        onClick={() => handleButtonClick(fileInputRefBack)}
                      >
                        UPLOAD
                      </button>
                      <input
                        type="file"
                        className="form-control"
                        name="aadharBack"
                        ref={fileInputRefBack}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <div className="col-md-4">
                        {formData.aadharBack && (
                          <div
                            style={{
                              marginLeft: 10,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              border: "1px solid #A1A1A1",
                              padding: "5px 25px",
                            }}
                          >
                            <span>{formData.aadharBack.name}</span>
                            <button
                              type="button"
                              style={{
                                marginLeft: 5,
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                              onClick={() => handleRemoveImage("aadharBack")}
                            >
                              X
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="next-btn">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

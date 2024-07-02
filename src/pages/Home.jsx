import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    houseNo: '',
    city: '',
    state: '',
    pincode: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    aadharFront: null,
    aadharBack: null,
    image: null,
  });

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
    navigate('/vehicle');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  return (
    <>
      <div className="container-fluid home-img">
        <div className="row">
          <div className="col-md-6">
            <img src="./assets/main1.png" className="img-fluid" alt="First" />
          </div>
          <div className="col-md-6">
            <img src="./assets/main2.png" className="img-fluid" alt="Second" />
          </div>
        </div>
      </div>

      <div className="container">
        <p className="py-3">
          Thank you for choosing to register with us. By filling out this form,
          you are taking the first step towards joining our community of cab
          drivers, cab owners, and vehicle rental partners.
        </p>
        <p className="py-3">Please read the following carefully:</p>
        {/* Owner Information form */}
        <form onSubmit={handleSubmit} className="container my-4">
          <div className="file-input-container">
            <input
              type="file"
              className="file-input"
              name="image"
              onChange={handleImageChange}
            />
            <div className="top-img-overlay">
              <FaCamera className='camera-icon' />
              <p className='my-3'><span className="upload-img ">UPLOAD </span></p>
              <p className="dull-text">Accepts images (.jpeg, .png, .jpg format)</p>
              {formData.image && (
                <p className="image-dimensions">
                  {formData.image.name}
                </p>
              )}
            </div>
          </div>

          <p className='py-2 input-name'>Upload Photo<span className="dull-text"> (max size 10mb)</span></p>

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
            <p className='input-name'>ADDRESS</p>
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
                <label className="form-label input-name">Phone Number (+91)</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label input-name">Alternate Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="alternatePhoneNumber"
                  value={formData.alternatePhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <p className='input-name'>UPLOAD AADHAR <span className='dull-text'> (max size 10mb) </span></p>
                <div className="file-upload-wrapper">
                  <div className="file-upload-container">
                  <label className="form-label input-name">Front Photo</label>
                    <div className="file-input-wrapper">
                      <input
                        type="file"
                        className="upload-input"
                        name="aadharFront"
                        onChange={handleChange}
                      />
                      <div className="overlay">
                        <span className="upload-common-img">UPLOAD</span>
                      </div>
                    </div>
                    {formData.aadharFront && (
                      <div className="file-info">
                        <span>{formData.aadharFront.name}</span>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => handleRemoveImage('aadharFront')}
                        >
                          x
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="file-upload-wrapper">
                  <div className="file-upload-container">
                <label className="form-label input-name">Back Photo</label>
                    <div className="file-input-wrapper">
                      <input
                        type="file"
                        className="upload-input"
                        name="aadharBack"
                        onChange={handleChange}
                      />
                      <div className="overlay">
                        <span className="upload-common-img">UPLOAD</span>
                      </div>
                    </div>
                    {formData.aadharBack && (
                      <div className="file-info">
                        <span>{formData.aadharBack.name}</span>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => handleRemoveImage('aadharBack')}
                        >
                          x
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='next-btn'>
            <button type="submit" className="btn btn-primary px-5 py-2">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;

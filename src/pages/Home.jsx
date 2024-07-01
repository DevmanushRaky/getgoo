import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit={handleSubmit} className="container mt-4">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleChange}
            />
            <p>Upload Photo <span> (max size 10mb) </span></p>
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
            <p>ADDRESS</p>
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
                <label className="form-label">Phone Number (+91)</label>
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
                <label className="form-label">Alternate Phone Number</label>
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
            <div className="col-md-6">
              <div className="mb-3">
                <p>UPLOAD AADHAR <span> (max size 10mb) </span></p>
                <label className="form-label">Front Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="aadharFront"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Back Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="aadharBack"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              {formData.aadharFront && (
                <div className="mb-3">
                  {/*   <p>{formData.aadharFront.name}</p> */}
                  <img
                    src={URL.createObjectURL(formData.aadharFront)}
                    alt="Aadhar Front"
                    className="img-thumbnail"
                  />
                  <button
                    type="button"
                    className="btn btn-danger mt-2"
                    onClick={() => handleRemoveImage('aadharFront')}
                  >
                    Delete Front
                  </button>
                </div>
              )}
              {formData.aadharBack && (
                <div className="mb-3">
                  {/*   <p>{formData.aadharBack.name}</p> */}
                  <img
                    src={URL.createObjectURL(formData.aadharBack)}
                    alt="Aadhar Back"
                    className="img-thumbnail"
                  />
                  <button
                    type="button"
                    className="btn btn-danger mt-2"
                    onClick={() => handleRemoveImage('aadharBack')}
                  >
                    Delete Back
                  </button>
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;

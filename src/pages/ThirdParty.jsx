import { useRef, useState } from "react";

export const ThirdParty = () => {
  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleFuelType: "",
    vehicleInsuranceType: "",
    engineType: "",
    luggageType: "",
    chassisNumber: "",
    drivingLicence: null,
    carRegistration: null,
    carInsurance: null,
  });

  const fileInputRefDrivingLicence = useRef(null);
  const fileInputRefCarRegistration = useRef(null);
  const fileInputRefCarInsurance = useRef(null);

  const handleButtonClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleRemoveImage = (name) => {
    setFormData({
      ...formData,
      [name]: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Vehicle Type<sup className="text-danger">*</sup>
            </label>
            <select
              className="form-control"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="SUV">SUV</option>
              <option value="UV">UV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Vehicle Number<sup className="text-danger">*</sup>
            </label>

            <input
              type="text"
              className="form-control"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Vehicle Fuel Type<sup className="text-danger">*</sup>
            </label>
            <select
              type="text"
              className="form-control"
              name="vehicleFuelType"
              value={formData.vehicleFuelType}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="SUV">Petrol</option>
              <option value="UV">EV</option>
              <option value="Van">CNG</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Vehicle Model<sup className="text-danger">*</sup>
            </label>

            <select
              className="form-control"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="SUV">Maruti suzki Swift</option>
              <option value="UV">TATA</option>
              <option value="Van">BOLERO</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Engine Type<sup className="text-danger">*</sup>
            </label>

            <select
              type="text"
              className="form-control"
              name="engineType"
              value={formData.engineType}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="BS1">BS1</option>
              <option value="BS2">BS2</option>
              <option value="BS3">BS3</option>
              <option value="BS4">BS</option>
              <option value="BS5">BS5</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Insurance Type<sup className="text-danger">*</sup>
            </label>

            <select
              className="form-control"
              name="vehicleInsuranceType"
              value={formData.vehicleInsuranceType}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="SUV">First Party</option>
              <option value="UV">Second Party</option>
              <option value="Van">Third Party</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Chassis Number<sup className="text-danger">*</sup>
            </label>

            <input
              type="text"
              className="form-control"
              name="chassisNumber"
              value={formData.chassisNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              Luggage Type<sup className="text-danger">*</sup>
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="No. of bag"
              name="luggageType"
              value={formData.luggageType}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Documents  */}
      {/* Driving Licence */}
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <p>
              <b>UPLOAD DOCUMENT</b>
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label className="form-label">
                <b>Driving Licence</b>
                <sup className="text-danger">*</sup>
              </label>
              <button
                type="button"
                className="upload-buttons"
                onClick={() => handleButtonClick(fileInputRefDrivingLicence)}
              >
                UPLOAD
              </button>
              <input
                type="file"
                className="form-control"
                name="drivingLicence"
                ref={fileInputRefDrivingLicence}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <div className="col-md-4">
                {formData.drivingLicence && (
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
                    <span>{formData.drivingLicence.name}</span>
                    <button
                      type="button"
                      style={{
                        marginLeft: 5,
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => handleRemoveImage("drivingLicence")}
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

      {/* Car Registration */}
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label className="form-label">
                <b>Car Registration</b>
                <sup className="text-danger">*</sup>
              </label>
              <button
                type="button"
                className="upload-buttons"
                onClick={() => handleButtonClick(fileInputRefCarRegistration)}
              >
                UPLOAD
              </button>
              <input
                type="file"
                className="form-control"
                name="carRegistration"
                ref={fileInputRefCarRegistration}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <div className="col-md-4">
                {formData.carRegistration && (
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
                    <span>{formData.carRegistration.name}</span>
                    <button
                      type="button"
                      style={{
                        marginLeft: 5,
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => handleRemoveImage("carRegistration")}
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

      {/* Car Insurance */}
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label className="form-label">
                <b>Car Insurance </b> <sup className="text-danger">*</sup>
              </label>
              <button
                type="button"
                className="upload-buttons"
                onClick={() => handleButtonClick(fileInputRefCarInsurance)}
              >
                UPLOAD
              </button>
              <input
                type="file"
                className="form-control"
                name="carInsurance"
                ref={fileInputRefCarInsurance}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <div className="col-md-4">
                {formData.carInsurance && (
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
                    <span>{formData.carInsurance.name}</span>
                    <button
                      type="button"
                      style={{
                        marginLeft: 5,
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => handleRemoveImage("carInsurance")}
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
    </form>
  );
};

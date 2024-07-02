import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const VehicleDetails = () => {
    const [vehicleData, setVehicleData] = useState({
        vehicleModel: '',
        vehicleNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
    };

    return (
        <>
            <div className="container my-3">

                <div className="d-flex align-items-center mb-4">
                    <NavLink to="/" className=" d-flex justify-content-center text-decoration-none">
                        <FaArrowLeftLong className='left-arrow mx-2'/>
                    </NavLink>
                    <h1 className="vehicle-heading">Vehicle Information</h1>
                </div>
                <form onSubmit={handleSubmit} className="container mt-4">
                    <div className="mb-3">
                        <label className="form-label">Vehicle Model</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleModel"
                            value={vehicleData.vehicleModel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Vehicle Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="vehicleNumber"
                            value={vehicleData.vehicleNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default VehicleDetails;

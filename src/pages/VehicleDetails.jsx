import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Agency } from './Agency';
import { ThirdParty } from './ThirdParty';
import { Self } from './Self';
import { FaPlus } from "react-icons/fa";


const VehicleDetails = () => {
    const [activeForm, setActiveForm] = useState("agency"); // Default active form

    const handleFormChange = (formType) => {
        setActiveForm(formType);
    };


    return (
        <>
            <div className="container my-3">

                <div className="d-flex align-items-center mb-4">
                    <NavLink to="/" className=" d-flex justify-content-center text-decoration-none">
                        <FaArrowLeftLong className='left-arrow' />
                    </NavLink>
                    <h1 className="vehicle-heading">Vehicle Information</h1>
                </div>

                <div className="toggle-forms-container">
                    <div className="toggle-buttons">
                        <button
                            className={activeForm === "agency" ? "active" : ""}
                            onClick={() => handleFormChange("agency")}
                        >
                            Agency
                        </button>
                        <button
                            className={activeForm === "thirdParty" ? "active" : ""}
                            onClick={() => handleFormChange("thirdParty")}
                        >
                            Third Party
                        </button>
                        <button
                            className={activeForm === "self" ? "active" : ""}
                            onClick={() => handleFormChange("self")}
                        >Self
                        </button>
                    </div>

                    <div className="form-container">
                        <div className="form-main">

                            {activeForm === "agency" && <Agency />}
                            {activeForm === "thirdParty" && <ThirdParty />}
                            {activeForm === "self" && <Self />}

                        </div>
                        <div className="add-new-car">
                            <button className='add-car-btn' > <FaPlus className='add-car-icon' /> ADD NEW CAR </button>
                        </div>

                        <div className="submit-btn">
                            <button type="submit" className="next-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VehicleDetails;

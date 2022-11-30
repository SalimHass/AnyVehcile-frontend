import {useSelector} from "react-redux"
import {selectCurrentToken, selectCurrentUser} from "./authSlice"
import React from "react";
import { useRef, useState, useEffect } from "react";
import {useNewRequestMutation, useUserRequestListQuery} from "../request/requestSlice";
import jwt_decode from "jwt-decode";
import './Welcome.css'

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = jwt_decode(useSelector(selectCurrentToken))
    const user_id = token.user_id
    const userRef = useRef();
    const errRef = useRef();
    const [serviceRequest, setServiceRequest] = useState("");
    const [isUrgent, setIsUrgent] = useState(false);
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState(2022);
    const [errMsg, setErrMsg] = useState("");
    const [newRequest, {isNewLoading}] = useNewRequestMutation();
    const {data, error , isGetRequestLoading} = useUserRequestListQuery();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await newRequest({
                user : user_id,
                service_request: serviceRequest,
                is_urgent: isUrgent,
                car_model: carModel,
                car_year: carYear,

            }).unwrap();
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg("No Server Response");
            } else {
                setErrMsg("New Request Failed");
            }
            errRef.current.focus();
        }
    };
    const handleServiceRequestInput = (e) => setServiceRequest(e.target.value);
    const handleUrgentInput = (e) => setIsUrgent(!isUrgent);
    const handleCarModelInput = (e) => setCarModel(e.target.value);
    const handleCarYearInput = (e) => setCarYear(parseInt(e.target.value));


    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    console.log(data)
    const dtable= <table>
        <tr>
            <th>Status</th>
            <th>Request</th>
            <th>Car Model</th>
            <th>Car year</th>
            <th>Urgent</th>
        </tr>
        {data?.map(e=> {

return (
    <tr>
        <td>{e.service_status_display}</td>
        <td>{e.service_request}</td>
        <td>{e.car_model}</td>
        <td>{e.car_year}</td>
        {e.is_urgent? <td>Urgent</td>: <td>Not Urgent</td>}
    
    </tr>

)})}
    </table>


    return (
       

        
        <section className="welcome">
            <h1>{welcome}</h1>
            <div>{dtable}</div>
            <div>
                <section className="service_request">
                    <div className="service-container">
                        <form className="service-form" onSubmit={handleSubmit}>
                            <label htmlFor="serviceRequest">Service Request:</label>
                            <input
                                type="text"
                                id="serviceRequest"
                                ref={userRef}
                                value={serviceRequest}
                                onChange={handleServiceRequestInput}
                                required
                            />
                            <label htmlFor="carModel">Car Model:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={carModel}
                                onChange={handleCarModelInput}
                                required
                            />
                            <label htmlFor="carYear">Car Year:</label>
                            <input
                                type="number"
                                id="lastname"
                                value={carYear}
                                onChange={handleCarYearInput}
                                min="1985" max="2023"
                                required
                            />
                            <label htmlFor="is_urgent">Is Urgent:</label>
                            <input
                                type="checkBox"
                                id="is_urgent"
                                value={isUrgent}
                                onChange={handleUrgentInput}


                            />


                            <button className="newreq-btn">New Request</button>
                        </form>
                    </div>
                </section>

            </div>

            <div>New Request</div>


        </section>
        
    )
}
export default Welcome
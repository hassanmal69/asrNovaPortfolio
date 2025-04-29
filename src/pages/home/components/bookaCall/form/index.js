import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ButtoninBookaCall } from "../../../../../components/buttonForHero";
import '../BookaCall.css';
const FormBookacall = () => {
    const formFields = [
        { name: "agencyName", type: "text", placeholder: "Enter agency name" },
        { name: "email", type: "email", placeholder: "Enter your email" },
        { name: "phoneNumber", type: "text", placeholder: "Enter your phone number" },
        { name: "region", type: "select", placeholder: "Select your region" },
        { name: "date", type: "date", placeholder: "Select a date" },
        { name: "time", type: "time", placeholder: "Select a time" },
        { name: "projectDetails", type: "textarea", placeholder: "Your project details..." },
    ];
    const regions = ["North America", "Europe", "Asia", "Australia", "Africa", "South America"];
    const today = new Date().toISOString().split("T")[0];
    const [inputValue, setInputValue] = useState({
        agencyName: "",
        email: "",
        phoneNumber: "",
        region: "",
        date: "",
        time: "",
        projectDetails: ""
    });
    const changingValuesInInput = (e) => {
        const { name, value } = e.target;
        setInputValue((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { agencyName, date, email, projectDetails, phoneNumber, time, region } = inputValue;
        if (!agencyName || !date || !email || !projectDetails || !phoneNumber || !time || !region) {
            alert("Enter complete data first");
            return;
        }
        try {
            const res = await fetch("https://v1.nocodeapi.com/hassan321/google_sheets/OItdysVjWHIFJNqV?tabId=Sheet1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([Object.values(inputValue)]),
            });
            if (res.ok) {
                alert("Data sent successfully!");
            }
            else {
                alert("Failed to send data.");
            }
        }
        catch (error) {
            alert("Can't connect to server, try again kindly!");
        }
    };
    return (_jsxs("section", { className: "flex flex-col gap-10", children: [_jsx("form", { method: "post", className: "flex flex-wrap field-wrapper", children: formFields.map((field, index) => (field.type === "textarea" ? (_jsx("textarea", { name: field.name, rows: 4, required: true, value: inputValue[field.name], onChange: changingValuesInInput, placeholder: field.placeholder, className: "border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields" }, index)) : field.type === "select" ? (_jsxs("select", { name: field.name, required: true, value: inputValue[field.name], onChange: changingValuesInInput, className: "border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields", children: [_jsx("option", { value: "", disabled: true, children: "Select your region" }), regions.map((region, idx) => (_jsx("option", { value: region, children: region }, idx)))] }, index)) : (_jsx("input", { type: field.type, name: field.name, required: true, value: inputValue[field.name], onChange: changingValuesInInput, placeholder: field.placeholder, className: "border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields", ...(field.type === "date" ? { min: today } : {}) }, index)))) }), _jsx("div", { onClick: handleSubmit, children: _jsx(ButtoninBookaCall, { text: "Book a Call" }) })] }));
};
export default FormBookacall;

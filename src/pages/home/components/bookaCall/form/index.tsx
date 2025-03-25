import { useState } from "react";
// import { motion } from 'framer-motion';
import { ButtoninBookaCall } from "../../buttonForHero";
import '../BookaCall.css'
const FormBookacall = () => {
    const formFields = [
        { name: "agencyName", type: "text", placeholder: "Enter agency name" },
        { name: "email", type: "email", placeholder: "Enter your email" },
        { name: "phoneNumber", type: "text", placeholder: "Enter your phone number" },
        { name: "date", type: "date", placeholder: "daate daal de" },
        { name: "time", type: "time", placeholder: "time enter kr" },
        { name: "message", type: "text", placeholder: "Enter your message" },
    ];
    const today = new Date().toISOString().split("T")[0];
    const [inputValue, setinputValue] = useState({
        agencyName: "",
        email: "",
        phoneNumber: "",
        date: "",
        time: "",
        message: ""
    })
    const changingValuesInInput = (e) => {
        const { name, value } = e.target
        setinputValue((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { agencyName, date, email, message, phoneNumber, time } = inputValue;

        // Check if any field is empty
        if (!agencyName || !date || !email || !message || !phoneNumber || !time) {
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
            } else {
                alert("Failed to send data.");
            }
        } catch (error) {
            alert("can't connect to server try again kindly!")
        }
    }
    return (
        <section className="flex flex-col gap-10">
            <form method="post" className="flex flex-wrap w-2/3 gap-10">
                {formFields.map((field, index) => (
                    <input
                        key={index}
                        type={field.type}
                        name={field.name}
                        required
                        value={inputValue[field.name]}
                        onChange={changingValuesInInput}
                        placeholder={field.placeholder}
                        className="w-1/3 border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500"
                        {...(field.type === "date" ? { min: today } : {})}
                    />
                ))}
            </form>
            <div onClick={handleSubmit}>
                <ButtoninBookaCall text="Book a Call" />
            </div>
        </section>
    );
};

export default FormBookacall;
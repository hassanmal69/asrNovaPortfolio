import { useState } from "react";
import { ButtoninBookaCall } from "../../../../../components/buttonForHero";
import '../BookaCall.css';

interface FormFields {
    agencyName: string;
    email: string;
    phoneNumber: string;
    region: string;
    date: string;
    time: string;
    projectDetails: string;
}

const FormBookacall = () => {
    const formFields: { name: keyof FormFields; type: string; placeholder: string }[] = [
        { name: "agencyName", type: "text", placeholder: "Enter agency name" },
        { name: "email", type: "email", placeholder: "Enter your email" },
        { name: "phoneNumber", type: "text", placeholder: "Enter your phone number" },
        { name: "region", type: "select", placeholder: "Select your region" },
        { name: "date", type: "date", placeholder: "Select a date" },
        { name: "time", type: "time", placeholder: "Select a time" },
        { name: "projectDetails", type: "textarea", placeholder: "Your project details..." },
    ];
    
    const regions: string[] = ["North America", "Europe", "Asia", "Australia", "Africa", "South America"];
    
    const today: string = new Date().toISOString().split("T")[0];
    const [inputValue, setInputValue] = useState<FormFields>({
        agencyName: "",
        email: "",
        phoneNumber: "",
        region: "",
        date: "",
        time: "",
        projectDetails: ""
    });

    const changingValuesInInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputValue((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
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
            } else {
                alert("Failed to send data.");
            }
        } catch (error) {
            alert("Can't connect to server, try again kindly!");
        }
    };

    return (
        <section className="flex flex-col gap-10">
            <form method="post" className="flex flex-wrap field-wrapper">
                {formFields.map((field, index) => (
                    field.type === "textarea" ? (
                        <textarea
                            key={index}
                            name={field.name}
                            rows={4}
                            required
                            value={inputValue[field.name]}
                            onChange={changingValuesInInput}
                            placeholder={field.placeholder}
                            className="border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields"
                        />
                    ) : field.type === "select" ? (
                        <select
                            key={index}
                            name={field.name}
                            required
                            value={inputValue[field.name]}
                            onChange={changingValuesInInput}
                            className="border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields"
                        >
                            <option value="" disabled>Select your region</option>
                            {regions.map((region, idx) => (
                                <option key={idx} value={region}>{region}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            key={index}
                            type={field.type}
                            name={field.name}
                            required
                            value={inputValue[field.name]}
                            onChange={changingValuesInInput}
                            placeholder={field.placeholder}
                            className="border-0 !border-b-2 bg-transparent outline-0 text-gray-100 border-gray-500 fields"
                            {...(field.type === "date" ? { min: today } : {})}
                        />
                    )
                ))}
            </form>
            <div onClick={handleSubmit}>
                <ButtoninBookaCall text="Book a Call" />
            </div>
        </section>
    );
};

export default FormBookacall;

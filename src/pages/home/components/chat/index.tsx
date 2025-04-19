import React, { useState } from 'react'
import { stringSimilarity } from "string-similarity-js";
import FaqData from '../../../../data/chatdata.json'

const ChatSystem = () => {
    const [msg, setMsg] = useState("")
    const [similar, setSimilar] = useState(null)

    const handleCheck = () => {
        let bestScore = 0;
        let bestMatch = null;

        FaqData.faqs.forEach((f) => {
            const similarity = stringSimilarity(msg.toLowerCase(), f.question.toLowerCase())
            if (similarity > bestScore) {
                bestScore = similarity;
                bestMatch = {
                    ...f,
                };
            }
        });

        setSimilar(bestMatch);
    }

    return (
        <div>
            <input
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button onClick={handleCheck}>ask</button>

            {similar && (
                <div>
                    <ul>
                        <li> {similar.answer}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ChatSystem

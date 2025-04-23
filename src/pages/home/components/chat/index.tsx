import React, { useState } from 'react'
import { stringSimilarity } from "string-similarity-js";
import FaqData from '../../../../data/chatdata.json'
import chatMan from '../../../../assets/chatman.png'
const ChatSystem = () => {
    const [msg, setMsg] = useState("")
    const [similar, setSimilar] = useState(null)
    const [show, setShow] = useState(false)
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
    const toggleState = () => {
        setShow(prev => !prev)
    }
    return (
        <section className='absolute w-full flex justify-end'>
            <div className='absolute z-50 flex flex-col w-full justify-center h-full items-end'>
                <button onClick={toggleState}>Chat Support</button>
                {show && (
                    <div className="">
                        <img src={chatMan} className='h-[250px]' />
                        <input
                            className='border-2 border-amber-50 left-0'
                            type="text"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            placeholder='uaaaa'
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

                )}
            </div>

        </section >

    )
}

export default ChatSystem

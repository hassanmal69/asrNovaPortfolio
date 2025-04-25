import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./animated-modal";
import ChatSystem from './index.tsx'
import { motion } from "motion/react";
import React, { useState } from 'react'
import { stringSimilarity } from "string-similarity-js";
import FaqData from '../../../../data/chatdata.json'
import chatMan from '../../../../assets/chatman.png'
import './model.css'
export function AnimatedModalDemo() {
  const [msg, setMsg] = useState("")
  const [similar, setSimilar] = useState("")
  const [ask, setAsk] = useState(false)
  const handleCheck = () => {
    let bestScore = 0;
    let bestMatch = null;
    setAsk(true)
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
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <div className=" bottom-8 right-30 z-500000">
          <ModalTrigger className=" flex justify-center group/modal-btn">
            <button>chat support</button>
          </ModalTrigger>
        </div>
        <ModalBody>
          <ModalContent>
            <div className="flex flex-row-reverse h-full w-full">
              <motion.img src={chatMan} className='h-[270px]'
                animate={{
                  rotate: [0, 10, -10, 10, -10, 0], // waving effect
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0,
                }} />
              <div className="relative h-full w-full flex justify-end gap-2 items-end">
                <input
                  className='border-2 border-amber-50 left-0 rounded-2xl !p-2 !pb-0'
                  type="text"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button onClick={handleCheck} className="">Send</button>
                {ask ? (
                  similar ? (
                    <div className="absolute h-full w-full flex items-center justify-center pointer-events-none">
                      <div className="bg-gray-800 w-full tooltip">
                        <ul className="w-full">
                          <li className="w-full h-full text-xs">{similar.answer}</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute h-full w-full flex items-center justify-center pointer-events-none">
                      <div className="bg-gray-800 w-full tooltip">
                        <ul className="w-full">
                          <li className="w-full h-full text-xs">Sorry, I couldn't find an answer.</li>
                        </ul>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="absolute h-full w-full flex items-center justify-center pointer-events-none">
                    <div className="bg-gray-800 w-full tooltip">
                      <ul className="w-full">
                        <li className="w-full h-full text-xs">You are not a drop in the ocean. You are the entire ocean, in a drop. Ask away.</li>
                      </ul>
                    </div>
                  </div>
                )}

              </div>

            </div>


          </ModalContent>

        </ModalBody>
      </Modal>
    </div>
  );
}


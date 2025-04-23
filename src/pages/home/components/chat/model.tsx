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
export function AnimatedModalDemo() {
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
              <img src={chatMan} className='h-[250px]' />
              <div className="h-full w-full flex justify-end items-end">
                <input
                  className='border-2 border-amber-50 left-0'
                  type="text"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button onClick={handleCheck}>ask</button>
              {similar && (
                <div className=" h-full w-full flex items-center justify-center">
                  <ul>
                    <li> {similar.answer}</li>
                  </ul>
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


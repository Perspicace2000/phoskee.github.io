import React, { useState, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { REGEXP_ONLY_CHARS } from "input-otp";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

export default function CasellarioAlfanumerico() {
  const [randomChars, setRandomChars] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showRandomChars, setShowRandomChars] = useState(false);
  const [timeoutValue, setTimeoutValue] = useState(1000); // valore di default: 1000 ms
  const [numChars, setNumChars] = useState(4); // valore di default: 4 caratteri

  // Genera una nuova sequenza di caratteri casuali
  const generateNewChars = () => {
    const chars = [];
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < numChars; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      chars.push(possibleChars.charAt(randomIndex));
    }
    return chars.join("");
  };

  // Mostra i caratteri casuali per il timeout specificato
  useEffect(() => {
    let timeout;
    if (showRandomChars) {
      const randomChars = generateNewChars();
      setRandomChars(randomChars);
      timeout = setTimeout(() => {
        setShowRandomChars(false);
      }, timeoutValue);
    }
    return () => clearTimeout(timeout);
  }, [showRandomChars, timeoutValue, numChars]);

  // Verifica le lettere inserite
  const verifyInput = () => {
    let correctCount = 0;
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === randomChars[i]) {
        correctCount++;
      }
    }
    alert(`Hai indovinato ${correctCount} caratteri.`);
  };

  // Genera una nuova sequenza di caratteri casuali e mostra
  const handleNewSequence = () => {
    setShowRandomChars(true);
    setInputValue("");
  };

  return (
    <div className="border border-red-700 m-2 min-h-svh">
      <div className="flex-col place-items-center mx-auto border border-blue-500 w-fit">
        <div className="p-2">
          <InputOTP
            inputMode="text"
            maxLength={9}
            value={showRandomChars ? randomChars : ""}
            disabled={showRandomChars}
          >
            <InputOTPGroup className="grid grid-cols-3 gap-2 rounded-xl bg-pink-200 p-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} className="bg-white" />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="p-2">
          <InputOTP
            inputMode="text"
            maxLength={9}
            pattern={REGEXP_ONLY_CHARS}
            value={inputValue}
            onChange={(e) => setInputValue(e.toUpperCase())}
          >
            <InputOTPGroup className="grid grid-cols-3 gap-2 rounded-xl bg-pink-200 p-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} className="bg-white" />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="p-2">
          <Label htmlFor="timeoutInput">Timeout (ms):</Label>
          <Input
            id="timeoutInput"
            type="number"
            value={timeoutValue}
            onChange={(e) => setTimeoutValue(parseInt(e.target.value))}
          />
        </div>
        <div className="p-2">
          <Label htmlFor="numCharsInput">Numero di Caratteri:</Label>
          <Input
            id="numCharsInput"
            type="number"
            value={numChars}
            onChange={(e) => setNumChars(parseInt(e.target.value))}
          />
          <Button className="w-full my-2" onClick={verifyInput}>Verifica</Button>
          <Button className="w-full my-2" onClick={handleNewSequence}>Nuovo</Button>
        </div>
      </div>
    </div>
  );
}

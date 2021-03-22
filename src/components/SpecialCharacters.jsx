import { useState } from "react";

export function SpecialCharacters() {
  const [isTrue, setIsTrue] = useState(true);
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] !== "" && arguments[i].indexOf(" ") === -1) {
    } else {
      setIsTrue(false);
    }
  }
  return isTrue;
}

import { sentence } from "./sentence.js";
export function greet(name) {
  const text = sentence(name);
  return `
    Happy New Year !
   ${text}
   `;
}


import { sentence } from "./sentence.js";
import { log } from "./log.js";


export function greet(name) {
  const text = sentence(name);
  log();
  return `
    Happy New Year !!!！
    http://123.sankuai.com!
   ${text}
   `;
}

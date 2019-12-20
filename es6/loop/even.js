import {odd} from './odd';

var counter = 0;
export function even(n){
    counter ++;
    console.log(counter);
    
    return n == 0 || odd(n-1);
}

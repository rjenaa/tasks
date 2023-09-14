/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let celius: number = ((temperature - 32) * 5) / 9;
    return celius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum: number = 0;
    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
//https://www.typescriptlang.org/docs/handbook/2/basic-types.html is where I learned the .tUpperCase()
export function shout(message: string): string {
    return `${message.toUpperCase()}` + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let isQ: boolean;
    message.substring(message.length - 1) === "?"
        ? (isQ = true)
        : (isQ = false);
    return isQ;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let convert: boolean;
    word = word.toLowerCase();
    if (word === "yes") {
        convert = true;
    } else if (word == "no") {
        convert = false;
    } else {
        convert = null;
    }
    return convert;
}

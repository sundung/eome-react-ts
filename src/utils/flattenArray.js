// flattenArray.js
export default function flattenArray(arr) {
    const result = [];
    const stack = [...arr];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.unshift(next);
        }
    }
    return result;
}



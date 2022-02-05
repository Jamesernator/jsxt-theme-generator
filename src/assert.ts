
export default function assert(
    cond: boolean,
    message="Assertion Failed",
): asserts cond {
    if (!cond) {
        throw new Error(message);
    }
}

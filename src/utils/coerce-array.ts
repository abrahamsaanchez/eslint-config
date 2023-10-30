/**
 * Coerce the received value as an array.
 *
 * @param value
 */
export function coerceArray<T>(value: T | Array<T>): Array<T> {
    return Array.isArray(value)
        ? value
        : [
                value,
            ];
}

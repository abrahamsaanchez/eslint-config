/**
 * Return the default export of the module if is defined or the module.
 *
 * @param module
 */
export function interopDefault<T>(module: unknown): T {
    return ((<Record<string, unknown>>module).default || module) as T;
}

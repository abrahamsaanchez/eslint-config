/**
 * Rename the received rules from the received value to the received value.
 *
 * @param rules
 * @param from
 * @param to
 */
export function renameRules(rules: Record<string, unknown>, from: string, to: string): Record<string, unknown> {
    return Object.fromEntries(
        Object.entries(rules)
            .map(([
                key,
                value,
            ]) => {
                if (key.startsWith(from)) {
                    return [
                        to + key.slice(from.length),
                        value,
                    ];
                }

                return [
                    key,
                    value,
                ];
            }),
    );
}

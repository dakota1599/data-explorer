export function csvToArr(stringValue: string): [string[], unknown[]] {
    const [keys, ...rest] = stringValue
        .trim()
        .split("\n")
        .map((item: string) => item.split(","));

    const formedArr = rest.map((item: string[]) => {
        const object = {};
        keys.forEach((key, index) => {
            if (isNumeric(item.at(index))) {
                object[key] = Number(item.at(index));
                return;
            }

            object[key] = item.at(index);
        });
        return object;
    });

    return [keys, formedArr];
}

export function isNumeric(obj: any) {
    return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
}

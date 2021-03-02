// functions for filter global json


export const filterData = (key, value) => {
    return key.reduce((item, row) => {
        const groupBy = (row, keys) => {
            const [first, ...rest] = keys;

            if (!first) {
                return [row];
            }

            return {
                [row[first]]: groupBy(row, rest),
            };
        };
        item = concat(groupBy(row, value), item);

        return item;

    }, {});
};

const concat = (current, update) => {
    Object.keys(update).forEach((key) => {
        if (current.hasOwnProperty(key) &&
            typeof current[key] === 'object' &&
            !(current[key] instanceof Array)) {
            concat(current[key], update[key]);

        } else {
            current[key] = update[key];
        }
    });
    return current;

}

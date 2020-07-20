
const reverseDates = item => {
    let parts = item.date.split('.');
    return `${parts[1]}-${parts[0]}-${parts[2]}`;
};
const reverseDatesDots = item => {
    let parts = item.split('-');
    return { date: `${parts[1]}.${parts[0]}.${parts[2]}` };
};

function sort(items, ascending) {

    if (ascending) {
        return items
            .map(reverseDates)
            .sort((a, b) => {
                return new Date(a) - new Date(b);
            })
            .map(reverseDatesDots);
    } else {
        return items
            .map(reverseDates)
            .sort((a, b) => {
                return new Date(b) - new Date(a);
            })
            .map(reverseDatesDots);
    }
}
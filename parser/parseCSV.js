function parseCSV(data) {

    const lines = data.split("\n");
    lines.shift();

    const records = [];

    lines.forEach(line => {

        const parts = line.split(",");

        records.push({
            date: parts[0],
            month: parts[0].slice(0,7),
            sku: parts[1],
            unitPrice: Number(parts[2]),
            quantity: Number(parts[3]),
            totalPrice: Number(parts[4])
        });

    });

    return records;
}

module.exports = parseCSV;
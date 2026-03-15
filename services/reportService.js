function generateReports(records) {

    let totalSales = 0;

    const monthSales = new Map();
    const quantityMap = new Map();
    const revenueMap = new Map();

    records.forEach(r=>{

        totalSales += r.totalPrice;

        // Month sales
        if(!monthSales.has(r.month))
            monthSales.set(r.month,0);

        monthSales.set(
            r.month,
            monthSales.get(r.month) + r.totalPrice
        );

        // Quantity map
        if(!quantityMap.has(r.month))
            quantityMap.set(r.month,new Map());

        const qMap = quantityMap.get(r.month);

        qMap.set(
            r.sku,
            (qMap.get(r.sku) || 0) + r.quantity
        );

        // Revenue map
        if(!revenueMap.has(r.month))
            revenueMap.set(r.month,new Map());

        const rMap = revenueMap.get(r.month);

        rMap.set(
            r.sku,
            (rMap.get(r.sku) || 0) + r.totalPrice
        );

    });

    return {
        totalSales,
        monthSales,
        quantityMap,
        revenueMap
    };
}

module.exports = generateReports;
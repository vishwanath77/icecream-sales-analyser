function calculateGrowth(revenueMap) {

    const months = [...revenueMap.keys()].sort();

    const growthData = [];

    for(let i=1;i<months.length;i++){

        const prev = revenueMap.get(months[i-1]);
        const curr = revenueMap.get(months[i]);

        curr.forEach((rev,item)=>{

            if(prev.has(item)){

                const growth =
                ((rev - prev.get(item))/prev.get(item))*100;

                growthData.push({
                    item,
                    from: months[i-1],
                    to: months[i],
                    growth: growth.toFixed(2)
                });

            }

        });

    }

    return growthData;
}

module.exports = calculateGrowth;
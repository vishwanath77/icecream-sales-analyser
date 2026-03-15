function validateRecords(records) {

    const errors = [];

    records.forEach((r,index)=>{

        if(r.unitPrice * r.quantity !== r.totalPrice)
            errors.push(`Row ${index+2} price mismatch`);

        if(r.quantity < 1)
            errors.push(`Row ${index+2} quantity < 1`);

        if(r.unitPrice < 0)
            errors.push(`Row ${index+2} unit price < 0`);

        if(r.totalPrice < 0)
            errors.push(`Row ${index+2} total price < 0`);

        if(isNaN(Date.parse(r.date)))
            errors.push(`Row ${index+2} invalid date`);

    });

    return errors;
}

module.exports = validateRecords;
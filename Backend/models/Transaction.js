const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
    {
        amount: { type: Number, required: true },
        type: { type: String, enum: ['Income', 'Expenses'], required: true },
        item: { type: String, required: true, max: 50 },
        day: {type: Number},
        month: {type: Number},
        year: {type: Number},
    }
);

transactionSchema.set('toJSON', {
    transform: (doc, { __v, ...rest }, options) => rest
})

transactionSchema.pre("save", function(next) {
    let date = new Date();
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    next();
});

module.exports = model('Transaction', transactionSchema);

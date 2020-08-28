const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    username:{ type: String, required: true },
    description:{ type: String, rquired: true },
    distance: { type: Number, required: true },
    date: {type: Date, rquired: true},
}, {
    timestamps: true,
});

const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;
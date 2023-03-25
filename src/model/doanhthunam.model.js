import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        Nam: {
            type: Number,
            unique: true,
        },
        SoSanPham: Number,
        DoanhThu: Number,
    },
    { collection: 'doanhthunam' },
);

const doanhthunam = mongoose.model('doanhthunam', userSchema);

module.exports = doanhthunam;

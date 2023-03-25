import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        Thang: {
            type: Number,
            unique: true,
        },
        Nam: {
            type: Number,
            unique: true,
        },
        SoSanPham: Number,
        DoanhThu: Number,
    },
    { collection: 'doanhthuthang' },
);

const doanhthuthang = mongoose.model('doanhthuthang', userSchema);

module.exports = doanhthuthang;

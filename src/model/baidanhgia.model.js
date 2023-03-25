import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        MaUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        SoSao: Number,
        NoiDung: String,
    },
    { collection: 'baidanhgia' },
);

const baidanhgia = mongoose.model('baidanhgia', userSchema);

module.exports = baidanhgia;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        SoLuong: Number,
        Gia: Number,
        MaHoaDon: { type: mongoose.Schema.Types.ObjectId, ref: 'hoadon' },
    },
    { collection: 'chitiethoadon' },
);

const chitiethoadon = mongoose.model('chitiethoadon', userSchema);

export default chitiethoadon;

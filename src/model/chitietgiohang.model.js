import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        SoLuong: Number,
        Gia: Number,
        PhiVanChuyen: Number,
        MaGioHang: { type: mongoose.Schema.Types.ObjectId, ref: 'giohang' },
    },
    { collection: 'chitietgiohang' },
);

const chitietgiohang = mongoose.model('chitietgiohang', userSchema);

export default chitietgiohang;

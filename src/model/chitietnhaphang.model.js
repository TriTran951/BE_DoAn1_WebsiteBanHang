import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaDonNhap: { type: mongoose.Schema.Types.ObjectId, ref: 'nhaphang' },
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        TenSanPham: String,
        SoLuong: Number,
        DonGia: Number,
    },
    { collection: 'chitietnhaphang' },
);

const chitietnhaphang = mongoose.model('chitietnhaphang', userSchema);

module.exports = chitietnhaphang;

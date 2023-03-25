import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaLoaiSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'loaisanpham' },
        MaThuongHieu: { type: mongoose.Schema.Types.ObjectId, ref: 'thuonghieu' },
        HinhAnh: String,
        MoTa: String,
        SoLuongHangTon: Number,
        GiaBan: Number,
        TrangThai: String,
    },
    { collection: 'sanpham' },
);

const sanpham = mongoose.model('sanpham', userSchema);

module.exports = sanpham;

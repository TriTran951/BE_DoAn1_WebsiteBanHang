import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        TenPhienBan: String,
        HinhAnh: String,
        MoTa: String,
        GiaBan: Number,
        SoLuongHangTon: Number,
        TrangThai: Number,
    },
    { collection: 'phienbansanpham' },
);

const phienbansanpham = mongoose.model('phienbansanpham', userSchema);

module.exports = phienbansanpham;

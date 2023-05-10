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
        TrangThai: String,
    },
    { collection: 'phienbansanpham' },
);

userSchema.index({ MaSanPham: 1 });

const phienbansanpham = mongoose.model('phienbansanpham', userSchema);

export default phienbansanpham;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TenLoaiSanPham: String,
        MoTa: String,
        TrangThai: String,
    },
    { collection: 'loaisanpham' },
);

const loaisanpham = mongoose.model('loaisanpham', userSchema);

module.exports = loaisanpham;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TenTongSo: String,
        MoTa: String,
        TrangThai: String,
        LoaiDuLieu: String,
        DonVi: String,
    },
    { collection: 'thongso' },
);

const thongso = mongoose.model('thongso', userSchema);

module.exports = thongso;

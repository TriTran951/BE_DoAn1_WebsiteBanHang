import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        MaChinhSach: { type: mongoose.Schema.Types.ObjectId, ref: 'chinhsach' },
        MoTa: String,
        TrangThai: String,
        NgayBatDat: Date,
        NgayKetThuc: Date,
    },
    { collection: 'sanpham_chinhsach' },
);

const sanpham_chinhsach = mongoose.model('sanpham_chinhsach', userSchema);

module.exports = sanpham_chinhsach;

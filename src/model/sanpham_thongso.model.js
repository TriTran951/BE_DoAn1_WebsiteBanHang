import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaLoaiSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'loaisanpham' },
        MaThongSo: { type: mongoose.Schema.Types.ObjectId, ref: 'thongso' },
        MoTa: String,
        TrangThai: String,
        GiaTri: Number,
        ThongSoPhienBan: String,
    },
    { collection: 'sanpham_thongso' },
);

const sanpham_thongso = mongoose.model('sanpham_thongso', userSchema);

module.exports = sanpham_thongso;

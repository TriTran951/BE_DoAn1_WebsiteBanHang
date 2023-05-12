import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'sanpham' },
        MaThongSo: { type: mongoose.Schema.Types.ObjectId, ref: 'thongso' },
        MoTa: String,
        TrangThai: String,
        GiaTri: String,
        ThongSoPhienBan: String,
    },
    { collection: 'sanpham_thongso' },
);

userSchema.index({ MaSanPham: 1, MaThongSo: 1 });
userSchema.index({ MaSanPham: 1 });
userSchema.index({ MaThongSo: 1 });

const sanpham_thongso = mongoose.model('sanpham_thongso', userSchema);

export default sanpham_thongso;

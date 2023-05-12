import mongoose from 'mongoose';
const { Schema } = mongoose;

const sanphamSchema = mongoose.Schema(
    {
        MaLoaiSanPham: { type: mongoose.Schema.Types.ObjectId, ref: 'loaisanpham' },
        MaThuongHieu: { type: mongoose.Schema.Types.ObjectId, ref: 'thuonghieu' },
        TenSanPham: {
            type: String,
            index: true,
        },
        TenHienThi: String,
        HinhAnh: String,
        MoTa: String,
        SoLuongHangTon: Number,
        GiaBan: Number,
        TrangThai: String,
        SanPhamLienQuan: [
            {
                type: Schema.Types.ObjectId,
                ref: 'sanpham',
            },
        ],
    },
    { collection: 'sanpham' },
);

sanphamSchema.index({ MaLoaiSanPham: 1 });
sanphamSchema.index({ MaThuongHieu: 1 });

const sanpham = mongoose.model('sanpham', sanphamSchema);

export default sanpham;

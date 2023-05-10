import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TenThongSo: {
            type: String,
            index: true,
        },
        MoTa: String,
        TrangThai: String,
        LoaiDuLieu: String,
        DonVi: String,
    },
    { collection: 'thongso' },
);

const thongso = mongoose.model('thongso', userSchema);

export default thongso;

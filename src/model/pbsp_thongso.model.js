import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaPhienBan: { type: mongoose.Schema.Types.ObjectId, ref: 'phienbansanpham' },
        MaThongSo: { type: mongoose.Schema.Types.ObjectId, ref: 'thongso' },
        GiaTri: Number,
    },
    { collection: 'pbsp_thongso' },
);

const pbsp_thongso = mongoose.model('pbsp_thongso', userSchema);

module.exports = pbsp_thongso;

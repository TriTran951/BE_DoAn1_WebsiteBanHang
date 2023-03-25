import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TinhTrang: String,
        NguoiNhap: String,
        NgayNhap: Date,
        MaNhaCungCap: { type: mongoose.Schema.Types.ObjectId, ref: 'nhacungcap' },
    },
    { collection: 'nhaphang' },
);

const nhaphang = mongoose.model('nhaphang', userSchema);

module.exports = nhaphang;

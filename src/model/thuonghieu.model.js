import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TenThuongHieu: String,
        MoTa: String,
        TrangThai: String,
    },
    { collection: 'thuonghieu' },
);

const thuonghieu = mongoose.model('thuonghieu', userSchema);

module.exports = thuonghieu;

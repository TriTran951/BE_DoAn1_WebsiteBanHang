import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        TenChinhSach: String,
        MoTa: String,
        TrangThai: String,
    },
    { collection: 'chinhsach' },
);

const chinhsach = mongoose.model('chinhsach', userSchema);

module.exports = chinhsach;

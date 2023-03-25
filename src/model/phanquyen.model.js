import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        MaChucVu: { type: mongoose.Schema.Types.ObjectId, ref: 'chucvu' },
        MaQuyen: { type: mongoose.Schema.Types.ObjectId, ref: 'quyen' },
    },
    { collection: 'phanquyen' },
);

const phanquyen = mongoose.model('phanquyen', userSchema);

export default phanquyen;

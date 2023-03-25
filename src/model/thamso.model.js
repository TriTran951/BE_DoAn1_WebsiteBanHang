import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        TenThamSo: String,
        GiaTri: Number,
    },
    { collection: 'thamso' },
);

const thamso = mongoose.model('thamso', userSchema);

export default thamso;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        TenQuyen: String,
        TenManHinhDuocLoad: String,
    },
    { collection: 'quyen' },
);

const quyen = mongoose.model('quyen', userSchema);

export default quyen;

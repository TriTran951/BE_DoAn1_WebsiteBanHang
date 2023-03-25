import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        TenChucVu: String,
    },
    { collection: 'chucvu' },
);

const chucvu = mongoose.model('chucvu', userSchema);

export default chucvu;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        Ten: String,
        Sdt: String,
        Mail: String,
        DiaChi: String,
    },
    { collection: 'nhacungcap' },
);

const nhacungcap = mongoose.model('nhacungcap', userSchema);

module.exports = nhacungcap;

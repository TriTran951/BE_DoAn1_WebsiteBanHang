import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
    {
        MaUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        TongTien: Number,
    },
    { collection: 'giohang' },
);

const giohangModel = mongoose.model('giohang', userSchema);

module.exports = giohangModel;

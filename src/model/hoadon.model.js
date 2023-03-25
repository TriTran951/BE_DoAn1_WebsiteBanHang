import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        MaUser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        TongTien: Number,
        NgayGioThanhToan: Date,
        PhiVanChuyen: Number,
    },
    { collection: 'hoadon' },
);

const hoadon = mongoose.model('hoadon', userSchema);

export default hoadon;

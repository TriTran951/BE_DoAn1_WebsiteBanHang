import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        Email: String,
        Matkhau: String,
        HoTen: String,
        Cccd: String,
        GioiTinh: Boolean,
        NgaySinh: Date,
        ChucVu: String,
        HinhAnh: String,
        TrangThai: String,
        Sdt: String,
        DiaChi: String,
        SoTienDaTra: Number,
        MaChucVu: { type: mongoose.Schema.Types.ObjectId, ref: 'chucvu' },
    },
    { collection: 'user' },
);

const userModel = mongoose.model('user', userSchema);

export default userModel;

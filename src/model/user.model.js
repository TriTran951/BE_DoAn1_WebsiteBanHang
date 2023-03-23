const mongoose = require('../config/connectDB.js')

const userSchema = mongoose.Schema(
    {
        Email: String,
        Matkhau: String,
        HoTen: String,
        Cccd: String,
        GioiTinh: Boolean,
        NgaySinh: Date,
        HinhAnh: String,
        TrangThai: String,
        Sdt: String,
        DiaChi: String,
        SoTienDaTra: Number,
        MaChucVu: {
            
        }

    }, { collection: 'users' }
)

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
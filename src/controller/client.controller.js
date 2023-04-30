import Thuonghieu from '../model/thuonghieu.model.js';
import Sanpham from '../model/sanpham.model.js';
import Loaisanpham from '../model/loaisanpham.model.js';
import Express from 'express';
import XLSX from 'xlsx';

let Exec = async (req, res, next) => {
    try {
        //read file excel
        const workbook = XLSX.readFile('./src/test/product.xlsx');
        //get sheet by sheet name
        const worksheet = workbook.Sheets['DienThoaiCell'];
        //get all data fropm sheet
        let data = XLSX.utils.sheet_to_json(worksheet, { header: ['name', 'price', 'image', 'brand'] });

        //get all brand
        let brands = await Thuonghieu.find();
        let loaisanpham = await Loaisanpham.findOne({ TenLoaiSanPham: 'Điện thoại' });

        for (let i = 0; i < data.length; i++) {
            let currentbrand = brands.find((obj) => obj.TenThuongHieu === data[i].brand);

            if (typeof currentbrand === 'undefined') {
                let newBrand = await Thuonghieu.create({
                    TenThuongHieu: data[i].brand,
                    MoTa: '',
                    TrangThai: 'HoatDong',
                });
                currentbrand = newBrand;
                brands.push(currentbrand);
            }

            let sanpham = await Sanpham.create({
                MaLoaiSanPham: loaisanpham._id,
                MaThuongHieu: currentbrand._id,
                TenSanPham: data[i].name,
                HinhAnh: data[i].image,
                MoTa: '',
                SoLuongHangTon: 10,
                GiaBan: parseInt(data[i].price),
                TrangThai: 'HoatDong',
            });
        }
        console.log(brands.length);
        res.status(200).send('OK');
    } catch (error) {
        console.log(error);
        return res.status(404).send('fail');
    }
};

export default { Exec };

// import XLSX from 'xlsx';
// const workbook = XLSX.readFile('./product.xlsx')

// const worksheet = workbook.Sheets['LaptopCell'];
// const data = XLSX.utils.sheet_to_json(worksheet, { header: ['name', 'price', 'image', 'brand'] });
// console.log(data[1]);

// let th = await Thuonghieu.create({
//     TenThuongHieu: 'Apple',
//     MoTa: '',
//     TrangThai: '',
// });

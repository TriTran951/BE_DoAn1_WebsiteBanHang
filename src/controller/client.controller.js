import Express from 'express';
import XLSX from 'xlsx';
import fs from 'fs';
//import model
import ThuonghieuModel from '../model/thuonghieu.model.js';
import SanphamModel from '../model/sanpham.model.js';
import LoaisanphamModel from '../model/loaisanpham.model.js';
import Sanpham_thongsoModel from '../model/sanpham_thongso.model.js';
import ThongsoModel from '../model/thongso.model.js';
import PhienbansanphamModel from '../model/phieubansanpham.model.js';
import sanpham from '../model/sanpham.model.js';

// import Pbsp_thongsoModel from '../model/pbsp_thongso.model.js';

let addProduct = async (req, res, next) => {
    try {
        //read file excel
        const workbook = XLSX.readFile('./src/test/ProductFinal.xlsx');
        //get sheet by sheet name
        //sheet DienThoaiFull, TaiNgheFull, LapTopFull, TabletFull, DongHoFull
        const worksheet = workbook.Sheets['DongHoFull'];
        //get all data fropm sheet
        let data = XLSX.utils.sheet_to_json(worksheet, {
            header: ['name', 'price', 'image', 'link', 'brand', 'thongso', 'version', 'lienquan'],
        });

        // //get all brand
        let brands = await ThuonghieuModel.find();
        let thongsos = await ThongsoModel.find();
        let loaisanpham = await LoaisanphamModel.findOne({ TenLoaiSanPham: 'Watch' });

        for (let i = 0; i < data.length; i++) {
            //parse data
            data[i].thongso = JSON.parse(data[i].thongso);
            data[i].version = JSON.parse(data[i].version);
            data[i].lienquan = JSON.parse(data[i].lienquan);

            //if brand not exist, create new brand
            let currentbrand = brands.find((obj) => obj.TenThuongHieu === data[i].brand);

            if (typeof currentbrand === 'undefined') {
                let newBrand = await ThuonghieuModel.create({
                    TenThuongHieu: data[i].brand,
                    MoTa: '',
                    TrangThai: 'HoatDong',
                });
                currentbrand = newBrand;
                brands.push(currentbrand);
            }
            //

            let sanpham = await SanphamModel.create({
                MaLoaiSanPham: loaisanpham._id,
                MaThuongHieu: currentbrand._id,
                TenSanPham: data[i].name,
                HinhAnh: data[i].image,
                MoTa: '',
                SoLuongHangTon: 10,
                GiaBan: parseInt(data[i].price),
                TrangThai: 'HoatDong',
                SanPhamLienQuan: [],
            });
            data[i]._id = sanpham._id;

            //add thông số
            for (var j = 0; j < data[i].thongso.length; j++) {
                let ts = thongsos.find((obj) => obj.TenThongSo === data[i].thongso[j].name);

                if (typeof ts === 'undefined') {
                    let newTS = await ThongsoModel.create({
                        TenThongSo: data[i].thongso[j].name,
                        MoTa: '',
                        TrangThai: 'HoatDong',
                        LoaiDuLieu: '',
                        DonVi: '',
                    });
                    ts = newTS;
                    thongsos.push(newTS);
                }

                let sp_ts = await Sanpham_thongsoModel.create({
                    MaSanPham: sanpham._id,
                    MaThongSo: ts._id,
                    MoTa: '',
                    TrangThai: 'HoatDong',
                    GiaTri: data[i].thongso[j].value,
                    ThongSoPhienBan: '',
                });
            }

            //version
            for (var j = 0; j < data[i].version.length; j++) {
                let ver = await PhienbansanphamModel.create({
                    MaSanPham: sanpham._id,
                    TenPhienBan: data[i].version[j].color,
                    HinhAnh: data[i].version[j].image,
                    MoTa: '',
                    GiaBan: data[i].version[j].price.replace(/\./g, '').replace('₫', ''),
                    SoLuongHangTon: '10',
                    TrangThai: 'HoatDong',
                });
            }
        }

        const jsonData = JSON.stringify(data);
        fs.writeFile('./src/test/data.json', jsonData, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });

        console.log('OK');
        res.status(200).send('OK');
    } catch (error) {
        console.log(error);
        return res.status(404).send('fail');
    }
};

let addRelatedProduct = async (req, res, next) => {
    try {
        fs.promises
            .readFile('./src/test/data.json', 'utf8')
            .then(async (res) => {
                let data = JSON.parse(res);

                for (let i = 0; i < data.length; i++) {
                    let sanpham = await SanphamModel.findOne({ _id: data[i]._id });
                    for (let j = 0; j < data[i].lienquan.length; j++) {
                        let related = data.find((obj) => obj.link === data[i].lienquan[j].link);

                        if (typeof related !== 'undefined') {
                            sanpham.SanPhamLienQuan.push(related._id);
                            //console.log(related._id);
                        }
                    }
                    await sanpham.save();
                }
                console.log('Done');
            })
            .catch((err) => {
                console.error(err);
            });

        res.status(200).send('OK');
    } catch (error) {
        console.log(error);
        return res.status(404).send('fail');
    }
};

let find = async (req, res, next) => {
    let sanpham = await SanphamModel.find({
        MaLoaiSanPham: '644e90c96b5538959065ad6c',
    });

    return res.send('ok');
};

export default { addProduct, addRelatedProduct, find };

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

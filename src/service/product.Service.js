import SanPhamModel from '../model/sanpham.model.js';
import LoaiSanPhamModel from '../model/loaisanpham.model.js';

import mongoose from 'mongoose';
let getHomeProduct = async () => {
    let Product = await SanPhamModel.find();
    let homeProduct = [];
    let phone = [];
    let o = 0;
    let DienThoai = '644dd1bc94aaffdfaed2fe3c';
    for (let i = 0; i < Product.length; i++) {
        if (Product[i].MaLoaiSanPham == DienThoai) {
            phone[o++] = Product[i];
        }
    }
    homeProduct[0] = phone;
    return homeProduct;
};

let getSmartphone = async () => {
    let phone = await SanPhamModel.find({
        MaLoaiSanPham: '644dd1bc94aaffdfaed2fe3c',
    });
    return phone;
};
let getLaptop = async () => {
    let laptop = await SanPhamModel.find({
        MaLoaiSanPham: '644dd1bb94aaffdfaed2fe39',
    });
    return laptop;
};
let getWatch = async () => {
    let watch = await SanPhamModel.find({
        MaLoaiSanPham: '644e90c96b5538959065ad6c',
    });
    return watch;
};
let getTablet = async () => {
    let tablet = await SanPhamModel.find({
        MaLoaiSanPham: '644f56cbb2cd385ebfffb7ed',
    });
    return tablet;
};
let getEarphone = async () => {
    let earphone = await SanPhamModel.find({
        MaLoaiSanPham: '644f5733f1488433820db285',
    });
    return earphone;
};
export default {
    getHomeProduct,
    getSmartphone,
    getEarphone,
    getLaptop,
    getTablet,
    getWatch,
};

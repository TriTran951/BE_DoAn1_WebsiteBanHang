import SanPhamModel from '../model/sanpham.model.js';
import LoaiSanPhamModel from '../model/loaisanpham.model.js';

import mongoose from 'mongoose';

let getSmartphone = async () => {
    let phone = await SanPhamModel.find(
        {
            MaLoaiSanPham: '644dd1bc94aaffdfaed2fe3c',
        },
        '-SanPhamLienQuan ',
    );
    return phone;
};
let getLaptop = async () => {
    let laptop = await SanPhamModel.find(
        {
            MaLoaiSanPham: '644dd1bb94aaffdfaed2fe39',
        },
        '-SanPhamLienQuan ',
    );
    return laptop;
};
let getWatch = async () => {
    let watch = await SanPhamModel.find(
        {
            MaLoaiSanPham: '644e90c96b5538959065ad6c',
        },
        '-SanPhamLienQuan ',
    );
    return watch;
};
let getTablet = async () => {
    let tablet = await SanPhamModel.find(
        {
            MaLoaiSanPham: '644f56cbb2cd385ebfffb7ed',
        },
        '-SanPhamLienQuan ',
    );
    return tablet;
};
let getEarphone = async () => {
    let earphone = await SanPhamModel.find(
        {
            MaLoaiSanPham: '644f5733f1488433820db285',
        },
        '-SanPhamLienQuan ',
    );
    return earphone;
};
let test = async () => {
    let test = await SanPhamModel.find({
        MaLoaiSanPham: '644dd1bc94aaffdfaed2fe3c',
    })
        .populate({
            path: 'thuonghieu',
            select: 'TenThuongHieu',
        })
        .distinct('MaThuongHieu');
    return test;
};
export default {
    getSmartphone,
    getEarphone,
    getLaptop,
    getTablet,
    getWatch,
    test,
};

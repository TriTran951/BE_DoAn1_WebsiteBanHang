import SanPhamModel from '../model/sanpham.model.js';
import ThuonghieuModel from '../model/thuonghieu.model.js';
import LoaisanphamModel from '../model/loaisanpham.model.js';
import Sanpham_thongsoModel from '../model/sanpham_thongso.model.js';
import ThongsoModel from '../model/thongso.model.js';
import PhienbansanphamModel from '../model/phieubansanpham.model.js';

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
let getProductbyId = async (id) => {
    try {
        let product = await SanPhamModel.findById(id).populate({
            path: 'SanPhamLienQuan',
            select: '_id TenSanPham HinhAnh GiaBan',
        });

        //thông số
        let sp_thongso = await Sanpham_thongsoModel.find({ MaSanPham: product._id }).populate(
            'MaThongSo',
            'TenThongSo GiaTri',
        );
        let thongso = sp_thongso.map((item) => {
            return {
                TenThongSo: item.MaThongSo.TenThongSo,
                GiaTri: item.GiaTri,
            };
        });

        //phiên bản
        let phienban = await PhienbansanphamModel.find({ MaSanPham: '6458c3fbd1923803f751d999' });
        if (typeof phienban === 'undefined') phienban = [];
        return { ...product.toObject(), thongso, phienban };
    } catch (error) {
        console.log(error);
        return {};
    }
};

export default {
    getSmartphone,
    getEarphone,
    getLaptop,
    getTablet,
    getWatch,
    test,
    getProductbyId,
};

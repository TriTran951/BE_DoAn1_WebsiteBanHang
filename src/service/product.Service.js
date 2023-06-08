import SanPhamModel from '../model/sanpham.model.js';
import ThuonghieuModel from '../model/thuonghieu.model.js';
import LoaisanphamModel from '../model/loaisanpham.model.js';
import Sanpham_thongsoModel from '../model/sanpham_thongso.model.js';
import ThongsoModel from '../model/thongso.model.js';
import PhienbansanphamModel from '../model/phieubansanpham.model.js';
import redis from 'redis';

import mongoose from 'mongoose';
import sanpham from '../model/sanpham.model.js';

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
        const redisClient = redis.createClient({
            url: ' redis://default:VZT1iocfRH6NTGYPi7WgA8K4H61d8ChI@redis-19303.c292.ap-southeast-1-1.ec2.cloud.redislabs.com:19303',
        });

        await redisClient.connect();
        const cachedProduct = await redisClient.get(id);

        if (cachedProduct) {
            // Nếu sản phẩm tồn tại trong Redis cache, trả về sản phẩm từ cache
            console.log('data from cache');
            return JSON.parse(cachedProduct);
        } else {
            // Nếu sản phẩm chưa được lưu trong Redis cache, lấy sản phẩm từ cơ sở dữ liệu
            let product = await SanPhamModel.findById(id).populate({
                path: 'SanPhamLienQuan',
                select: '_id TenSanPham TenHienThi HinhAnh GiaBan',
            });

            let phienban;
            let thongso;
            let result;
            if (product) {
                console.log('data from db');
                //thông số
                let sp_thongso = await Sanpham_thongsoModel.find({ MaSanPham: product._id }).populate(
                    'MaThongSo',
                    'TenThongSo GiaTri',
                );
                thongso = sp_thongso.map((item) => {
                    return {
                        TenThongSo: item.MaThongSo.TenThongSo,
                        GiaTri: item.GiaTri,
                    };
                });
                //phiên bản
                phienban = await PhienbansanphamModel.find({ MaSanPham: product._id });
                if (typeof phienban === 'undefined') phienban = [];
                result = { ...product.toObject() };

                // , ...thongso, ...phienban
                // Lưu sản phẩm vào Redis cache
                await redisClient.set(product._id.toString(), JSON.stringify(result), {
                    EX: 300,
                    NX: true,
                });
            } else result = {};

            // Trả về sản phẩm từ cơ sở dữ liệu
            return result;
        }
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

import UserModel from '../model/user.model.js';
import SanPhamModel from '../model/sanpham.model.js';

let getHomeProduct = async () => {
    let homeProduct = await SanPhamModel.find().limit(50);

    return homeProduct;
};

export default {
    getHomeProduct,
};

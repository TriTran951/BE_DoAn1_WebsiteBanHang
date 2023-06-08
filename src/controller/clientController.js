import productService from '../service/product.Service.js';

let HomeController = async (req, res) => {
    try {
        let phone = await productService.getSmartphone();
        let earphone = await productService.getEarphone();
        let watch = await productService.getWatch();
        let laptop = await productService.getLaptop();
        let tablet = await productService.getTablet();
        let product = [];
        product[0] = phone.slice(0, 20);
        product[1] = laptop.slice(0, 20);
        product[2] = tablet.slice(0, 20);
        product[3] = watch.slice(0, 20);
        product[4] = earphone.slice(0, 20);
        // for (let i = 0; i < product.length; i++) {
        //     for (let j = 0; j < product[i].length; j) {
        //         product[i][j].rating = Math.floor(Math.random() * 3) + 3;
        //     }
        // }

        res.status(200).send(JSON.stringify(product));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};

let SmartPhoneController = async (req, res) => {
    try {
        let item = await productService.getSmartphone();
        res.status(200).send(JSON.stringify(item));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};
let LaptopController = async (req, res) => {
    try {
        let item = await productService.getLaptop();
        res.status(200).send(JSON.stringify(item));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};
let TabletController = async (req, res) => {
    try {
        let item = await productService.getTablet();
        res.status(200).send(JSON.stringify(item));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};
let WatchController = async (req, res) => {
    try {
        let item = await productService.getWatch();
        res.status(200).send(JSON.stringify(item));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};
let EarphoneController = async (req, res) => {
    try {
        let item = await productService.getEarphone();
        res.status(200).send(JSON.stringify(item));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};

let getProduct = async (req, res) => {
    try {
        let id = req.body.id;
        let prod = await productService.getProductbyId(id);
        res.status(200).send(JSON.stringify(prod));
    } catch (error) {
        console.log('get product by id fail');
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};

export default {
    HomeController,
    SmartPhoneController,
    LaptopController,
    TabletController,
    EarphoneController,
    WatchController,
    getProduct,
};

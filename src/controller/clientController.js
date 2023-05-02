import productService from '../service/product.Service.js';

let HomeController = async (req, res) => {
    try {
        let product = await productService.getHomeProduct();
        res.status(200).send(JSON.stringify(product));
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'fail',
        });
    }
};

export default {
    HomeController,
};

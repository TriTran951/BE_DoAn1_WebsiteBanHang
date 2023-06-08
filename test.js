let product = {
    asd: '1213123',
    as: 1,
};

let thongso = undefined;
let phienban = {
    zxcxz: 33,
};

let rs = { ...product, ...thongso, ...phienban };
console.log(rs);

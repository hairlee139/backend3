const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const PaymentRouter = require('./PaymentRouter')
const QuanNhanRouter = require('./QuanNhanRouter')
const LoaiQuanNhanRouter = require("./LoaiQuanNhanRouter")
const QuanHamRouter = require("./QuanHamRouter")
const DanhMucCapBac = require("./DanhMucCapBacRouter")
const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
    app.use('/api/quannhan', QuanNhanRouter)
    app.use('/api/loaiquannhan', LoaiQuanNhanRouter)
    app.use('/api/quanham', QuanHamRouter)
    app.use('/api/danhmuccapbac',DanhMucCapBac)
}

module.exports = routes
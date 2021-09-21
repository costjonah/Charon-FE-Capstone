const models = require('../models/index')

module.exports = (app) => {
  app.get('/currentProduct', (req, res) => {
    const productList = require('../data/productList')
    // return res.send(productList.data[0])
    return res.json({
      code: 200,
      msg: 'ok',
      currentProduct: productList.data[0]
    })
  })
  app.get('/products', (req, res) => {
    let queryData = {
      page: req.query.page || 1,
      count: req.query.count || 5
    }
    models.products.getAll(queryData, (err, responseData) => {
      if (err) {
        console.error('Error: ', err)
        res.status(500).end()
      } else {
        console.error('Success: ', responseData.data)
        res.send(responseData.data)
      }
    })
  })
  app.get('/products/:product_id', (req, res) => {
    let id = req.params.product_id
    models.products.info(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err)
        res.status(500).end()
      } else {
        res.send(responseData.data)
      }
    })
  })
  app.get('/products/:product_id/styles', (req, res) => {
    let id = req.params.product_id
    models.products.styles(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err)
        res.status(500).end()
      } else {
        res.send(responseData.data)
      }
    })
  })
  app.get('/products/:product_id/related', (req, res) => {
    let id = req.params.product_id
    models.products.related(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err)
        res.status(500).end()
      } else {
        res.send(responseData.data)
      }
    })
  })
}

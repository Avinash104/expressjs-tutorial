import fs from "fs"

const data = fs.readFileSync("data.json", "utf-8")
const dataUpd = JSON.parse(data)

const products = dataUpd.products

const createProduct = (req, res) => {
  //receiving data as json from body of req in postman
  products.push(req.body)
  res.status(201).send("product added")
}

const fetchProduct = (req, res) => {
  const id = +req.params.id
  const product = products.find((item) => item.id === id)
  res.status(200).send(product)
}

const fetchAllProducts = (req, res) => {
  res.status(200).send(products)
}

const updateProduct = (req, res) => {
  const id = +req.params.id
  const prdIndex = products.findIndex((item) => item.id === id)
  products.splice(prdIndex, 1, { id: id, ...req.body })
  res.status(200).send(products)
}

const patchProduct = (req, res) => {
  const id = +req.params.id
  const prdIndex = products.findIndex((item) => item.id === id)
  const product = products[prdIndex]
  products.splice(prdIndex, 1, { ...product, ...req.body })
  res.status(200).send(products)
}

const deleteProduct = (req, res) => {
  const id = +req.params.id
  const prdIndex = products.findIndex((item) => item.id === id)
  products.splice(prdIndex, 1)
  res.status(200).send(products)
}

export {
  createProduct,
  fetchProduct,
  fetchAllProducts,
  updateProduct,
  patchProduct,
  deleteProduct,
}

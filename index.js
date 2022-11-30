import express from "express"
import productRouter from "./routes/product.js"
import userRouter from "./routes/user.js"
import fs from "fs"

const data = fs.readFileSync("data.json", "utf-8")
const dataUpd = JSON.parse(data)

const app = express()
const port = 3000

app.use(express.json()) //body parser to parse json sent in the body of the req

app.use("/api", productRouter)
app.use("/api", userRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

export { dataUpd }

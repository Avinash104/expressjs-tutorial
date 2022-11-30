import express from "express"
import morgan from "morgan"

const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log("Time:", Date.now())
  next()
})
app.use(morgan("dev"))
app.use(express.static("public")) //static file hosting. Files can be accesed with name.
app.use(express.json()) //in this case we are sending data in req.body
const auth = (req, res, next) => {
  console.log(req.query)

  // if (req.query.password === "123") {
  if (req.body.password === "123") {
    next()
  } else {
    res.send("Wrong password")
  }
}

app.get("/product/:id", (req, res) => {
  console.log(req.params)
  res.status(200).send("Hey GET")
})
app.post("/", auth, (req, res) => {
  res.status(200).send("Hey POST")
})
app.delete("/", (req, res) => {
  res.status(200).send("Hey DELETE")
})
app.patch("/", (req, res) => {
  res.status(200).send("Hey PATCH")
})
app.put("/", (req, res) => {
  res.status(200).send("Hey PUT")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

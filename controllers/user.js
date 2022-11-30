import fs from "fs"

const data = fs.readFileSync("data.json", "utf-8")
const dataUpd = JSON.parse(data)
const users = dataUpd.users

const createUser = (req, res) => {
  //receiving data as json from body of req in postman
  users.push(req.body)
  res.status(201).send("User added")
}

const fetchUser = (req, res) => {
  const id = +req.params.id
  const user = users.find((item) => item.id === id)
  res.status(200).send(user)
}

const fetchAllUsers = (req, res) => {
  res.status(200).send(users)
}

const updateUser = (req, res) => {
  const id = +req.params.id
  const prdIndex = users.findIndex((item) => item.id === id)
  users.splice(prdIndex, 1, { id: id, ...req.body })
  res.status(200).send(users)
}

const patchUser = (req, res) => {
  const id = +req.params.id
  const prdIndex = users.findIndex((item) => item.id === id)
  const user = users[prdIndex]
  users.splice(prdIndex, 1, { ...user, ...req.body })
  res.status(200).send(users)
}

const deleteUser = (req, res) => {
  const id = +req.params.id
  const prdIndex = users.findIndex((item) => item.id === id)
  users.splice(prdIndex, 1)
  res.status(200).send(users)
}

export {
  createUser,
  fetchUser,
  fetchAllUsers,
  updateUser,
  patchUser,
  deleteUser,
}

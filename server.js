import express from "express";

const app = express();
const port = 5000;

app.use(express.json());

const users = []

app.get('/users', (request, response) => {
  response.json(users)
})

app.post('/users', (request, response) => {
  const id = request.body.id;
  const name = request.body.name;
  const email = request.body.email;

  const user = { id, name, email}

  users.push(user)

  response.json(user);
})

app.delete('/users/:id', (request, response) => {
  const userId = Number(request.params.id)
  const userIndexId = users.findIndex(user => user.id === userId)

  if (userIndexId > -1) {
    users.splice(userIndexId, 1)
  }

  response.json({message: 'success'})
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

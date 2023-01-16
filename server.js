import express from "express";

const app = express();
const port = 5000;

app.use(express.json());

const users = []

app.get('/users', (request, response) => {
  response.json({'teste': 'Esse é um teste!'})
})

app.post('/users', (request, response) => {
  const id = request.body.id;
  const name = request.body.name;
  const email = request.body.email;

  const user = { id, name, email}

  users.push(user)

  response.json(user);
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

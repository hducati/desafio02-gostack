const express = require("express");
const cors = require("cors");

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body

  const repositorie = {id: uuid(), title, url, techs}
  repositories.push(repositorie)

  return response.json(repositorie)
});

app.put("/repositories/:id", (request, response) => {
  const id = request.params
  const {title, url, techs} = request.body

  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositorieIndex < 0) {
    return response.status(400).json({error: 'Project not found'})
  }

  const repositorie = {
    id,
    title,
    url,
    techs
  }

  repositories[repositorieIndex] = repositorie

  return response.json(repositorie)
});

app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

    if (repositorieIndex < 0) {
      return response.status(400).json({error: 'Repositorie not found'})
    }

    repositories.splice(repositorieIndex, 1);

    return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;

const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (_, res) => {
  res.send("Hello world!");
});

app.get("/fake", (_, res) => {
  const fakeData = [
    {
      id: 1,
      name: "Javascript"
    },
    {
      id: 2,
      name: "Go"
    },
    {
      id: 3,
      name: "Java"
    }
  ];

  res.send(fakeData);
});

app.listen(port, () =>
  console.info(`Example server listening on port ${port}`)
);

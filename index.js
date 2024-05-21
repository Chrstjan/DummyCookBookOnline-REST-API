import express from "express";
import { dotenv } from "dotenv";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the DummyCookBookOnline REST API");
});

app.use((req, res) => {
  res.status(404).send("Site was not found");
});

app.listen(port, () => {
  console.log(`Webserver is running on http://localhost:${port}`);
});

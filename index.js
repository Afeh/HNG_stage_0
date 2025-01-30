import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended:true }));

const email = "balogunafebu22@gmail.com";
const github = "https://github.com/Afeh/HNG_stage_0";

app.get("/", (req, res) => {
	const timestamp = new Date().toISOString();

	const response = {
		email: email,
		current_datetime: timestamp,
		github_url: github,
	};

	res.json(response);
});

app.listen(port, () => {
	console.log(`Successfully started server on port ${port}.`);
});
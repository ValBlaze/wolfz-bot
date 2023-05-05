import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`The server is listening on port ${port}`);
});

import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

const publicDir = path.join(__dirname, "..", "public");
app.use(express.static(publicDir));

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/simple", (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, "simple.html"));
});

app.listen(PORT, () => {
  console.log(`> jaks-tech server running: http://localhost:${PORT}`);
  console.log(`> fancy:  http://localhost:${PORT}/`);
  console.log(`> simple: http://localhost:${PORT}/simple`);
});

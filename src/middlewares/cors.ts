import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

let allowedOrigins = [
  "http://localhost:3000", // Local frontend
  "https://google-sheet-frontend.vercel.app/", // Add this when you deploy frontend
];

const cors: CORS = (req, res, next) => {
  let origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  }

  next();
};

export default cors;

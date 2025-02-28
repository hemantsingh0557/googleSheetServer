let allowedOrigins = [
  "http://localhost:3000",
  "https://google-sheet-frontend.vercel.app", // 
  "https://google-sheet-frontend.vercel.app/", // 
];

const cors: CORS = (req, res, next) => {
  let origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin); // ✅ Allow frontend
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true"); // ✅ Needed for cookies or auth headers

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  }

  next();
};

export default cors;

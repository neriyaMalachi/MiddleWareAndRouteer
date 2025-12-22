import express from "express";

const usersRouter = express();

usersRouter.get("/", (req, res) => {
  console.log(req.source , req.requestTime);
  
  res.json({ message: "hello user route" });
});

export default usersRouter;

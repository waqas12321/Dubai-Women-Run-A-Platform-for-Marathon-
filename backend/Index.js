require("./Config.js");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sponsorRouter = require("./routers/sponsor.js");
const categoryRouter = require("./routers/category.js");
const campaignRouter = require("./routers/campaigns.js");
const womenSubstanceRouter = require("./routers/womenSubstance.js");
const routesRouter = require("./routers/routes.js");
const eventsRouter = require("./routers/events.js");
const teamRouter = require("./routers/team.js");
const newsRouter = require("./routers/news.js");
const sponsorshipRouter=require("./routers/sponsorship.js");
const app = express();

app.use(cors());
app.use(express.json());

//config dotenv
dotenv.config();

//routes

app.use("/api1", sponsorRouter);
app.use("/api2", categoryRouter);
app.use("/api3", campaignRouter);
app.use("/api4", womenSubstanceRouter);
app.use("/api5", routesRouter);
app.use("/api6", eventsRouter);
app.use("/api7", teamRouter);
app.use("/api8", newsRouter);
app.use("/api9", sponsorshipRouter);

// server
app.listen(process.env.PORT, () => {
  console.warn(`server is running at ${process.env.PORT}`);
});

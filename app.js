const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();


app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
}
)
app.get("/about-moe", (req, res) => {
  res.render("pages/about-moe.ejs");
}
)
app.get("/constitutional-provision", (req, res) => {
  res.render("pages/constitutional-provision.ejs");
}
)
app.get("/organisation-chart", (req, res) => {
  res.render("pages/organisation-chart.ejs");
}
)
app.get("/organisation_chart_mhrd", (req, res) => {
  res.render("pages/organisation-chart.ejs");
}
)
app.get("/allocation-business", (req, res) => {
  res.render("pages/allocation-business.ejs");
}
)
app.get("/citizens-charters", (req, res) => {
  res.render("pages/citizens-charter.ejs");
}
)
app.get("/policy-initiatives", (req, res) => {
  res.render("pages/policy-initiatives.ejs");
}
)
app.get("/acts-higher", (req, res) => {
  res.render("pages/acts-higher.ejs");
}
)
app.get("/cabe", (req, res) => {
  res.render("pages/cabe.ejs");
}
)
app.get("/minister-page", (req, res) => {
  res.render("pages/ministers.ejs");
}
)
app.get("/NEP-2020", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/PM Shri Schools Scheme Data.pdf"))
})
app.get("/telephone-directory-kb-2", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/telephone-directory-moe.pdf"))
})
app.get("/telephone-directory-moe", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/telephone-directory-moe2.pdf"))
})
app.listen(process.env.PORT || 3000, () => {
  console.log("http://localhost:" + process.env.PORT)
})
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
app.get("/documents_reports", (req, res) => {
  res.render("pages/documents_reports.ejs");
}
)
app.get("/statistics-new", (req, res) => {
  res.render("pages/statistics-new.ejs");
}
)
app.get("/institutions", (req, res) => {
  res.render("pages/institutions.ejs");
})
app.get("/apex-level-bodies", (req, res) => {
  res.render("pages/apex-level-bodies.ejs");
})
app.get("/national-boards", (req, res) => {
  res.render("pages/national-boards.ejs");
})
app.get("/private-national-boards", (req, res) => {
  res.render("pages/private-national-boards.ejs");
})
app.get("/international-boards", (req, res) => {
  res.render("pages/international-boards.ejs");
})
app.get("/audios", (req, res) => {
  res.render("pages/audios.ejs");
})
app.get("/gallery", (req, res) => {
  res.render("pages/gallery.ejs");
})
app.get("/rti", (req, res) => {
  res.render("pages/rti.ejs");
})
app.get("/NEP-2020", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/PM Shri Schools Scheme.pdf"))
})
app.get("/telephone-directory-kb-2", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/telephone-directory-moe.pdf"))
})
app.get("/telephone-directory-moe", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pdf/telephone-directory-moe2.pdf"))
})
app.use((req, res) => {
  res.status(404).render("pages/404.ejs");
})

app.listen(process.env.PORT || 3000, () => {
  console.log("http://localhost:" + process.env.PORT)
})
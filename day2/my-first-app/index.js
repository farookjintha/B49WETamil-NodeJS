// Building APIs using Express

let profiles = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    city: "Chennai",
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com",
    city: "Bangalore",
  },
  {
    id: 3,
    name: "Arjun",
    email: "arjun@gmail.com",
    city: "Trichy",
  },
  {
    id: 4,
    name: "Ram",
    email: "ram@gmail.com",
    city: "Chennai",
  },
];

const express = require("express");

const app = express();

// middleware attached
app.use(express.json()); // Parsing the request into JSON from the frontend

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World From Express Server!" });
});

app.get("/profiles", (req, res) => {
  const email = req.query.email;
  const city = req.query.city;
  if (email) {
    let matchedProfile = profiles.find((profile, index) => {
      if (profile.email === email) {
        return profile;
      }
    });

    return res
      .status(200)
      .send({ message: "Getting Profile with Email", data: matchedProfile });
  }

  if (city) {
    let matchedProfiles = profiles.filter((profile, index) => {
      if (profile.city === city) {
        return profile;
      }
    });
    return res
      .status(200)
      .send({ message: `Getting Profiles in ${city} `, data: matchedProfiles });
  }
  res.status(200).send({ message: "Getting all Profiles", data: profiles });
});

app.post("/profiles", (req, res) => {
  const payload = req.body;

  console.log("Payload: ", payload);

  if (!payload) {
    return res.status(400).send({ message: "Payload is mandatory" });
  }

  res.status(201).send({
    message: "Profile has been created successfully",
  });
});

app.put("/profiles/:profileId", (req, res) => {
  const profileId = req.params.profileId;

  // logic to update the data using profileId with the payload in req.body;

  res.status(200).send({ message: "Updating Profiles" });
});

app.delete("/profiles/:profileId", (req, res) => {
  const profileId = req.params.profileId;

  // logic to delete a profile using profileId

  res.status(200).send({ message: "Deleting Profiles" });
});

app.get("/profiles/:profileId", (req, res) => {
  const profileId = parseInt(req.params.profileId);

  if (!profileId) {
    return res.status(400).send({ message: "Profile Id is invalid / empty" });
  }

  let matchedProfile = profiles.find((profile, index) => {
    if (profile.id === profileId) {
      return profile;
    }
  });

  if (!matchedProfile) {
    res.status(400).send({
      message: `Profile with id ${profileId} does not exist`,
    });
  }

  res.status(200).send({
    message: `Profile with id ${profileId} is retrieved successfully`,
    data: matchedProfile,
  });
});

// app.post();

// app.put();

// app.delete();

app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});

// const http = require("http"); // importing http library (default library)
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const pathname = url.parse(req.url).pathname;

//   if (req.method === "GET") {
//     if (pathname === "/user") {
//       res.statusCode = 200;

//       res.end(
//         JSON.stringify({
//           name: "John",
//           email: "john@gmail.com",
//           city: "Chennai, India",
//         })
//       );
//     } else {
//       res.statusCode = 200;
//       res.end("Hello World");
//     }
//   }
// });

// server.listen(4000, () => {
//   console.log("App is running at PORT 4000");
// });

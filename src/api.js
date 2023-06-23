const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyD1MIdnWt1UKTn6tBgqk7OaktVjMP529UE",
  authDomain: "aqua-sentinel-a0a66.firebaseapp.com",
  databaseURL: "https://aqua-sentinel-a0a66-default-rtdb.firebaseio.com",
  projectId: "aqua-sentinel-a0a66",
  storageBucket: "aqua-sentinel-a0a66.appspot.com",
  messagingSenderId: "352878965210",
  appId: "1:352878965210:web:0e120ed9ac123d511650e3",
  measurementId: "G-QM6XN00HRX"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/Locations/Locations", (req, res) => {
  const { latitude, longitude } = req.body;

  database.ref("Locations/Locations").push({
    latitude,
    longitude
  });

  res.json({ success: latitude, longitude });
});

app.get("/Locations", (req, res) => {
  const locationsRef = database.ref("locations");

  locationsRef.once("value", (snapshot) => {
    const locations = [];

    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      locations.push({
        key: childKey,
        latitude: childData.latitude,
        longitude: childData.longitude
      });
    });

    res.json({ locations });
    console.log("Locations:", locations);
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});

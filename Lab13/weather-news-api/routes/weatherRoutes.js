const express = require("express");
const axios = require("axios");

const router = express.Router();

// Gets current weather details for the provided city.
router.get("/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
        },
      }
    );

    const weather = response.data;

    res.json({
      city: weather.name,
      temperature: weather.main.temp,
      condition: weather.weather[0].main,
      humidity: weather.main.humidity,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }

    res.status(500).json({ error: "Weather service unavailable" });
  }
});

module.exports = router;

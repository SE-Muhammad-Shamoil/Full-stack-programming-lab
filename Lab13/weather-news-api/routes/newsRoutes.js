const express = require("express");
const axios = require("axios");

const router = express.Router();

// Gets up to 10 top news headlines for the provided country code.
router.get("/:countryCode", async (req, res) => {
  try {
    const { countryCode } = req.params;
    const apiKey = process.env.NEWS_API_KEY;

    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: countryCode,
        apiKey,
      },
    });

    const articles = response.data.articles || [];

    if (articles.length === 0) {
      return res
        .status(404)
        .json({ error: "No headlines found for this country" });
    }

    res.json({
      country: countryCode,
      articles: articles.slice(0, 10).map((article) => ({
        title: article.title,
        source: article.source.name,
        url: article.url,
        publishedAt: article.publishedAt,
      })),
    });
  } catch (error) {
    if (
      error.response &&
      (error.response.status === 400 || error.response.status === 404)
    ) {
      return res
        .status(404)
        .json({ error: "No headlines found for this country" });
    }

    res.status(500).json({ error: "News service unavailable" });
  }
});

module.exports = router;

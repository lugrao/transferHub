import dotenv from "dotenv";

dotenv.config();

const getHotelbedsData = (url) =>
  fetch(url, {
    headers: {
      "Api-Key": process.env.API_KEY,
    },
  });

const controllers = {
  getTest: (req, res) => {
    res.send(
      JSON.stringify({
        message: "AGUANTE MESSI.",
      })
    );
  },
  getCountries: async (req, res) => {
    try {
      const response = await getHotelbedsData(
        "https://api.test.hotelbeds.com/transfer-cache-api/1.0/locations/countries?fields=ALL&language=ES&offset=1&limit=1000"
      );
      const data = await response.json();
      return res.send(data);
    } catch (e) {
      console.error(e);
      return res.send(e.message);
    }
  },
};

export default controllers;

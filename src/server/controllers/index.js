import dotenv from "dotenv";

dotenv.config();

const getHotelbedsData = (url) =>
  fetch(url, {
    headers: {
      "Api-Key": process.env.HOTELBEDS_API_KEY,
    },
  });

const controllers = {
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
  getAvailability: async (req, res) => {
    try {
      const response = await getHotelbedsData(
        "https://api.test.hotelbeds.com/transfer-api/1.0/availability/es/from/GPS/-31.4166948,-64.19012359999999/to/GPS/-31.3155152,-64.2136596/2024-04-17T12:15:00/2/0/0"
      );
      const data = await response.json();
      return res.send(data);
    } catch (e) {
      console.error(e);
      return res.send(e.message);
    }
  },
  getTerminals: async (req, res) => {
    try {
      const response = await getHotelbedsData(
        "https://api.test.hotelbeds.com/transfer-cache-api/1.0/locations/terminals?fields=ALL&language=es&offset=1"
      );
      const data = await response.json();
      return res.send(data);
    } catch (e) {
      return res.send(e.message);
    }
  },
};

export default controllers;

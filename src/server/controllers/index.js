const controllers = {
  getTest: (req, res) => {
    res.send(JSON.stringify({
        message: "AGUANTE MESSI."
    }));
  },
};

export default controllers;

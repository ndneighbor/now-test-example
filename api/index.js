module.exports = (req, res) => {
  let who = "anonymous";

  if (req.body && req.query && req.query.who) {
    who = req.query.who;
  } else if (req.query && req.query.who) {
    who = req.query.who;
  } else if (req.cookies && req.cookies.who) {
    who = req.cookies.who;
  }

  res.write(`Hello ${who}!`);
  res.end();
};

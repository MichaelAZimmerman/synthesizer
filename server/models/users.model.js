const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");

async function signup(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (users.length !== 0) {
      json.error = "Username already taken";
    } else {
      const hashed = await bcrypt.hash(password, 10);
      await query("INSERT INTO users (password, username) VALUES (?,?)", [
        hashed,
        username,
      ]);
      json = { ...json, success: true };
    }
  } catch (err) {
    console.log(err);
    json.error = "Something went wrong!";
  } finally {
    return res.send(json);
  }
}

async function login(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const user = users[0] || { password: 123456 };
    const matches = await bcrypt.compare(password, user.password);
    if (matches) {
      json = { ...json, success: matches, data: { username, id: user.id } };
    } else {
      json.error = "Invalid username / password";
    }
  } catch (err) {
    json.error = "Something went wrong.";
  } finally {
    return res.send(json);
  }
}

module.exports = { signup, login };

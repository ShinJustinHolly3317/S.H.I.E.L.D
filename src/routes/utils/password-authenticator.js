const authSecret = {
  name: process.env.HEADER_AUTH_NAME,
  password: process.env.HEADER_AUTH_PASSWORD,
}

module.exports = {
  passwordAuthenticator: (name, password) => {
    console.log(authSecret);
    // check name and password in header
    if (!name || !password) return false;
    
    console.log(name, password);
    if (name === authSecret.name && password === authSecret.password) {
      return true
    } else {
      return false
    }
  }
}
const bcrypt = require("bcryptjs");

class Bcrypt {
       constructor() {}

       async encryptPassword(password) {
              try {
                     const salt = await bcrypt.genSalt(10);
                     const hash = await bcrypt.hash(password, salt);
                     return hash;
              } catch (error) {
                     throw error;
              }
       }

       async matchPassword(password, savedPassword) {
              try {
                     return await bcrypt.compare(password, savedPassword);
              } catch (error) {
                     throw error;
              }
       }
}

module.exports = new Bcrypt();

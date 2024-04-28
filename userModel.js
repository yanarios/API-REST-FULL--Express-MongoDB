const mongoose = require("mongoose");
const userModel = new mongoose.Schema(
  {
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
  },
  {
    timestamps: true,
    versionkey: false,
  }
)

const ModelUser = mongoose.model("users", userModel); // Aquí se corrige el nombre del esquema
module.exports = ModelUser;

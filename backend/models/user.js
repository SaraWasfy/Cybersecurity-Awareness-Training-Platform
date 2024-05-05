const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    score: {
        type: Number,
        default: 0,
    },
    trophie: {
        type: Boolean,
        default: false,
    },
    star: {
        type: Boolean,
        default: false,
    },
    first: {
        type: Boolean,
        default: false,
    },
    second: {
        type: Boolean,
        default: false,
    },
    third: {
        type: Boolean,
        default: false,
    },
    Spot100: {
        type: Boolean,
        default: false,
    },
    quiz100: {
        type: Boolean,
        default: false,
    },
    welcome: {
        type: Boolean,
        default: true,
    },
    
  },
  { timestamps: true },
);

const user = mongoose.model("user", userSchema);
module.exports = user;


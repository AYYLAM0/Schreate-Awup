const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
  
    bid:{
      type: Number,
      required: true,
    },
    name:{
      type: String,
      required: true
    },
    company: {
      type: String,
      trim: true,
      required: "Enter company name"
    },
    budget: {
      type: Number,
      required: "Enter an amount"
    },
    dateStarted : {
      type: Date,
      default: new Date().getDate(),
      sparse: true
    },
    finishDate: {
        type: Date,
        default: new Date().getDate()+7,
        sparse: true
    },
    description:{
      type: String
    }
  }
);

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
  name: {
    type: String
  },
  number: {
    type: Number
  },
  method: {
    type: String
  },
  status: {
    type: String
  },
  additionalInfo: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

let Data = mongoose.model(Data, dataSchema);

module.exports = Data;

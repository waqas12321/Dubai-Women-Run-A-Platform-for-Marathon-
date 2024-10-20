const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  subheading: {
    type: String,
  },
  data: [
    {
      p1: {
        type: String,
      },
      p2: {
        type: String,
      },
      p3: {
        type: String,
      },
      p4: {
        type: String,
      },
    },
    {
        p1: {
          type: String,
        },
        p2: {
          type: String,
        },
        p3: {
          type: String,
        },
        p4: {
          type: String,
        },
      },
      {
        p1: {
          type: String,
        },
        p2: {
          type: String,
        },
        p3: {
          type: String,
        },
        p4: {
          type: String,
        },
      },
  ],
  images:[ 
    {
  img1:{
    type: String,
  },
 
    img2:{
        type: String,
      }
}],
});
module.exports = mongoose.model("News", newsSchema);

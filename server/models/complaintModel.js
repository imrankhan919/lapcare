const { mongoose } = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    laptop: {
      type: String,
      enum: ["apple", "lenevo", "dell", "hp", "acer", "samsung"],
      requried: true,
    },
    status: {
      type: String,
      enum: ["open", "closed", "pending"],
      default: "open",
      requried: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);

import mongoose, { Schema, Document } from "mongoose";

interface ITweet extends Document {
  content: string;
  owner: string;
}

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model<ITweet>("Tweet", tweetSchema);

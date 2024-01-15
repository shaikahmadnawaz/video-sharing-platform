import mongoose, { Schema, Document } from "mongoose";

interface ILike extends Document {
  video?: string;
  comment?: string;
  tweet?: string;
  likedBy: string;
}

const likeSchema: Schema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model<ILike>("Like", likeSchema);

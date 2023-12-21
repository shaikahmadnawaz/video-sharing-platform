import mongoose, { Schema, Document } from "mongoose";

interface ISubscription extends Document {
  subscriber: string;
  channel: string;
}

const subscriptionSchema: Schema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // One who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // One who is being subscribed to
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model<ISubscription>(
  "Subscription",
  subscriptionSchema
);

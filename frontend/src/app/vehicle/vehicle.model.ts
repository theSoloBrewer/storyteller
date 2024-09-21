import { model, Schema } from "mongoose";

export interface IVehicle {
  _id: String;
  title: String;
  category: [String];
  nickname: String;
  designation: String;
  //creation: { type: Schema.Types.ObjectId, ref: "Event" },
  //destruction: { type: Schema.Types.ObjectId, ref: "Event" },
  //current_location: { type: Schema.Types.ObjectId, ref: "Place" },
  //manufacture: { type: Schema.Types.ObjectId, ref: "Organization" },
  //owner: { type: Schema.Types.ObjectId, ref: "Character" },
  armor: String;
  weapons: String;
}

export const vehicleProps = {
  title: String,
  category: [String],
  nickname: String,
  designation: String,
  //creation: { type: Schema.Types.ObjectId, ref: "Event" },
  //destruction: { type: Schema.Types.ObjectId, ref: "Event" },
  //current_location: { type: Schema.Types.ObjectId, ref: "Place" },
  //manufacture: { type: Schema.Types.ObjectId, ref: "Organization" },
  //owner: { type: Schema.Types.ObjectId, ref: "Character" },
  armor: String,
  weapons: String,
};

export const Vehicle = model<IVehicle>('Vehicle', new Schema<IVehicle>(vehicleProps));


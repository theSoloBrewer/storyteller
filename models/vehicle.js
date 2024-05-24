import mongoose from "mongoose";

const { Schema, model } = mongoose;

const vehicleSchema = new Schema({
    title: String,
    category: [{ type: String }],
    nickname: String,
    designation: String,
    creation: { type: Schema.Types.ObjectId, ref: 'Event' },
    destruction: { type: Schema.Types.ObjectId, ref: 'Event' },
    current_location: { type: Schema.Types.ObjectId, ref: 'Place' },
    manufacture: { type: Schema.Types.ObjectId, ref: 'Organization' },
    owner: { type: Schema.Types.ObjectId, ref: 'Character' },
    armor: String,
    weapons: String,
})
export const Vehicle = model('Vehicle', vehicleSchema);

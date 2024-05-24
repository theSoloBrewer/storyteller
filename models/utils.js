import mongoose from "mongoose";
const { Schema, model } = mongoose;

const DimensionSchema = new Schema({
    height: Number,
    width: Number,
    length: Number,
    weight: Number,
    distance_unit: String,
    mass_unit: String
});

const EventSchema = new Schema({
    datetime: Date,
    place: { type: Schema.Types.ObjectId, ref: 'Place' },
    cirumstances: String
});

export const Dimension = model('Dimension', DimensionSchema);
export const Event = model('Event', EventSchema);
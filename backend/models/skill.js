import mongoose from "mongoose";

const { Schema, model } = mongoose;

const skillSchema = new Schema({
    title: String,
    ability: String,
    prerequisites: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    level: Number
})
export const Skill = model('Skill', skillSchema);

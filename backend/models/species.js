import mongoose from "mongoose";

const { Schema, model } = mongoose;

const speciesSchema = new Schema({
    scientific_class: String,
    origin: String,
    parent: { type: Schema.Types.ObjectId, ref: 'Species' },
    geographic_distribution: String,
    discovered: { type: Schema.Types.ObjectId, ref: 'Event' },
    discovered_by: { type: Schema.Types.ObjectId, ref: 'Character' },
    extinct: Boolean,
    conservation: String,
    anatomy: String,
    capabilities: String,
    //'reproduction
    gestation: String,
    growth_stages: String,
    growth_rate: String,
    avg_lifespan: Number,
    ecology_habitate: String,
    dietary_needs: String,
    psychology: String,
    traits: [{ type: String }],
    avg_dimensions: { type: Schema.Types.ObjectId, ref: 'Dimension' }
})
export const Species = model('Species', speciesSchema);

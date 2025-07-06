import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PlaceSchema = new Schema({
    name: String,
    type: Array,
    founding_date: Date,
    founders: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    ruined: Date,
    ruler: { type: Schema.Types.ObjectId, ref: 'Character' },
    ruler_title: String,
    controlling_org: { type: Schema.Types.ObjectId, ref: 'Organization' },
    alt_names: String,
    population_size: Number,
    demonym: String,
    demographics: String,
    governmental_model: String,
    infrastructure: String,
    districts: String,
    assets: String,
    defences: String,
    industry: String,
    guilds_factions: String,
    history: String,
    points_of_interest: String,
    tourism: String,
    architecture: String,
    geography: String,
    climate: String,
    resources: String,
})

export const Place = model('Place', PlaceSchema);

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ethnicitySchema = new Schema({
    title: String,
    //--traditions--
    feminine_names: [{ type: String }],
    masculine_names: [{ type: String }],
    unisex_names: [{ type: String }],

    //--ideals--
    beauty: String,
    gender: String,
    courtship: String,
    relationship: String,

    //--customs--
    codes_values: [{ type: String }],
    dialects: [{ type: String }],
    etiquette: String,
    dress_code: String,
    art_architechture: String,
    food: String,
    heritage: String,
    traditions: String,
    rites_of_passage: String,
    funerary_memorial: String,
    taboos: String,
    myths_legends: String,
    valued_figures: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    technology: String,
});

export const Ethnicity = model('Ethnicity', ethnicitySchema);
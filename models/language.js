import mongoose from "mongoose";

const { Schema, model } = mongoose;

const languageSchema = new Schema({
    title: String,
    parent_lang: { type: Schema.Types.ObjectId, ref: 'Language' },
    //'spoken_by
    //--structure--
    phonology: String,
    morphology: String,
    syntax: String,
    vocabulatry: String,
    writing_system: String,
    phonetics: String,
    tense: String,
    sentance_structure: String,
    adjective_order: String,
    structural_marker: String,

    //--common usage--
    common_phrases: [{ type: String }],
    common_names: [{ type: String }],
    geographic_distrobution: String,

    //'dictionary
})
export const Language = model('Language', languageSchema);
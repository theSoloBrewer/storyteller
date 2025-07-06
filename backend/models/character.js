import mongoose from "mongoose";

const { Schema, model } = mongoose;

const characterSchema = new Schema({

    //--general--
    eyes: String,
    skin: String,
    hair: String,
    dimensions: { type: Schema.Types.ObjectId, ref: 'Dimension' },
    sex: String,
    gender: String,
    presentation: String,

    //--origins--
    age: Number,
    pronoun: String,
    species: { type: Schema.Types.ObjectId, ref: 'Species' },
    ethnicities: [{ type: Schema.Types.ObjectId, ref: 'Ethnicity' }],
    family: { type: Schema.Types.ObjectId, ref: 'Organization' },

    //--Current state--
    religion: { type: Schema.Types.ObjectId, ref: 'Organization' },
    status_current_quest: String,
    location: { type: Schema.Types.ObjectId, ref: 'Place' },
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
    residence: { type: Schema.Types.ObjectId, ref: 'Place' },
    affiliations: [{ type: Schema.Types.ObjectId, ref: 'Organization' }],
    conditions: [{ type: String }],
    alignment: String,
    health_counter: Number,

    //--birth--
    birth: { type: Schema.Types.ObjectId, ref: 'Event' },

    //--death--
    death: { type: Schema.Types.ObjectId, ref: 'Event' },

    //--nameing--
    current_title: String,
    given_name: String,
    middle_name: String,
    family_name: String,
    maiden_name: String,
    suffix: String,
    alias: String,

    //--mental--
    history: String,
    gender_identity: String,
    sexuality: String,
    education: String,
    employment: String,
    accomplishments: String,
    failures: String,
    trauma: String,
    intellect: String,
    morality: String,
    taboos: String,
    languages: String,

    //--physical--
    condition: String,
    body_features: [{ type: String }],
    facial_features: [{ type: String }],
    identifying_features: [{ type: String }],
    quirks: [{ type: String }],
    accessories: [{ type: String }],
    equipment: [{ type: String }], //change to items
    abilities: [{ type: String }],

    //--personal--
    motivation: String,
    catchphrases: String,
    skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    likes_dislikes: [{ type: String }],
    virtures_perks: [{ type: String }],
    vices: [{ type: String }],
    tics: [{ type: String }],
    hygiene: String,

    //--social--
    complete_titles: [{ type: String }],
    reign: String,
    wealth: String,
    family_ties: String,
    religious_views: String,
    social_aptitude: String,
    mannerisms: String,
    pets_hobbies: [{ type: String }],
    speech_characteristics: String,

    //--divine--
    organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
    realm: { type: Schema.Types.ObjectId, ref: 'Place' },
    //'classification of creature deity god
    classification: String,
    domains: String,
    artifacts: [{ type: String }],
    literature: [{ type: String }],
    symbols: String,
    tenets: String,
    goals: String,
    holidays: [{ type: String }],

})

export const Character = model('Character', characterSchema);

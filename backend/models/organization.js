import mongoose from "mongoose";

const { Schema, model } = mongoose;

const organizationSchema = new Schema({

    //--Required--
    basic_name: String,
    basic_leader: { type: Schema.Types.ObjectId, ref: 'Character' },
    basic_leader_Title: String,
    basic_founding: Date,

    basic_dissolution: Date,
    //list of types of organizations
    basic_type: String,

    //--General--
    general_motto: String,
    general_altName: String,
    symbol: { type: Buffer, contentType: String },
    general_parent: { type: Schema.Types.ObjectId, ref: 'Organization' },

    founding: { type: Schema.Types.ObjectId, ref: 'Event' },
    dissolution: { type: Schema.Types.ObjectId, ref: 'Event' },
    leader_fk: { type: Schema.Types.ObjectId, ref: 'Character' },
    leader_title: String,
    founders: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    location: { type: Schema.Types.ObjectId, ref: 'Place' },
    org_structure: String,
    private_agenda_culture: String,
    public_agenda_promises: String,
    assets: String,
    history: String,
    disbandment_story: String,
    predecessor: { type: Schema.Types.ObjectId, ref: 'Organization' },
    successor: { type: Schema.Types.ObjectId, ref: 'Organization' },

    //--Geopolitical--
    capital_HQ: { type: Schema.Types.ObjectId, ref: 'Place' },
    //' choice of government democracy vs dictatorship
    government_system: String,
    //' choice of federation feudal state
    power_structure_system: String,
    //' choice capitalist communist
    economic_system: String,
    official_languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    official_currency: String,
    legislative_body: String,
    judicial_body: String,
    executive_body: String,
    demography_population: String,
    //https://mongoosejs.com/docs/populate.html#cross-db-populate
    alliances: {
        type: Schema.Types.ObjectId,
        refPath: 'docModel'
    },
    docModel: {
        type: String,
        required: true,
        enum: ['Character', 'Organization']
    },
    laws: String,
    territory: String,
    official_religion: { type: Schema.Types.ObjectId, ref: 'Organization' },
    agriculture_industry: String,
    trade_transport: String,
    import: String,
    export: String,
    education: String,
    infrastructure: String,
    tech_science_level: String,

    //--Religious--
    deities: { type: Schema.Types.ObjectId, ref: 'Character' },
    mythology: String,
    orgins: String,
    cosmology: String,
    tenets_of_faith: String,
    priesthood: String,
    ethics: String,
    granted_divine_powers: String,
    political_intrigue_influance: String,
    worship: String,
    sects: String,

    //--Military--
    //'army - manytomany formations
});

export const Organization = model('Organization', organizationSchema);

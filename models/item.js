import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itemSchema = new Schema({

    title: { type: String, required: true },
    dimensions: { type: Schema.Types.ObjectId, ref: 'Dimension' },
    base_price: Number,
    rarity: String,
    history: String,
    creation: { type: Schema.Types.ObjectId, ref: 'Event' },
    destruction: { type: Schema.Types.ObjectId, ref: 'Event' },
    significance: String,
    mechanics: String,

    //--construction--
    materials: [{ type: String }],
    tooling: String,
    manufacturing: String,

    //--categorization--
    //' modeled from

    //' List: is this a weapon, food, armor, ammo, art, book
    purpose: { type: Schema.Types.ObjectId, ref: 'Purpose' },
    manufacturer: { type: Schema.Types.ObjectId, ref: 'Organization' },
    creator: { type: Schema.Types.ObjectId, ref: 'Character' },
    owner: {
        type: Schema.Types.ObjectId,
        refPath: 'docModel'
    },
    docModel: {
        type: String,
        required: [function () { return !this.owner === ""; }, 'YOUR CUSTOME MSG HERE'],
        enum: ['Character', 'Organization']
    },
    technologies: [{ type: String }],
    condition: String,
    location: { type: Schema.Types.ObjectId, ref: 'Place' }

});

export const Item = model('Item', itemSchema);

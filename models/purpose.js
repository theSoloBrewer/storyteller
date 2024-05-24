import mongoose from "mongoose";

const { Schema, model } = mongoose;

const weaponSchema = new Schema({
    damage: Number,
    type: {
        type: Schema.Types.ObjectId,
        refPath: 'docModel'
    },
    docModel: {
        type: String,
        required: true,
        enum: ['Projectile', 'Melee', 'Explosive']
    },
});

const projectileSchema = new Schema({
    range: Number,
    fire_rate: Number,
    current_ammo: Number,
    ammo_capacity: Number,
    ammo_type: Number
});
const meleeSchema = new Schema({
    speed: String
});
const explosiveSchema = new Schema({
    radius: Number,
    remote: Boolean
});

const armorSchema = new Schema({
    protection: Number,
    category: String
})

const foodSchema = Schema({
    health: Number
})

export const Weapon = model('Weapon', weaponSchema);
export const Projectile = model('Projectile', projectileSchema);
export const Melee = model('Melee', meleeSchema);
export const Explosive = model('Explosive', explosiveSchema);

export const Armor = model('Armor', armorSchema);
export const Food = model('Food', foodSchema);
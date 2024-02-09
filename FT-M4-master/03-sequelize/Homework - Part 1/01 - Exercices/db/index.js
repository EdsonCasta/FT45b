require('dotenv').config()
const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

const { Character, Ability, Role } = db.models

Character.hasMany(Ability)
Ability.belongsTo(Character)

Character.belongsToMany(Role, {through:'character_role'})

Role.belongsToMany(Character, {through: 'character_role'})

module.exports = {
   ...db.models,
   db,
   Op,
};

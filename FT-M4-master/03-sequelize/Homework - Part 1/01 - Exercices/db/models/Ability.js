const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'compositeIndex'
      
    },
    description: {
      type: DataTypes.TEXT
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: 'compositeIndex',
      validate: {
        customValidator(value){
          if(value < 10.0 || value > 250.0)
          throw Error('Invalid mana_cost')
        }
      }
    }
  });
};
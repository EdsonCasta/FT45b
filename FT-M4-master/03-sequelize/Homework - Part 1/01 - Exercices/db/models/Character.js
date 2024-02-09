const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.STRING(5),
         primaryKey: true,
         allowNull: false,
         validate: {
            costumValidator(value){
               if(value.toLowerCase() === "henry")
               throw Error('El valor no puede ser Henry')
            }
         }
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         validate: {
            notIn: [["Henry", "SoyHenry", "Soy Henry"]]
         }
      },
      age: {
         type: DataTypes.INTEGER,
      },
      race: {
         type: DataTypes.ENUM('Human', 'Elf', 
         'Machine', 'Demon', 'Animal', 'Other'),
         defaultValue: 'Other'
      },
      hp: {
         type: DataTypes.FLOAT,
         allowNull: false
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: false
      }
   }, {
      timestamps: false
   });
};

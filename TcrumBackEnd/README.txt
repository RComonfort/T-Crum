For both models, migrations and controllers, the names will be those present in the Relational Diagram of the project, same goes for attribute names.

To initiate the server:
    npm run start:dev 


-----------------------------
MODEL FILES
_____________________________

To create a new model and migration file for a new table with SequelizeCli, use: 
    
    sequelize model:create --name table_name --attributes "column1_name: column1_type, column2_name: column2_type,..."

A model is the file that tells sequelize how to manipulate a table. A migration file, is the actual definition that gets translated into Postgres

After the creation of the model, all changes made to it must be manually updated in the migration file as well.

-----------------------------
MIGRATION FILES
_____________________________

The "up" function performs a modification on the database, that could be reverted with the "down" function, in case we want to undo a migration. For example, a table creation in the "up" function needs the "down" function to drop that table.

Sequelize only migrates files once, so migration files cannot be updated, another migration file must be created to perform any modifications to the database. See query interface's methods:
http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html 

This command generates an independent squeleton migration file:
    
    sequelize migration:create --name file_name

To perform the migration for unmigrated files, use:
    
    sequelize db:migrate

Automatically, Sequelize adds an id, createdAt and updatedAt columns. The id can be renamed or discarded if we do not want a primary key, just remember to reflect those changes on the model file. Both date colums are managed by Sequelize and by default, will generate an error if no present. 

-----------------------------
ASSOCIATIONS 
_____________________________
To perform a Link/Join Table for a n:m relantionship with tables T1 and T2: Both T1 and T2 model files must declare the relationship in its associate function as:
    
    T1.associate = function(models) {
        T1.belongsToMany(models.T2, {through: 'LinkTableModelName', foreignKey: 'T1id', otherKey: 'T2id'})
    };
The foreignKey and otherKey options declare the column names for the Link Table, they are not necessary, but recommended to avoid confusion. On T2's model, we declare the same association again, but with T1 as target:
    
    T2.associate = function(models) {
        T2.belongsToMany(models.T1, {through: 'LinkTableModelName', foreignKey: 'T2id', otherKey: 'T1id'})
    };

We will need a model (to develop the CRUD) and migration (to actually having the table in the DB) files for the link table. The model does not need to declare anything in the association function. More columns can be added if you so desire. The MIGRATION FILE, on the other hand, needs both foreign keys:

    .
    .
    .
    T1id: {                 //Notice the column name must be the same as stated in the belongsToMany association
          type: Sequelize.INTEGER,
          references: {
              model: 'T1s', //This is actually the referenced table name (from the migration file), not the model name
              key: 'id'     //Name of the field referenced (usually the target table's primary key)
          },
          allowNull: false
      },
    T2id: {                  //Notice the column name must be the same as stated in the belongsToMany association
        type: Sequelize.INTEGER,
        references: {
            model: 'T2s',   //This is actually the referenced table name (from the migration file), not the model name
            key: 'id'       //Name of the field referenced (usually the target table's primary key)
        },
        allowNull: false
      }
      .
      .
      .

    Both columns can be set as primary keys with: "primaryKey: true," if we choose so.

For 1:1 or 1:n relationships, both models have to declare the association inside its associate function. For 1:1 relantionships, use belongTo in source table (the one that has the Foreign Key) and later declare this column in the migration file. The target table must have a hasOne association. For a 1:n, it is the same, but the target table needs a hasMany association instead in its model file (like scotch.io's tutorial).

More on associations: http://docs.sequelizejs.com/manual/tutorial/associations.html 
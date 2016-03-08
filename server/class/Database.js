/*
CLASS: Databas
DESCRIPTION: Handles database interactions
*/

module.exports = function() {	
	// Attributes
	this.fileName = __dirname + "\\..\\data\\database\\CodeDB.db";
	this.sqlite3;
	var db;
	
	// Methods
	this.init = function(sqlite) {
		this.sqlite3 = require(__dirname + '\\..\\resources\\node_modules\\sqlite3').verbose();
		db = new this.sqlite3.Database(this.fileName);
	};
	
	this.queryPrep = function(query, valuesArray, callback) {
		if (valuesArray.length > 0) {
			db.run("BEGIN TRANSACTION");
			db.run(query, valuesArray, function(err, row) {
				callback(err, row);
			});
			db.run("END");
		}
		else {
			db.serialize(function() {
				db.each(query, function(err, row) {
					callback(err, row);
				});
			});
		}
	};
	
	this.insert = function (tableName, colToInsert, valuesArray) {
		var query;
		db.serialize(function() {
			var columns = "(";
			for (var i = 0; i < colToInsert.length; i++) {
				columns += colToInsert[i];
				if (i + 1 < colToInsert.length) 
					columns += ", ";
			}
			columns += ")";
			
			var values = "(?";
			for (var i = 1; i < valuesArray.length; i++) {	// 1 -> 1 "?" already is in variable
				values += ", ?";
			}
			values += ");";
			
			query = "INSERT INTO " + tableName + " " + columns + " VALUES " + values;
			
			db.run("BEGIN TRANSACTION");
			db.run(query, valuesArray, function(err) {
				if (err)
					console.log(err);
				else
					console.log(valuesArray.length + " item(s) added into " + tableName);
			});
			db.run("END");
		});
	};
	
	this.update = function (tableName, colToUpdate, valuesArray, whereClause, whereValue) {
		var query;
		db.serialize(function() {
			if (colToUpdate.length == valuesArray.length) {
				var set = "";
				for (var i = 0; i < colToUpdate.length; i++) {
					set += colToUpdate[i] + "=?";
					if (i + 1 < colToUpdate.length) 
						set += ", ";
				}
				
				if (typeof whereClause === 'string' && typeof whereValue === 'string') {
					var where = whereClause + "=" + "'" + whereValue + "';";
					
					query = "UPDATE " + tableName + " SET " + set + " WHERE " + where;
					
					db.run("BEGIN TRANSACTION");
					db.run(query, valuesArray, function(err) {
						if (err)
							console.log(err);
						else
							console.log(valuesArray.length + " item(s) updated into " + tableName);
					});
					db.run("END");
				}
			}
		});
	};
};

/************************* EXAMPLES **************************/
// Select prepared example
/*database.queryPrep("select * from " + modules.config.database.tables.user.name, [], function(err, row) {
	if (err)
		console.log(err);
	else
		console.log(row);
});*/
// Update example
/*var colToUpdate = [modules.config.database.tables.user.fields.username];
database.update(modules.config.database.tables.user.name, colToUpdate, ['pix0ff'], modules.config.database.tables.user.fields.username, 'Pixoff');
*/	
// Account creation example
/*var values = ['Pixoff', 'password', 'www.rien.com/123.png', '0'];
var colToInsert = 	[modules.config.database.tables.user.fields.username, 
					modules.config.database.tables.user.fields.pass, 
					modules.config.database.tables.user.fields.avatarURL, 
					modules.config.database.tables.user.fields.inscriptionDate];					
database.insert(modules.config.database.tables.user.name, colToInsert, values);*/
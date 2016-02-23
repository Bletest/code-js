/*
CLASS: Databas
DESCRIPTION: Handles database interactions
*/

module.exports = function() {	
	// Attributes
	this.fileName = "M:/CodeJS/trunk/server/data/database/CodeDB.db";
	this.sqlite3;
	var db;
	
	// Methods
	this.init = function(sqlite) {
		this.sqlite3 = require('M:/CodeJS/trunk/server/resources/node_modules/sqlite3').verbose();
		db = new this.sqlite3.Database(this.fileName);
	};
	
	// Doesn't work yet
	this.query = function(query, type, callback) {
		db.serialize(function() {
			this.connection = true;
			// Select
			if (type == 0) {
				db.each(query, function(err, row) {
					if (err)
						callback(err);
					else
						callback(row);
				});
			}
		});
	};
	
	this.insert = function (tableName, colToInsert, valuesArray) {
		db.serialize(function() {
			this.connection = true;
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
			
			var query = "INSERT INTO " + tableName + " " + columns + " VALUES " + values;
			
			var prepare = db.prepare(query);
			console.log(query);
			for (var i = 0; i < valuesArray.length; i++) {
				prepare.run(valuesArray[i]);
			}
			prepare.finalize();
		});
	}
	/*
	this.insert = function (tableName, values) {
		db.serialize(function() {
			// Insert
			var columns = " (";
			for (var i = 1; i < tableName.fields.length; i++) {		// 1 -> don't take primary key
				columns += tableName.fields[i];
				if (i + 1 < tableName.fields.length) 
					columns += ", ";
			}
			columns += ")";
			console.log(columns);
			
			var values = " values(?";
			for (var i = 1; i < tableName.fields.length - 1; i++) {		// 1 -> 1 "?" already is in variable
				values += ", ?";
			}
			values += ");";
			
			var prepare = db.prepare("insert into " + tableName.name + columns + values);
			for (var i = 0; i < values.length; i++) {
				prepare.run(values[i]);
			}
			prepare.finalize();
		});
	};
	*/
};
module.exports = {
	test: {
		host: 'localhost',
		database: 'video_ad',
		username: 'aduser',
		password: 'adtest',
		port: 3306,
		dialect: "mysql",
		logging: true,
		dialectOptions: {
			multipleStatements: true
		}
	},
	development: {
		host: 'localhost',
		database: 'shield',
		username: 'testuser',
		password: 'test',
		port: 3306,
		dialect: "mysql",
		logging: true,
		dialectOptions: {
			multipleStatements: true
		}
	},
	production: {
		username: process.env.DB_AD_WRITE_USERNAME,
		password: process.env.DB_AD_WRITE_PASSWORD,
		database: process.env.DB_AD_WRITE_DATABASE,
		host: process.env.DB_AD_WRITE_ADDRESS,
		dialect: "mysql",
		logging: true
	},
};

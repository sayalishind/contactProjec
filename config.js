module.exports = {
    database: {
      connectionString: process.env.DATABASE_URL || 'postgresql://username:password@localhost:5432/contact_list_db',
    },
    port: process.env.PORT || 3000,
  };
  
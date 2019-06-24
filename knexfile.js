// Update with your config settings.

const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/techstuff.sqlite3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection:
      "postgres://ydajioorfpdzyu:e4f5600d5b18537ac1b0ac7b5de573a8b36d2da6973913eea374e2348fc09928@ec2-50-19-222-129.compute-1.amazonaws.com:5432/d1r983q3hagf7m",
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

'use strict';

const userTableScript = `
CREATE TABLE IF NOT EXISTS "user"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name NVARCHAR(64)  NOT NULL,
    surname NVARCHAR(64)  NOT NULL
);
`;

const wishTableScript = `
CREATE TABLE IF NOT EXISTS "wish"
(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name NVARCHAR(64)  NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user" (id)
                ON DELETE NO ACTION ON UPDATE NO ACTION
);
`;

const santaForUserTableScript = `
CREATE TABLE "santa_for_user"
(
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      santa_id INTEGER  NOT NULL,
      user_id INTEGER NOT NULL,
      FOREIGN KEY (santa_id) REFERENCES "user" (id)
                  ON DELETE NO ACTION ON UPDATE NO ACTION
      FOREIGN KEY (user_id) REFERENCES "user" (id)
                  ON DELETE NO ACTION ON UPDATE NO ACTION
);
  `;

module.exports = {
  userTableScript,
  wishTableScript,
  santaForUserTableScript,
};

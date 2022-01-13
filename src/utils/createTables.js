'use strict';

const createTables = (db, tablesScripts) => {
  const scripts = Object.values(tablesScripts);

  for (const script of scripts) {
    db.run(script);
  }
};

module.exports = createTables;

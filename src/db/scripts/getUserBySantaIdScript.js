'use strict';

const script = `SELECT u.id, u.name, u.surname
                FROM santa_for_user s
                INNER JOIN user u
                ON u.id = s.user_id
                WHERE s.santa_id = ?`;

module.exports = script;

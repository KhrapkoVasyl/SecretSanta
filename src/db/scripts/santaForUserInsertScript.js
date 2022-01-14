'use strict';

const script = `INSERT INTO santa_for_user(santa_id , user_id)
                VALUES($sid, $uid)`;

module.exports = script;

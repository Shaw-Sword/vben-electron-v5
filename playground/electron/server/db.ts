import { join, dirname } from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const  Db  = require('better-sqlite3');
import { app } from 'electron';



// // 获取当前文件路径（兼容 ESM）

const dbPath = join(app.getPath('userData'), 't1.db');
//
const t1 = new Db(dbPath);

// 创建表(如果不存在)
const sql = t1.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  );
`);

sql.run();

// 插入数据
const stmt = t1.prepare(`
  INSERT INTO users (name) VALUES (?);
`);

stmt.run('xiao');




export function b(){
  console.log('bbbbbbb',dbPath);
  console.log('cccc',Db);
}


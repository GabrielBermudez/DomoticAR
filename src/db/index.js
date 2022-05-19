import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('rooms.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS  rooms (id INTEGER PRIMARY KEY  NOT NULL , name TEXT NOT NULL, image TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
                [],
                () => { resolve() },
                (_,  err ) => { reject(err) })
        })
    })

    return promise;
};

export const insertRooms = (
    name,
    image,
    lat,
    lng
) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO rooms (name, image, lat, lng) VALUES (?,?,?,?);',
                [name, image, lat, lng],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const findAllRooms = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM rooms;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

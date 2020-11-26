import * as SQLite from 'expo-sqlite'
let db = SQLite.openDatabase('restaurantDb.db')
export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXIST restaurantDb (id INTERGER NOT NULL, data TEXT NOT NULL);",
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}
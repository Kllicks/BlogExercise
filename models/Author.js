const db = require('./db');

class Author{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    // CREATE
    static add(name) {
        return db.one(`
            insert into authors 
                (name)
            values
                ($1)
            returning id
            `, [name])
            .then(data => {
                const u = new Author(data.id, name);
                return u;
            })
    }

    // RETRIEVE
    static getById(id){
        return db.one(`select * from authors where id = $1`, [id])
            .then(result => {
                const u = new Author(result.id, result.name);
                return u;
            })
    }

    static searchByName(name) {
        return db.any(`
            select * from authors 
                where name ilike '%$1:raw%'
                `, [name])
    }

    static getAll() {
        return db.any(`select * from authors
                        `).then(authorArray => {
                            // transform array of objects
                            // into array of Author instances
                            let instanceArray = authorArray.map(authorObj => {
                                let u = new Author(authorObj.id, authorObj.name);
                                return u;
                            });
                            return instanceArray;
                        })
    }

    // UPDATE
    updateName(newName) {
        this.name = newName;
        return db.result(`update authors
                            set name=$2
                            where id=$
                            `, [this.id, newName]);
    }

    // DELETE
    delete() {
        return db.result(`delete from authors where id = $1`, [this.id]);
    }

    static deleteById(id){
        return db.result(`delete from authors where id = $1`, [id])
    }

}

// Export
module.exports = Author;
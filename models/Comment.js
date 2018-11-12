const db = require('./db');

class Comment{
    constructor(id, commentContent, commentDate){
        this.id = id;
        this.commentContent = commentContent;
        this.commentDate = commentDate;
    }

    // CREATE
    static add(commentContent, commentDate) {
        return db.one(`insert into comments (commentContent, commentDate)
            values
                ($1, $2)
            returning id
        `, [commentContent, commentDate]) 
    }

    // RETRIEVE
    static getById(id){
        return db.one(`select * from comments where id = $1`, [id])
            .then(result => {
                const u = new Comment(result.id, result.commentContent, result.commentDate);
                return u;
            })
    }

    // UPDATE


    // DELETE


    
}

// Export
module.exports = Comment;
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


    // UPDATE


    // DELETE


    
}

// Export
module.exports = Comment;
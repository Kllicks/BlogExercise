const db = require('./db');

class Post{
    constructor(id, title, postContent, postDate){
        this.id = id;
        this.title = title;
        this.postContent = postContent;
        this.postDate = postDate;
    }

    // CREATE
    static add(title, postContent, postDate) {
        return db.one(`insert into posts (title, postContent, postDate)
            values
                ($1, $2, $3)
            returning id
        `, [title, postContent, postDate]) 
    }

    // RETRIEVE


    // UPDATE


    // DELETE


    
}

// Export
module.exports = Post;
-- AUTHORs
    -- name
create table authors (
    id serial primary key,
    name text
);

-- POSTs
    -- title
    -- postContent
    -- postDate
create table posts (
    id serial primary key,
    title text,
    postContent text,
    postDate date,
    author_id integer references authors (id)
);


-- COMMENTs
    -- commentContent
    -- commentDate
create table comments (
    id serial primary key,
    commentContent text,
    commentDate date,
    author_id integer references authors (id)
)


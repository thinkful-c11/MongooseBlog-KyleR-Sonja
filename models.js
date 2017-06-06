const mongoose = require('mongoose');
const moment = require('moment');
// require('mongodb-moment');

const blogSchema = mongoose.Schema({
    title: { type: String, require: true },
    author: {
        firstName: String,
        lastName: String,
    },
    content: { type: String, require: true },
    created: { type: Date, default: Date.now() }
});

blogSchema.virtual('authorFullName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogSchema.methods.apiRepr = function() {
    return {
        title: this.title,
        content: this.content,
        author: this.authorFullName,
        created: this.created
    };
};

const Blog = mongoose.model('Blog', blogSchema);
module.exports = {Blog};

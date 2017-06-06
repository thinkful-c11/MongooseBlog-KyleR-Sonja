exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://api_user:password@ds113282.mlab.com:13282/blog-posts-db';
exports.PORT = process.env.PORT || 8080;
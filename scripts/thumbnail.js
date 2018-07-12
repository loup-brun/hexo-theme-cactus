/**
* Thumbnail Helper
* @description Get the thumbnail url from a post
* @example
*     <%- thumbnail(post) %>
*/
hexo.extend.helper.register('thumbnail', function (post, default_banner) {
    return post.thumbnail || post.banner || default_banner || '';
});

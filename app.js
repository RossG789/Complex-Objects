const blogPost = {
  title: "My First Post",
  author: {
    name: "Bob",
    lastName: "Gray",
    age: 29,
    favouriteColour: "Red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays",
};

// console.log(blogPost.author.name);

// console.log(blogPost.tags[0]);

// console.log(blogPost.tags.length);

// console.log(
//   `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
// );

for (i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

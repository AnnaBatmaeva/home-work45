import axios from "axios";

export default async function getPosts(updatePosts) {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return posts.data
}
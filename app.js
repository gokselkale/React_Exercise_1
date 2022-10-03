import axios from "axios";

export default async (userId) => {
    const user = await (await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)).data;
    const posts = await (await axios(`https://jsonplaceholder.typicode.com/posts?id=1`)).data;

    return {
        user,
        posts
    }
}
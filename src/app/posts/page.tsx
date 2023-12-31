import { getAllPosts } from '../../service/posts'
import FilterablePosts from '../../components/FilterablePosts';

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)))
    return (
        <FilterablePosts posts={posts} categories={categories} />)
}
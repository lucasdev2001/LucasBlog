import { useRouter } from 'next/router';
import dbConnect from '../../lib/dbConnect';
import BlogPost from '../../models/BlogPost';
import BlogCard from '../../components/BlogCard';

export async function getServerSideProps({params}) {
    await dbConnect();
    const post = await BlogPost.findById(params.id).lean();
    post._id = post._id.toString();

    return {props : { post }}
}

export default function postPage({post}) {
    const router = useRouter();

    return <>
        <BlogCard title={post.title} subtitle = {post.subtitle} content={post.content} key={post._id}  id={post._id}/>
    </>
}
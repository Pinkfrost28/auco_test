import Image from 'next/image'
import PostCard from './PostCard'
import CommentCard from './CommentCard'
import Link from "next/link";

export default function DetailPost({ post, comments }) {
    return (

        <div>

            <div>
                <PostCard post={post} />
            </div>
            <h3 className="font-semibold ml-2">Comments ({comments.length})</h3>
            <div className='mt-4'>
                {comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
            </div>
            <div className="mt-4 ml-2">
                <Link href="/posts" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out mb-15 ">
                    Volver a Posts
                </Link>
            </div>

        </div>
    );
}


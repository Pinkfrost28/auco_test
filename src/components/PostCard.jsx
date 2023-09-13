import Link from "next/link";

export default function PostCard({ post }) {
  return (
<div key={post.id} className="max-w-4xl bg-white shadow-lg rounded-md p-4 m-4">
      <div className="flex items-center space-x-4">
        <img src={post.photo || "/defaultIMG.png"} className="rounded-full w-12 h-12 object-cover" alt="Imagen del autor" />
        <h3>{post.userId}</h3>
        <div>
          <Link href={`/posts/${post.id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600">{post.body}</p>
        </div>
      </div>
    </div>
  );
}
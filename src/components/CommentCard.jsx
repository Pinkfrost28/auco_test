import Link from "next/link";

export default function CommentCard({ comment }) {
    return (
        <div key={comment.id} className="max-w-4xl bg-gray-200 shadow-lg rounded-md p-4 m-4 ml-16">
            <div className="flex items-center space-x-4">
                <img src={comment.photo || "/defaultIMG.png"} className="rounded-full w-12 h-12 object-cover" alt="Imagen del autor" />

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out">
                        {comment.name}
                    </h3>
                    <h3 className="text-indigo-400">{comment.email}</h3>

                    <p className="text-gray-700">{comment.body}</p>
                </div>
            </div>
        </div>
    );
}
import PostCard from "./PostCard";

const Pagination = ({ currentPage, prevHandler, nextHandler, items, searchedPosts }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center space-x-2">
        <button
          onClick={prevHandler}
          className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
        >
          Prev
        </button>
        <span className="text-gray-600 font-semibold">
          {currentPage + 1}
        </span>
        <button
          onClick={nextHandler}
          className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;

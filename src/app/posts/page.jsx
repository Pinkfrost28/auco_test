    'use client'
    import Pagination from "@/components/Pagination";
    import PostCard from "@/components/PostCard"
    import SearchBar from "@/components/SearchBar"
    import { useEffect, useState } from "react"


    function postsPage() {

        const ITEMS_PER_PAGE = 6;
        const [posts, setPosts] = useState([])
        const [searchedPosts, setsearchedPosts] = useState([])
        const [currentPage, setCurrentPage] = useState(0);

        useEffect(() => {
            const getPosts = async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await res.json()
                setPosts(data)
            }
            getPosts()
        }, [])

        const onSearch = async (query) => {
            if (query) {
                const newPosts = posts.filter((post) =>
                    post.title.toLowerCase().includes(query.toLowerCase())
                )

                if (newPosts.length > 0) {
                    setsearchedPosts(newPosts);
                } else {
                    window.alert("No se encontraron resultados");
                    setsearchedPosts([]);
                }

            }
            else setsearchedPosts([]);
            setCurrentPage(0)


        }

        const showAll = () => {
            setCurrentPage(0)
            setsearchedPosts({})

        }



        const prevHandler = () => {

            setCurrentPage(prevPage => Math.max(prevPage - 1, 0));

        };

        const nextHandler = () => {
            const totalItems = searchedPosts.length || posts.length
            setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(totalItems / ITEMS_PER_PAGE) - 1));

        };

        const firstIndex = currentPage * ITEMS_PER_PAGE;
        const lastIndex = Math.min(firstIndex + ITEMS_PER_PAGE, searchedPosts.length || posts.length);

        const currentItems = (searchedPosts.length ? searchedPosts : posts).slice(
            firstIndex,
            lastIndex
        );


        return (
            <div className="flex flex-col items-center"> 
                <SearchBar onSearch={onSearch} showAll={showAll} />
                <Pagination
                    currentPage={currentPage}
                    nextHandler={nextHandler}
                    prevHandler={prevHandler}
                    items={currentItems}
                    searchedPosts={searchedPosts}
                />
            </div>
        )
    }

    export default postsPage;


    import DetailPost from "@/components/DetailPost"

    async function loadDetail(id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        return data
    }

    async function loadComments(id){
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        const data = await res.json()
        return data
    }

    export default  async function Detail({params}){
        const detail = await loadDetail(params.postId)
        const comments = await loadComments(params.postId)


        return(<div>
            <DetailPost post={detail} comments={comments}/>
        </div>)
    }
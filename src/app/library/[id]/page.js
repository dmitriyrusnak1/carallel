import LibraryPost from "@/components/library/libraryPost/libraryPost"
import Layout from "@/components/ui/layout/layout"
import { readJsonFile } from "@/lib/localdata"

const LibraryPostPage = ({ params }) => {
    const { id } = params

    const data = readJsonFile("/public/json/data.json")
    const { posts } = data

    const post = posts.find(el => el.id == id)
    const related = posts.filter(el => el.type === "high")

    return (
        <Layout title="Post">
            <LibraryPost post={post} related={related}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = readJsonFile("/public/json/data.json")
    
    const paths = []

    res.posts.forEach(el => {
        paths.push({
            params: { id: el.id.toString() }
        })
    })

    return {
        paths,
        fallback: "blocking"
    }
}

export default LibraryPostPage

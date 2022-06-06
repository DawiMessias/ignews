import { GetStaticProps } from "next"
import Head from "next/head"
import Prismic from "@prismicio/client"
import { getPrismicClient } from "../../services/prismic"
import styles from "./styles.module.scss"
import { RichText } from "prismic-dom"

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: string
}

interface PostProps {
  posts: Post[]
}
export default function Posts({posts}: PostProps) {
  return (
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

          <main className={styles.container}>
            <div className={styles.posts}>
              {posts.map(posts => (
                <a key={posts.slug} href="#">
                  <time>{posts.updatedAt}</time>
                  <strong>{posts.title}</strong>
                  <p>{posts.excerpt}</p>
                </a>
              ))}  
            </div>
          </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "Publication")
  ], {
    fetch: ["title", "content"],
    pageSize: 100,
    lang: 'pt-br'
  })
  // console.log(JSON.stringify(response, null, 2))

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    }
  })

  return {
    props: {posts}
  }
}
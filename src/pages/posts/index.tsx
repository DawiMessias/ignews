import Head from "next/head"
import styles from "./styles.module.scss"

export default function Posts() {
  return (
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

          <main className={styles.container}>
            <div className={styles.posts}>
              <a href="#">
                <time>26 de Abr de 2022</time>
                <strong>Next Level Week: os caminhos que trilhamos até aqui</strong>
                <p>Uma semana inteira de conteúdos práticos voltados para programação. O objetivo é específico e direto: treinar e capacitar profissionais que procuram incluir em seus portfólios o que há de mais novo e tendência no mercado de TI no Brasil e no mundo.</p>
              </a>

              <a href="#">
                <time>25 de Fev de 2022</time>
                <strong>Elixir: por trás da linguagem de programação brasileira</strong>
                <p>Elixir, antes de tudo, vale ressaltar, é uma linguagem de berço brasileiro, criada, desenvolvida e mantida por José Valim, em 2011, junto com o núcleo de Desenvolvimento e Pesquisa (R&D) da Plataformatec.</p>
              </a>

            </div>
          </main>
    </>
  )
}
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto px-20 max-w-screen-md">
      <h1 className="text-center text-green-800 text-2xl font-bold my-5">
        きょむやまのプログラミングブログ
      </h1>

      <article className="">
        <h2 className="underline font-bold">
          このブログを作っている理由
        </h2>
        <p>
          既存のブログシステムを離れて何故こんな原始的なサイトを書いてみてるかというと、Tailwind CSSを試してみたかったからである。
          やたら流行りで話を聞くので触ってみたが、いまいち感覚的なところがわからないので、記事を書きながら触ることにした。
          世にTailwindのチュートリアルものはいくらかあるが、そのどれもが導入方法とカスタマイズ方法で終わっており、
          「いや私はその後の『じゃあブログサイトやECサイトのようなものを作ってみましょう』という方法が見たいんだが？」となってしまい困っている。
          仕方ないので、自分でなんか書いてみるか…とやってはいるものの、大変ダサいものになっていてツライ。90年代の個人サイトかよこれは。
        </p>
      </article>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

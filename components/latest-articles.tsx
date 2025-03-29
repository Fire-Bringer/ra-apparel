import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Article data
const articles = [
  {
    id: "1",
    title: "Pink Boss",
    slug: "pink-boss",
    imageSrc: "/article-1.webp",
    brand: "SPARK",
  },
  {
    id: "2",
    title: "Africa Boss",
    slug: "africa-boss",
    imageSrc: "/article-2.webp",
  },
  {
    id: "3",
    title: "OG Boss",
    slug: "og-boss",
    imageSrc: "/article-3.webp",
  },
]

export default function LatestArticles() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest
            <br className="md:hidden" /> Articles
          </h2>
          <Link href="/articles" className="flex items-center text-sm font-medium hover:underline">
            View More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white">
              <div className="relative">
                {article.brand && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-bold text-sm">{article.brand}</span>
                  </div>
                )}
                <Image
                  src={article.imageSrc || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                <Link
                  href={`/articles/${article.slug}`}
                  className="flex items-center text-sm font-medium border-b border-black pb-1 inline-block hover:opacity-80"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white">
              <div className="relative">
                {article.brand && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-bold text-sm">{article.brand}</span>
                  </div>
                )}
                <Image
                  src={article.imageSrc || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{article.title}</h3>
                <Link
                  href={`/articles/${article.slug}`}
                  className="flex items-center text-sm font-medium border-b border-black pb-1 inline-block hover:opacity-80"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import {
  insightArticles,
  insightTopics,
  getInsightArticle,
  formatInsightDate,
} from "@/data/insight-articles";

type InsightArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return {
      title: "Insight Not Found | FavDoctor",
    };
  }

  const topic = insightTopics.find(
    (item) => item.slug === article.topic,
  );

  const url = `/insights/${article.slug}`;

  return {
    title: `${article.title} | FavDoctor Insights`,
    description: article.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "FavDoctor",
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: article.image
        ? [
            {
              url: article.image.src,
              alt: article.image.alt,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.image ? [article.image.src] : undefined,
    },

    keywords: topic ? [topic.title] : undefined,
  };
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    notFound();
  }

  const topic = insightTopics.find(
    (item) => item.slug === article.topic,
  );

  const topicTitle = topic?.title ?? "FavDoctor Insights";

  const articleUrl = `https://fav.doctor/insights/${article.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "FavDoctor",
      url: "https://fav.doctor",
    },
    image: article.image
      ? [`https://fav.doctor${article.image.src}`]
      : undefined,
    articleSection: topicTitle,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Article Header */}
      <section className="bg-background">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-heading"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Insights
            </Link>

            <div className="mt-12">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                {topicTitle}
              </p>

              <h1 className="mt-5 max-w-5xl text-balance text-4xl font-bold tracking-[-0.035em] text-brand-heading sm:text-5xl lg:text-7xl lg:leading-[1.05]">
                {article.title}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {article.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span>{article.author}</span>

                <span
                  aria-hidden
                  className="size-1 rounded-full bg-border"
                />

                <span>{formatInsightDate(article.date)}</span>

                <span
                  aria-hidden
                  className="size-1 rounded-full bg-border"
                />

                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="bg-background">
          <Container className="pb-16 sm:pb-20 lg:pb-24">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Article Content */}
      <section className="bg-background">
        <Container className="pb-20 sm:pb-24 lg:pb-32">
          <article className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {article.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={`${block.type}-${index}`}
                      className="pt-6 text-2xl font-bold tracking-tight text-brand-heading sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={`${block.type}-${index}`}
                      className="border-l-2 border-primary pl-6 text-xl font-medium leading-8 text-brand-heading sm:text-2xl sm:leading-9"
                    >
                      {block.text}
                    </blockquote>
                  );
                }

                return (
                  <p
                    key={`${block.type}-${index}`}
                    className="text-lg leading-9 text-muted-foreground"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>
        </Container>
      </section>

      {/* Article Footer */}
      <section className="bg-brand-surface">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-primary">
                FAVDOCTOR INSIGHTS
              </p>

              <p className="mt-2 text-lg font-semibold text-brand-heading">
                Continue exploring our thinking.
              </p>
            </div>

            <Link
              href="/insights"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-heading"
            >
              Explore all insights

              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
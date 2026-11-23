import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type {ManagedArticle as Document} from "@/lib/project-feed";
export function ManagedArticle({doc,path}:{doc:Document;path:string}) {
  const schema={"@context":"https://schema.org","@type":"Article",headline:doc.title,description:doc.description,datePublished:doc.publishedAt,mainEntityOfPage:{"@type":"WebPage","@id":"https://www.aicomparor.shop"+path}};
  return <article className="content-wrap journal-story mx-auto max-w-3xl px-5 py-10"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><h1 className="font-serif text-4xl">{doc.title}</h1><time dateTime={doc.publishedAt}>{doc.publishedAt.slice(0,10)}</time><div className="article-body story-body"><Markdown remarkPlugins={[remarkGfm]} skipHtml components={{h1:({children})=><h2>{children}</h2>,a:({href,children})=><a href={href} rel={/https:\/\/(?:[^/]+\.)?(?:amazon\.(?:com|co\.uk)|aliexpress\.(?:com|us)|amzn\.to)\//i.test(href??"")?"sponsored noopener":undefined}>{children}</a>}}>{doc.body}</Markdown></div></article>;
}

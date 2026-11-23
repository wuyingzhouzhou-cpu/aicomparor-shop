import { cacheLife } from "next/cache";
const endpoint="https://admin.expression.net.cn/feeds/aicomparor";
export type FeedEntry={path:string; kind:"article"|"product"; title:string;description:string; publishedAt:string; managed:boolean};
export type ManagedArticle={title:string;description:string;body:string;publishedAt:string;managed?:boolean};
async function read<T>(suffix:string):Promise<T|null>{
  const res=await fetch(endpoint+suffix,{signal:AbortSignal.timeout(6000)});
  if(res.status===404)return null;
  if(!res.ok)throw new Error("Content service HTTP "+res.status);
  return res.json();
}
export async function feedIndex():Promise<FeedEntry[]>{
  "use cache";
  cacheLife({stale:30,revalidate:30,expire:86400});
  return await read<FeedEntry[]>("")??[];
}
export async function managedArticle(path:string){
  "use cache";
  cacheLife({stale:30,revalidate:30,expire:86400});
  const row=(await feedIndex()).find(item=>item.kind==="article" && item.path===path && item.managed);
  return row?read<ManagedArticle>("?"+new URLSearchParams({path})):null;
}
export async function liveProducts(){
  "use cache";
  cacheLife({stale:30,revalidate:30,expire:86400});
  return await read<import("./published-products").PublishedProduct[]>("?kind=product")??[];
}

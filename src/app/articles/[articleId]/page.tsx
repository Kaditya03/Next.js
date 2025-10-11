"use clinet";

import Link from "next/link";
import {use} from "react";

export default  function NewsArticle({
    params,
    searchParams,
}:{
    params:Promise<{articleId:string}>;
    searchParams:Promise<{lang?:"en"| "sn"| "fr"}>;
}){
    const {articleId}=use( params);
    const{lang="en"}= use  (searchParams);
    return(
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=sn`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    );
}
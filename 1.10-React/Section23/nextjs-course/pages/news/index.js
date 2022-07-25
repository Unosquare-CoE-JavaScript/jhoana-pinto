import { Fragment } from "react";
import Link from 'next/link'

// domain.com/news
function NewsPage(){
    return (
        <Fragment>
            <h1>News page</h1>
            <ul>
                <li><Link href='/news/Art-1'>Art 1</Link></li>
                <li><Link href='/news/Art-2'>Art 2</Link></li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;
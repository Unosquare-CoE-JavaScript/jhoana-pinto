// when using [] in a file name nxtjs will know this is a dynamic page
import {useRouter} from 'next/router';
// domain.com/news/somethingImportant
function NewsPage(){
    const router = useRouter();
    const newsId = router.query.newsId;   // holds the concrete value in the url for the dynamic segment for which the page was visited

    return (<h1>Something important</h1>)
}

export default NewsPage;
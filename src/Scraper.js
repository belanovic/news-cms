import react, {useState} from 'react';
import {scrape} from './getArticles';

export default function Scraper({setTitle, setSubtitle, setInitialText}) {

    const [url, setURL] = useState('');

    const handleChange = (e) => {
        const element = e.target;
        setURL(element.value);
    }

    const getArticleText = async (e, url) => {

        const scrapedArticle = await scrape(url);

        if(scrapedArticle == null) return;
        
        setTitle(scrapedArticle.title) 
        setSubtitle(scrapedArticle.subtitle)
        setInitialText(scrapedArticle.text)
    }

    return (
        <div className = "scraper">
            <div className = "scraper-address">
                <label>Unesi adresu stranice</label>
                <input
                    value = {url}
                    onChange = {handleChange}
                    onKeyDown={(e) => {if(e.code == 'NumpadEnter' | e.code == 'Enter') getArticleText(e, url)}}
                ></input>
                <button
                    onClick = {(e) => getArticleText(e, url)}
                >Kopiraj tekst stranice</button>
            </div>
        </div>
    )
}
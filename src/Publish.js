import React, { useContext, useEffect } from 'react';
import {publishArticle, getAllArticles} from './getArticles.js';
import { context } from './newsContext';

export default function Publish({ id, published, pageArticles, title, tag, selectedDate }) {
    const {category, pageNum, showCmsOverlay, setShowCmsOverlay } = useContext(context);
    async function handleClick(e) {
       try {
           setShowCmsOverlay('flex');

           const publishedArticle = await publishArticle(id);

           await pageArticles(category, pageNum, title, tag, selectedDate);
           
       } catch(error) {
           alert(error.message);
           await pageArticles(category, pageNum, title, tag, selectedDate);
       }
    }

    return (
        <div className="allArticles-item-publish allArticles-item-part">
            <button 
                onClick = {handleClick}
                style = {{display: !published? 'block' : 'none' }}
            >Objavi</button>
        </div>
    )
}
import React, { useEffect } from 'react';
import './style/position-publish.css';

export default function PositionPublish({ frontpageNews, setPosition, 
    published, setPublished, position, currentPosition, setIdArticleToChangePosition}) {
    let showPosition = published === true ? 'inline' : 'none';
    const handleNumber = (e) => {
        if (published === false) {
            setPosition(0);
            return
        }
        const numInput = parseInt(e.target.value);

        if(Number.isNaN(numInput)) return;
        
        if (numInput > 100 || numInput < 0) return;
        setPosition(numInput);
        const articleWithSamePosition = frontpageNews.find((prom) => {
            /* console.log('pozicija clanka ' + prom.position)
            console.log('input ' + numInput) */
            return prom.position === numInput
        })

        if (!articleWithSamePosition) {
            setIdArticleToChangePosition('');
            return
        }
        setIdArticleToChangePosition(articleWithSamePosition._id);
    }

    const handleCheck = (e) => {
        const v = e.target.checked;
        setPublished(v);
        if (v === false) {
            setPosition(0)
        }
    }
    
/*     useEffect(() => {
        if(position == '') setPosition(0);
    }, [position])  */

    return (
        <div className="position-publish">
            <div className = "publish"
                style={{textAlign: 'center'}}
            
            >
                <label 
                    htmlFor="publish-checkbox"
                    className="publish-label"
                >Objavljeno
                </label>
                <input
                    id="publish-checkbox"
                    name="publish-checkbox"
                    type="checkbox"
                    className="publish-checkbox"
                    checked={published}
                    onChange={handleCheck}
                ></input>
            </div>

            <div className = "position">
      
                
            <div
                style={{ display: showPosition }}
            >
                <label>Pozicija</label>
                <input
                    type="number"
                    min="0"
                    max="100"
                    className="position-input"
                    onChange={handleNumber}
                    value={position}
                    disabled={frontpageNews? false : true}
                ></input>
            </div>
            </div>
        </div>
    )
}
import react, {useContext, useState} from 'react';
import './style/save.css';
import {context} from './newsContext';

export default function Save({handleSave, title, text, displaySave }) {

    const [url, setURL] = useState('');

    return (
        <div className={`save-article ${displaySave}`}>
        {title !== '' && text !== '' ?
            <button 
                className="save-button" 
                onClick={() => {
                    handleSave();
                }}
            >Save
            </button>
            :
            ''}
        </div>
    )
}
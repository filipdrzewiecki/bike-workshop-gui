import React from 'react';
import '../../Css/index.css';
import Page from '../../Page/PageElements/article.jsx';
import SubPage from '../../Page/PageElements/section';

const content = [
    <div>
        częsci
    </div>
]

const page = [
    <SubPage
        paragraphs={content}
    />,
]



const Parts = () => {
    return (
        <Page 
            title="Sekcja!"
            paragraphs={page}
            isBackButton={false}
        />
    );
}


export default Parts;
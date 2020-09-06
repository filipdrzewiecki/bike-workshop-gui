import React from 'react';
import '../../Css/index.css';
import Page from '../../Page/PageElements/article.jsx';
import SubPage from '../../Page/PageElements/section';

const content = [
    <div>
        Bike Workshop to strona w całości poświęcona rowerom.
        Znajdziesz tutaj kompletne informacje dotyczące serwisu, konserwacji i kompatybilności.
        Wszystkie informacje i poradniki są przeznaczone zarowóno dla całkowitych amatorów jak i profesjonalnych mechaników.
    </div>,
    <div>
        Wszystkie materiały są całkowicie darmowe i dostępne bez żadnych limitów. 
        Są efektem pasji do rowerów i wielu lat spędzonych w wielu profesjonalnych serwisach rowerowych.
    </div>,
    <div>
        Jeśli masz jakiekolwiek wątpliwości lub uwagi dotyczące treści poradników, skontaktuj się z nami poprzez dział O NAS - na pewno odpiszemy.
    </div>
]

const page = [
    <SubPage
        paragraphs={content}
    />,
]



const Main = () => {
    return (
        <Page 
            title="Siema pedalarzu!"
            paragraphs={page}
            isBackButton={false}
        />
    );
}


export default Main;
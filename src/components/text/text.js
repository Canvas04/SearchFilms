import React from 'react';

export default function Text ({overview}) {
let text;
    if(overview === '') {
        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt rutrum mi eu efficitur. Curabitur ornare, felis a porta pulvinar, tellus quam consectetur nisi, eget sagittis quam mauris in tortor. Duis sagittis justo eu dui pharetra tristique. Etiam ipsum nisi, eleifend non consequat vel, tincidunt non augue.'
    }else {
        text = overview
    }
return <> {text} </>
}
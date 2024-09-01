import { memo } from 'react';

interface TitleInterface {
    title: string;
}

const Title = ({title} : TitleInterface ) => {
    return <h1>{title}</h1>;
};

export default memo(Title);

import { memo } from 'react';

interface TextInterface {
    text: string;
}

const Text = ({text} : TextInterface ) => {
    return <>{text}</>;
};

export default memo(Text);

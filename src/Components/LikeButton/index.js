import React from 'react';
import Button from '../Button';
import { FaRegThumbsUp } from 'react-icons/fa'

const LikeButton = () => {
    return (
        <div>
            <Button>
                <FaRegThumbsUp/> Curtir
            </Button>
        </div>
    );
};

export default LikeButton;
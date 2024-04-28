import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
    return (
        <div>
            <div className='lg:flex md:flex  flex lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-center py-20'>
            <HeroLeft/>
                <HeroRight/>
            </div>
        </div>
    );
};

export default Hero;
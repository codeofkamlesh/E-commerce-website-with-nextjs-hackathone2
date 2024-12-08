import React from 'react'
import AboutHero from '@/components/AboutHero';
import AboutSection from '@/components/AboutSection';
import Aboutpopularproduct from '@/components/Aboutpopularproduct';

const page = () => {
    return (
      <div>
        <AboutHero/>
            <AboutSection />
            <Aboutpopularproduct />
            
      </div>
    );
}

export default page

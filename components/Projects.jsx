import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import pdfViewer from '../public/assets/projects/pdfViewer.png';
import mortgageCalc from '../public/assets/projects/mortgageCalc.png'
import mortgageApp from '../public/assets/projects/mortgageApp.png'
import airBnB from '../public/assets/projects/airBnB.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Mortgage App'
            backgroundImg={mortgageApp}
            projectUrl='/mortgageApp'
            tech='MEAN stack'
          />
          <ProjectItem
            title='Mortgage Calculator'
            backgroundImg={mortgageCalc}
            projectUrl='/mortgageCalc'
            tech='Angular'

          />
          <ProjectItem
            title='PDF Viewer'
            backgroundImg={pdfViewer}
            projectUrl='/pdfViewer'
            tech='Angular'

          />
          <ProjectItem
            title='AirBnB'
            backgroundImg={airBnB}
            projectUrl='/airbnb'
            tech='NextJs'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
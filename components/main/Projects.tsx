import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-5' id="projects">
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
        <ProjectCard
          src="/Boardify.png"
          title="Boardify"
          description="An app with auth, organization workspaces, boards, lists, cards, activity logs, Unsplash covers, Stripe subscriptions, and MySQL using Prisma ORM."
          link='https://boardify-phi.vercel.app/'
        />
        <ProjectCard
          src="/admin-dashboard.png"
          title="Admin Dashboard App"
          description="A admin app for eCommerce, featuring statistics, orders, employee management, and versatile tools like Calendar, Kanban,and various others."
          link='https://admin-dashboard-app-zeta.vercel.app/'
        />
        <ProjectCard
          src="/scaler.png"
          title="Scalar Hotel Website"
          description="A admin-facing solution for managing rooms in a hotel. It allows hotel administrators to efficiently handle room bookings, modifications, cancellations, and viewing bookings with various filtering options."
          link='https://scalar-hotel-nsq399thn-viswaksenas-projects.vercel.app/'
        />
        <ProjectCard
          src="/social.png"
          title="Social Media Website"
          description="A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more."
          link='https://scalar-hotel.vercel.app/'
        />
      </div>
    </div>
  );
};

export default Projects;

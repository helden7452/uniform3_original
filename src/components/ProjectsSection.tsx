'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'زي أمن لشركة الحماية المتقدمة',
    category: 'زي الأمن',
    description: 'تصميم وتصنيع زي أمن متكامل لأكثر من 200 حارس في مجموعة شركات الحماية المتقدمة، مع مراعاة متطلبات العمل في مختلف المناطق والظروف المناخية.',
    image: '/images/projects/project1.jpg',
    client: 'شركة الحماية المتقدمة',
  },
  {
    id: 2,
    title: 'زي طبي للمجمع الصحي النموذجي',
    category: 'زي طبي',
    description: 'توريد زي طبي لكافة أقسام المجمع الصحي النموذجي بمواصفات عالية الجودة، مع تمييز الأقسام بألوان مختلفة وتطريز الشعار والاسم بشكل أنيق ومهني.',
    image: '/images/projects/project2.jpg',
    client: 'المجمع الصحي النموذجي',
  },
  {
    id: 3,
    title: 'زي موحد لسلسلة مطاعم الذواقة',
    category: 'زي ضيافة',
    description: 'تصميم وتنفيذ زي موحد لطاقم العمل في سلسلة مطاعم الذواقة بتصميم عصري يعكس هوية العلامة التجارية ويناسب طبيعة العمل في المطاعم الراقية.',
    image: '/images/projects/project3.jpg',
    client: 'سلسلة مطاعم الذواقة',
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">مشاريعنا المميزة</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            نفخر بشراكتنا مع كبرى المؤسسات في المملكة لتوفير حلول الزي الموحد المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(project)}
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-accent text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    <span className="font-medium">العميل:</span> {project.client}
                  </span>
                  <button 
                    className="text-primary font-medium hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div 
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
                <button 
                  className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition-colors"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-accent text-sm font-medium bg-accent/10 rounded-full px-3 py-1 inline-block">
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
                <p className="text-gray-600 mb-6">{activeProject.description}</p>
                <div className="border-t pt-4 flex flex-wrap gap-4">
                  <div>
                    <span className="text-gray-500 text-sm">العميل</span>
                    <p className="font-medium">{activeProject.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 
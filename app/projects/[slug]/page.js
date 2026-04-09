// app/projects/[slug]/page.js - Server Component
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

// Project data
export const projectDetails = {
  'pet-grooming': {
    slug: 'pet-grooming',
    title: 'Pet Grooming',
    description: 'The Pet Grooming Management System is a web-based application developed for Mimi\'s Pet Grooming Services to simplify daily business operations. It allows customers to register, manage pet profiles, and book grooming appointments online, while staff can manage their schedules and grooming tasks, and the owner (admin) can oversee services, staff management, inventory, and billing. The system improves efficiency, reduces manual work, and enhances customer experience through organized and automated workflows.',//     fullDescription: `The Pet Grooming Management System is designed to streamline operations for pet grooming businesses. Key features include:

// • Customer registration and pet profiles
// • Online appointment scheduling
// • Service catalog with pricing
// • Staff management and scheduling
// • Billing and payment processing
// • Customer notifications (Email)`,
    technologies: ['Vue', 'VITE', 'CSS', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'OAuth'],
    youtubeLink: 'https://youtu.be/zQRTAlWEon4',
    // githubLink: 'https://github.com/yourusername/pet-grooming',
    liveLink: '',
    figmaLink: 'https://www.figma.com/design/o3gT0RZrWTv3BBm5KDxwRn/Mimi-s-Pet-Grooming?node-id=0-1&p=f&t=rh5g4zjDsO6OlZW4-0',
    mainImage: '/images/projects/pet-grooming.png',
    screenshots: [
      '/images/projects/pet-grooming.png',
      '/images/projects/pet-grooming-about.png',
      '/images/projects/pet-grooming-groomers.png',
      '/images/projects/pet-grooming-services.png',
      '/images/projects/pet-grooming-services-review.png',
      '/images/projects/pet-grooming-gallery.png',
      '/images/projects/pet-grooming-reviews.png',
      '/images/projects/pet-grooming-contact.png',      
      '/images/projects/pet-grooming-signup.png',
      '/images/projects/pet-grooming-contactno.png',
      '/images/projects/pet-grooming-forgotpass.png',
      '/images/projects/pet-grooming-login.png',
      '/images/projects/pet-grooming-newacc.png',
      '/images/projects/pet-grooming-newaccpets.png',
      '/images/projects/pet-grooming-oldaccpets.png',
      '/images/projects/pet-grooming-newaccappointments.png',
      '/images/projects/pet-grooming-bookapt.png',
      '/images/projects/pet-grooming-oldaccappointments.png',
      '/images/projects/pet-grooming-newaccwalkins.png',
      '/images/projects/pet-grooming-oldaccwalkins.png',
      '/images/projects/pet-grooming-newaccservices.png',
      '/images/projects/pet-grooming-newaccsupport.png',
      '/images/projects/pet-grooming-newaccsupport2.png',
      '/images/projects/pet-grooming-newaccprofile.png',
      '/images/projects/pet-grooming-logout1.png',
      '/images/projects/pet-grooming-logout2.png'
    ],
    features: [
      'Appointment Scheduling',
      'Pet Profile Management',
      'Staff Management',
      'Service Catalog',
      'Billing System',
      'Customer Portal',
      'Mobile Responsive'
    ],
    role: 'Full-Stack Developer & UI Designer',
    duration: '4 months'
  },
  'cpc-voting': {
    slug: 'cpc-voting',
    title: 'CPC SSG Voting',
    description: 'The CPC SSG Voting System is a secure web-based voting platform developed for Cordova Public College to modernize the school election process. It enables students to vote online through a verified account while administrators manage candidates, elections, and results. The system ensures transparency and accuracy through role-based access, real-time vote counting, and secure data handling.',
    fullDescription: `The CPC SSG Voting System is a secure digital voting platform designed for educational institutions. Features include:

• Role-based authentication (Admin, Voter)
• Real-time vote counting
• Secure vote encryption
• Candidate management
• Election result visualization
• Voter verification system
• Audit trail for transparency`,
    technologies: ['Vue', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
    // githubLink: 'https://github.com/yourusername/cpc-voting',
    liveLink: '',
    mainImage: '/images/projects/voting-system.png',
    screenshots: [
      '/images/projects/voting-system.png',
      '/images/projects/voting-system-2.png',
      '/images/projects/voting-system-3.png',
      '/images/projects/voting-system-4.png',
      '/images/projects/voting-system-5.png',
      '/images/projects/voting-system-6.png',
      '/images/projects/voting-system-7.png',
      '/images/projects/voting-system-8.png',
      '/images/projects/voting-system-9.png',
      '/images/projects/voting-system-10.png'
    ],
    features: [
      'Secure Authentication',
      'Real-time Voting',
      'Candidate Management',
      'Result Dashboard',
      'Voter Verification',
      'Audit Trail'
    ],
    role: 'Full-Stack Developer',
    duration: '1 month'
  },
  'task-tracker': {
    slug: 'task-tracker',
    title: 'Task Tracker',
    description: 'The Task Tracker Management System is a productivity-focused web application designed to help users organize tasks and manage projects efficiently. It allows users to create, update, track, and monitor tasks with deadlines and progress indicators. With authentication, filtering, and responsive design, the system helps users stay focused, organized, and on schedule across different devices.',
    fullDescription: `Task Tracker is a comprehensive web application built with modern technologies to streamline task management. The system features:

• User authentication and authorization
• Create, read, update, and delete (CRUD) operations for tasks
• Task categorization and tagging
• Deadline tracking with notifications
• Progress tracking with visual indicators
• Search and filter functionality
• Responsive design for mobile and desktop`,
    technologies: ['Next.js', 'Laravel', 'MongoDB', 'SASS', 'JWT', 'REST API'],
    githubLink: 'https://github.com/johanna-panganuron/task-manager',
    liveLink: '',
    figmaLink: '',
    mainImage: '/images/projects/task-tracker.png',
    screenshots: [
      '/images/projects/task-tracker-1.png',
      '/images/projects/task-tracker-2.png',
      '/images/projects/task-tracker-3.png',
      '/images/projects/task-tracker-4_.png',
      '/images/projects/task-tracker-5_.png'
    ],
    features: [
      'User Authentication & Authorization',
      'Task CRUD Operations',
      // 'Deadline Tracking',
      'Progress Visualization',
      'Search & Filter',
      'Mobile Responsive'
    ],
    role: 'Full-Stack Developer',
    duration: '1 month'
  },
  'cpc-library': {
    slug: 'cpc-library',
    title: 'CPC Library',
    description: 'The CPC Library Management System is a web-based application developed for Cordova Public College to automate library operations. It manages book inventory, member records, borrowing and returning transactions, due dates, and fines. The system replaces manual record-keeping with a faster, more accurate, and organized digital solution for both librarians and students.',
    fullDescription: `The CPC Library Management System automates traditional library operations. Key features include:

• Book catalog and inventory management
• Member registration and management
• Borrowing and returning transactions
• Due date tracking and overdue notifications
• Fine calculation and management
• Book reservation system
• Reporting and analytics`,
    technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
    githubLink: 'https://github.com/johanna-panganuron/cpc-library-management-system',
    liveLink: '',
    figmaLink: 'https://www.figma.com/design/7Z5Izy2cPqnpd4BZlVfc3w/Library-Management-System?m=auto&fuid=1412796318703401243',
    mainImage: '/images/projects/library-system.png',
    screenshots: [
      '/images/projects/library-system.png',
      '/images/projects/library-system-2.png',
      '/images/projects/library-system-3.png',
      '/images/projects/library-system-4.png',
      '/images/projects/library-system-5.png',
      '/images/projects/library-system-6.png',
    ],
    features: [
      'Book Management',
      'Member Management',
      'Transaction Processing',
      'Due Date Tracking',
      'Fine Calculation'
    ],
    role: 'Full-Stack Developer & UI Designer',
    duration: '2 weeks'
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }))
}

// Server Component - handles data fetching
export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
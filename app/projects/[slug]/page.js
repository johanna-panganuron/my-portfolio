// app/projects/[slug]/page.js - Server Component
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

// Project data
export const projectDetails = {
  'kapenijuwana': {
    slug: 'kapenijuwana',
    title: 'Kape ni Juwana',
    description: 'A front-end website for Kape ni Juwana, a local coffee shop. The site features a clean and cozy aesthetic showcasing the menu, ambiance, and brand identity of the café.',
    technologies: ['Vue', 'VITE', 'CSS'],
    liveLink: 'https://kapenijuwana.vercel.app/',
    mainImage: '/images/projects/1kape-ni-juwana.png',
    screenshots: [
      '/images/projects/1kape-ni-juwana.png',
      '/images/projects/2kape-ni-juwana.png',
      '/images/projects/3kape-ni-juwana.png',
      '/images/projects/4kape-ni-juwana.png',
      '/images/projects/5kape-ni-juwana.png',
      '/images/projects/6kape-ni-juwana.png',
    ],
    features: [
      'Menu Showcase',
      'Responsive Design',
      'Clean Café Aesthetic',
    ],
    actors: ['Visitor'],
    role: 'Front-End Developer',
    duration: '1 week',
  },

  'pet-grooming': {
    slug: 'pet-grooming',
    title: 'Mimi\'s Pet Grooming',
    description: 'The Pet Grooming Management System is a web-based application developed for Mimi\'s Pet Grooming Services to simplify daily business operations. It allows customers (pet owners) to register, manage pet profiles, and book grooming appointments online, while staff can manage their schedules, walk-in and grooming tasks, and the owner (admin) can oversee services, staff management, customers, and billing. The system improves efficiency, reduces manual work, and enhances customer experience through organized and automated workflows.',
    // fullDescription: `The Pet Grooming Management System is designed to streamline operations for pet grooming businesses. Key features include:

    // • Customer registration and pet profiles
    // • Online appointment scheduling
    // • Service catalog with pricing
    // • Staff management and scheduling
    // • Billing and payment processing
    // • Customer notifications (Email)`,
    actors: ['Admin (Owner)', 'Staff (Receptionist)', 'Customer (Pet Owner)'],
    technologies: ['Vue', 'VITE', 'Vuex', 'Node.js', 'Express.js', 'REST API', 'MySQL', 'Axios', 'Socket.io', 'JWT', 'OAuth', 'Nodemailer', 'Chart.js', 'PDFKit', 'Excel JS', 'Toastify', 'SweetAlert2', 'Gemini Chatbot', 'Postman', 'CSS'],
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
      'Walk-in Management',
      'Pet Profile Management',
      'Staff Management',
      'Service Catalog',
      'Billing System',
      'Customer Portal',
      'Mobile Responsive'
    ],
    role: 'Full-Stack Developer',
    duration: '4 months'
  },

  'cpc-voting': {
    slug: 'cpc-voting',
    title: 'CPC SSG Voting',
    description: 'The CPC SSG Voting System is a secure web-based voting platform developed for Cordova Public College to modernize the school election process. It enables students to vote online through a verified account while administrators (SAO) manage candidates, elections, and results. The system ensures transparency and accuracy through role-based access, real-time vote counting, and secure data handling.',
    fullDescription: `The CPC SSG Voting System is a secure digital voting platform designed for educational institutions. Features include:

• Role-based authentication (Admin, Voter)
• Real-time vote counting
• Secure vote encryption
• Candidate management
• Election result visualization
• Voter verification system
• Audit trail for transparency`,
    actors: ['Admin (Student Affairs Office)', 'Student Voter'],
    technologies: ['Vue CLI', 'Node.js', 'Express.js', 'REST API', 'MySQL', 'Axios', 'JWT', 'Chart.js', 'Tailwind CSS', 'SweetAlert2', 'ESLint', 'Postman', 'CSS'],
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
    description: 'The Task Tracker Management System is a productivity-focused web application designed to help users organize tasks and manage projects efficiently. It allows users to create, update, track, and monitor tasks with progress indicators. With authentication, filtering, and responsive design, the system helps users stay focused, organized, and on schedule across different devices.',
    fullDescription: `Task Tracker is a comprehensive web application built with modern technologies to streamline task management. The system features:

• User authentication and authorization
• Create, read, update, and delete (CRUD) operations for tasks
• Task categorization and tagging
• Deadline tracking with notifications
• Progress tracking with visual indicators
• Search and filter functionality
• Responsive design for mobile and desktop`,
    actors: ['Registered User'],
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
    description: 'The CPC Library Management System is a web-based application developed for Cordova Public College to automate library operations. It manages book inventory, student records, borrowing and returning transactions, due dates, and fines. The system replaces manual record-keeping with a faster, more accurate, and organized digital solution for both librarians and students.',
    fullDescription: `The CPC Library Management System automates traditional library operations. Key features include:

• Book catalog and inventory management
• Member registration and management
• Borrowing and returning transactions
• Due date tracking and overdue notifications
• Fine calculation and management
• Book reservation system
• Reporting and analytics`,
    actors: ['Librarian (Admin)', 'Student'],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
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
    role: 'Full-Stack Developer',
    duration: '2 weeks'
  },

  // UI/UX Projects
  'nailed-by-via': {
    slug: 'nailed-by-via',
    title: 'Nailed by Via - Nail Extension',
    description: 'Nailed by Via is a UI/UX design project for a nail extension service booking platform. The design focuses on a clean, feminine aesthetic that reflects the elegance and artistry of nail care. It features a service browsing page, appointment scheduling flow, gallery showcase, and a smooth booking experience tailored for beauty service clients.',
    technologies: ['Figma'],
    figmaLink: 'https://www.figma.com/file/your-link-here',
    mainImage: '/images/projects/nail-extension.png',
    screenshots: [
      '/images/projects/nail-extension.png',
    ],
    features: [
      'Service Browsing & Catalog',
      'Appointment Scheduling',
      'Gallery Showcase',
      'Mobile Responsive Design',
      'Clean Feminine Aesthetic',
    ],
    actors: ['Client / Customer'],
    role: 'UI/UX Designer',
    duration: 'April 2025',
  },
  'mimis-pet-grooming-ui': {
    slug: 'mimis-pet-grooming-ui',
    title: "Mimi's Pet Grooming - UI Design",
    description: "Mimi's Pet Grooming UI/UX design is the design prototype created before the full-stack development of the system. It covers the complete user interface for customers, staff, and admin — including appointment booking, pet profile management, service catalog, and grooming task monitoring. The design prioritizes ease of use and a friendly, approachable aesthetic suited for pet owners.",
    technologies: ['Figma'],
    figmaLink: 'https://www.figma.com/file/your-link-here',
    mainImage: '/images/projects/ui-pet-grooming.png',
    screenshots: [
      '/images/projects/ui-pet-grooming.png',
    ],
    features: [
      'Appointment Booking Flow',
      'Pet Profile Management',
      'Staff Dashboard Design',
      'Admin Panel Layout',
      'Service Catalog UI',
      'Mobile Responsive Design',
    ],
    actors: ['Admin', 'Staff', 'Customer'],
    role: 'UI/UX Designer',
    duration: 'February - March 2025',
  },
  'cpc-library-ui': {
    slug: 'cpc-library-ui',
    title: 'CPC Library - UI Design',
    description: 'The CPC Library UI/UX design is the design prototype for the Cordova Public College Library Management System. It covers the complete interface for librarians and students — including book catalog browsing, borrowing and returning transactions, member management, and an organized dashboard for library staff. The design aims for a clean, academic aesthetic that is easy to navigate.',
    technologies: ['Figma'],
    figmaLink: 'https://www.figma.com/file/your-link-here',
    mainImage: '/images/projects/ui-cpc-library.png',
    screenshots: [
      '/images/projects/ui-cpc-library.png',
    ],
    features: [
      'Book Catalog Browsing',
      'Borrowing & Returning Transactions',
      'Member Management',
      'Librarian Dashboard',
      'Fine Calculation UI',
      'Mobile Responsive Design',
    ],
    actors: ['Librarian', 'Student'],
    role: 'UI/UX Designer',
    duration: 'October 2024',
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
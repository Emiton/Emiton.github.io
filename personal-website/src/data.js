function returnIcon(icon) {
  return icon;
}

export const TOOLS = [
  { name: 'Java', icon: returnIcon(<i className="devicon-java-plain-wordmark" />) },
  { name: 'React', icon: returnIcon(<i className="devicon-react-original"/>) },
  { name: 'JavaScript', icon:  returnIcon(<i className="devicon-javascript-plain"/>)},
  { name: 'TypeScript', icon:  returnIcon(<i className="devicon-typescript-plain"/>)},
  { name: 'HTML', icon: returnIcon(<i className="devicon-html5-plain-wordmark"/>) },
  { name: 'CSS', icon: returnIcon(<i className="devicon-css3-plain-wordmark"/>) },
  { name: 'AWS', icon: returnIcon(<i className="devicon-amazonwebservices-plain-wordmark" />) },
  { name: 'Figma', icon: returnIcon(<i className="devicon-figma-plain colored"/>) },
  { name: 'MySQL', icon: returnIcon(<i className="devicon-mysql-plain-wordmark" />) },
  { name: 'Postgres', icon: returnIcon(<i className="devicon-postgresql-plain-wordmark"/>) },
];

export const COMPANY_INFO = [
  {
    companyName: 'Empower Project',
    jobTitle: 'Senior Full-stack Software Engineer',
    workLocation: 'Madison, WI',
    workDates: 'June 2021 - June 2023',
    workDescription: 'At Empower, I work as a Senior Software Senior who builds across the entire technical stack. This entails shipping front-end code, doing light design work, working with the product team, developing and launching backend features, database design, developing and deploying mobile applications in React Native, deploying and managing infrastructure in AWS, and working with our Product team and clients to develop design documents for new features. Most of my work is done in a JavaScript based tech stack which includes React, Node, React Native, and TypeScript.',
  },
  {
    companyName: 'Amazon Go',
    jobTitle: 'Full-stack Software Engineer',
    workLocation: 'Westborough, MA',
    workDates: 'June 2021 - June 2023',
    workDescription: 'My role with Amazon Go entails full-stack development using a JavaScript based tech stack. On the services team I mainly create services for various internal products within the Amazon Go ecosystem. I also write end to end features for internal teams and customers. I generally collaborate with the product team for front-end design. I have created both web and mobile apps. AWS powers the backend, utilizing serverless technology to build performant apps and services that scale under varying loads.',
  },
  {
    companyName: 'Amazon Robotics',
    jobTitle: 'Software Engineer',
    workLocation: 'Westborough, MA',
    workDates: 'March 2020 - June 2021',
    workDescription: 'As an engineer at Amazon Robotics I worked mainly as a backend engineer writing Java services and infrastructure for our services. I worked mainly on a tier-1 service which was the heart of the robotics organization’s operations. Some of the work I completed included increasing the resiliency of our services with features such as self healing data nodes, creating monitoring and reporting infrastructure, building features for internal engineering teams, and handling on-calls for the service.',
  },
  {
    companyName: 'Massachusetts Disabled Persons Protection Commission',
    jobTitle: 'Mobile Developer',
    workLocation: 'Westborough, MA',
    workDates: 'August 2019 - March 2020',
    workDescription: 'In this partnership between the ASSET group and the state of Massachusetts, I worked on developing a mobile application for disabled individuals experiencing abuse from caretakers. I was fully involved in the product development phases which included trips to care facilities, user surveys, UI design, and building prototypes. Our team released a mobile application for iPhone, Android, and tablet devices.',
  },
  {
    companyName: 'Twitter',
    jobTitle: 'Software Engineer Intern',
    workLocation: 'Westborough, MA',
    workDates: 'June 2019 - August 2019',
    workDescription: 'While at Twitter I worked on the Video Data Infrastructure team. My work consisted mainly of building ETL pipelines and deploying them within Twitter’s cloud architecture. I served the data to dashboards and to internal engineering teams.',
  },
  {
    companyName: 'University of Rhode Island',
    jobTitle: 'Lead Tutor - Computer Science Diversity Program',
    workLocation: 'Kingston, RI',
    workDates: 'January 2019 - June 2019',
    workDescription: 'My role as the lead tutor consisted of providing tutoring to undergraduate students of color in the university’s Computer Science program. Since I had not completed an undergrad in CS, this meant consuming and absorbing large amounts of information for the various courses in a short span of time. I then distilled the information into clear concepts and mental frameworks which students could use. I aided them in studying for tests and completing projects.',
  },
  {
    companyName: 'FM Global',
    jobTitle: 'Software Engineering Co-op',
    workLocation: 'Johnston, RI',
    workDates: 'January 2019 - May 2019',
    workDescription: 'As a software engineering co-op at FM Global, I worked on several projects. These included a web application for error reporting, scripting for project configuration and deployment, and creating a testing suite for my team’s greenfield project.',
  },
  {
    companyName: 'University of Rhode Island',
    jobTitle: 'Head Teaching Assistant - Object Oriented Programming',
    workLocation: 'Kingston, RI',
    workDates: 'September 2018 - December 2018',
    workDescription: 'During my time as a teaching assistant I ran the programming labs for the object oriented programming course. I also held office hours in order to help students and graded student assignments.',
  },
  {
    companyName: 'University of Rhode Island',
    jobTitle: 'Machining Intern',
    workLocation: 'Kingston, RI',
    workDates: 'September 2016 - December 2016',
    workDescription: 'As a machining intern I worked with a variety of tools including lathes, drill presses, band saws, grinders, sanders, and 3D printers. My role included reading engineering schematics, providing feedback to the engineers, and manufacturing the designs.',
  },
  {
    companyName: 'Contintenal Tires AG',
    jobTitle: 'Design Engineering Co-op',
    workLocation: 'Hannover, Germany',
    workDates: 'March 2016 - August 2016',
    workDescription: 'While at Continental I worked as a mechanical engineering co-op. I was a part of the R&D team which was developing new technologies for tire production. My main responsibilities included aiding in the design of processes using additive manufacturing to produce “green tires”. I took on the role of programming Kuka robotic arms and collecting data on tire printing. As a side project, I experimented with creating polymers using mixing processes generally found in the paint industry as opposed to the traditional mastication process. This led to a polymer which had a more uniform distribution of carbon black and greater elasticity.',
  },
];

/*
  'Twitter': {},
  'University of Rhode Island': {}
  'FM Global': {},
  'Continental Tires': {}
*/

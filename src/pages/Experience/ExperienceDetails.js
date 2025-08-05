import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";

export const educationDetails = [
  {
    courseName: "Bachelor of Technology",
    year: "2022",
    department: "Information Technology",
    institution: "College of Engineering, Guindy, Chennai - 600096",
    customIcon: <FaUniversity />,
  },
  {
    courseName: "HSC",
    year: "2018",
    department: "Maths, Physics, Chemistry, Computer Science",
    institution: "A.U.P.E.T. Chinmaya Vidyalaya, Tirunelveli - 627002",
    customIcon: <FaSchool />,
  },
];

export const experienceDetails = [
  {
    role: "Senior Software Engineer",
    company: "Altimetrik",
    timePeriod: "05/2025 – Present",
    location: "Chennai",
    description: [
      "Contributed to the development of Shop CMS which is used to manage contents for Samsung Mobile Shop App",
    ],
  },
  {
    role: "Associate Product Developer",
    company: "Lumel Technologies LLP",
    timePeriod: "11/2023 – 04/2025",
    location: "Chennai",
    description: [
      "Contributed a major part in Canvas Rendering of the Inforiver Matrix, a data visualisation Power BI application which contains a lot of data visualisation tools for creating and visualisation of data. This helps in improving the performance of the application by 150%.",
      "Developed the core and 50% of the features of Inforiver Super Filter, which succeeded as the primary marketing component of Inforiver Products.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tekion Corp",
    timePeriod: "09/2022 – 09/2023",
    location: "Chennai",
    description: [
      "Customer Relationship Management (CRM) application tailored to the unique needs of Tekion Corp. This comprehensive system efficiently manages intricate data related to customer entities. Through meticulous design and implementation, the CRM platform enhances customer interaction and streamlines data management, bolstering Tekion Corp's client-centric approach.",
      "Developed various standalone features like Organisation Goal Management and Activities Management which reduced the cost of using external software for above use cases by 50%.",
      "Written unit test cases for React Projects which reduced the occurrence of regression bugs by 90%.",
      "Enhanced the existing code base according to SONAR Qube regulations.",
    ],
  },
  {
    role: "Engineering Intern",
    company: "Tekion Corp",
    timePeriod: "01/2022 – 08/2022",
    location: "Chennai",
    description: [
      "Managed quality assurance by investigating and fixing existing bugs, thus reducing the bug counts by 30% and improving user experience in a CRM application.",
      "Developed minimal features such as drawers, modals in the CRM application.",
    ],
  },
];

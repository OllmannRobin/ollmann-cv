interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}
const experiencesData: Experience[] = [
  {
    id: 1,
    role: "Full-Stack developer analyst",
    company: "Saarstahl-rail",
    location: "",
    period: "November 2020 - Present (5.5 years)",
    description: [
      "Architecture Modernization: Led the migration of critical applications from legacy desktop clients to Web-based solutions.",
      "Frontend Development: Designed dynamic interfaces using Vue.js and integrated complex libraries (DevExtreme).",
      "Backend: Developed and maintained VB.NET Web Services (REST API) hosted on IIS to ensure seamless communication between frontend and databases.",
      "Data Management: Authored, optimized, and maintained complex stored procedures using SQL Server (T-SQL).",
      "Operations & Support: Ensured IT continuity for factory operations (traceability and quality systems). Provided user support and system administration (AS400).",
    ],
    technologies: [],
  },
  {
    id: 2,
    role: "React Developer (InternShip)",
    company: "Le Moulin",
    location: "",
    period: " Le Moulin | January 2020 - March 2020",
    description: [
      "Developed mobile-responsive components with React.",
      "State management using Redux.",
      "Frontend integration and styling.",
      "Collaborated within a team of 3 developers",
    ],
    technologies: [],
  },
];

const ProfessionalExperience = function () {
  return (
    <div>
      <div className="pb-20 pt-20">
        <div className="text-amber-600 font-extrabold text-5xl">
          OLLMANN ROBIN
        </div>
        <div className="text-amber-600 text-3xl">FRONT-END WEB DEVELOPER</div>
      </div>
      <h1 className="text-amber-600 font-bold pt-4">Professional Experience</h1>
      {experiencesData.map((experience) => (
        <div key={experience.id} className="pl-2">
          <div className="text-gray-500 font-bold pt-2">{experience.role}</div>
          <div className="pl-3 text-sm">
            {experience.company} | {experience.period}
          </div>

          <div className="text-xs">
            <ul className="pl-5 list-disc">
              {experience.description.map((detail,index) => (
                <li key={index} className="pb-1">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;

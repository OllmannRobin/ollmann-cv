interface SkillCategory {
  title: string;
  skills: string;
}
const skillsData: SkillCategory[] = [
  { title: "Frontend : ", skills: "HTML5, CSS3, JavaScript/TypeScript, Vue.js, React, Redux" },
  { title: "Backend :", skills: "VB.NET, Node.js" },
  { title: "Databases :", skills: "MySQL, SQL Server" },
  { title: "Version Control :", skills: "GitHub" }
];
const Skills = function () {
  return (
    <div>
      <h1 className="text-amber-600 font-bold">Skills</h1>
      <div className="pl-2">
        <div className="text-xs">
          {skillsData.map((item) => (
            <div key={item.id} className="pt-2 ">
              <span className="text-gray-500 font-bold">{item.title}</span>
              <span className="pl-1">{item.skills}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

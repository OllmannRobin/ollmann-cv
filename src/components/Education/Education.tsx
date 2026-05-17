const Education = function () {
  return (
    <div>
      <h1 className="text-amber-600 font-bold">Education</h1>
      <div className="pl-2">
        <div className="flex-col">
          <div className="text-xs pt-2">
            OpenClassroom (2020): Self-paced training in Node.js to master new
            technologies (Certificate obtained).
          </div>
        </div>
        <div className="text-xs pt-2">
          Opquast Certification: "Web Quality Management" | Dec 2019 (Advanced
          level).
        </div>
        <div>
          <div className="text-sm pt-2">
            <div className="text-xs">
              O’clock (May 2019 – Oct 2019): Intensive 700-hour remote bootcamp
              (Labelled "Grande Ecole du Numérique").
            </div>
            <div className="text-xs pb-1">
              {" "}
              Professional Title / Diploma obtained.
            </div>
          </div>
          <div className="text-xs">
            <ul className="pl-5 list-disc">
              <li className="pb-1">
                3 months Core Curriculum: HTML, CSS, PHP, JavaScript.
              </li>
              <li className="pb-1">1 month Specialization: React.js.</li>
              <li className="pb-1">
                1 month Project: "Oconomat" using Agile/Scrum methodology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;

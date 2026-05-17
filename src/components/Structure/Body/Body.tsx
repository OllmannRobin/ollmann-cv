import ProfessionalExperience from "../../ProfessionalExperience/ProfessionalExperience";
import Education from "../../Education/Education";
import Skills from "../../Skills/Skills";
import PersonalInformation from "../../PersonalInformation/PersonalInformation";
const Body = function () {
  return (
    <div className="flex pr-30 justify-center">
      <div className="flex justify-center">
        <div className="w-full md:w-1/4">
          <PersonalInformation></PersonalInformation>
        </div>
        <div className="w-full md:w-3/4">
          <ProfessionalExperience></ProfessionalExperience>
          <Education></Education>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
};

export default Body;

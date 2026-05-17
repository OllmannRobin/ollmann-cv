const PersonalInformation = function () {
  return (
    <div className="pr-5 pl-2">
      <div className="flex-1">
          <img
            className="w-48 h-60 rounded-full object-cover"
            src="src/assets/robin.png"
          ></img>
        </div>
      <h1 className="text-md text-amber-600 font-bold pt-5">Personal Information</h1>
      <div>
        <div className="pl-2 pt-2">
          <div className="text-gray-500 font-bold">Adress</div>
          <div>Moutiers 54660</div>
        </div>
        <div className="pl-2 pt-2">
          <div className="text-gray-500 font-bold">Phone</div>
          <a href="tel:+33637130111">+33 6 37 13 01 11</a>
        </div>
        <div className="pl-2 pt-2">
          <div className="text-gray-500 font-bold">Email</div>
          <a href="mailto:ollmann.robin@gmail.com">ollmann.robin@gmail.com</a>
        </div>
        <div className="pl-2 pt-2">
          <div className="text-gray-500 font-bold">Driver's License</div>
          <div>Category B (Car)</div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-500 font-bold pl-2 pt-2">Languages</h1>
        <div className=" pl-2">
          <div>
            <span className="">French : </span>
            <span>Native </span>
          </div>
          <div>
            <span className="">English : </span>
            <span>Professional Working Proficiency (Technical focus)</span>
          </div>
        </div>
        <div className="pl-2 pt-2">
          <div>
            <a
              href="https://www.linkedin.com/in/ollmann-robin/"
              target="_blank"
            >
              <img src="src/assets/linkedin.png" alt="" width={20} />
            </a>
          </div>
        </div>
        <h1 className="text-amber-600 font-bold pt-3">Interests</h1>
        <div className="pl-2 pt-2">
          <div className="text-gray-500 font-bold">Video Game Programming</div>
          <div className="text-xs">
            Coding as a passion and sharing technical knowledge
          </div>
        </div>
        <div className="pl-2">
          <div className="text-gray-500 font-bold pt-2">
            Fitness & Running
          </div>
          <div className="text-xs">For discipline, energy, and focus.</div>
        </div>
        <div className="pl-2">
          <div className="text-gray-500 font-bold pt-2">
            Japanese Culture
          </div>
          <div className="text-xs">
            Exploring different perspectives and ways of thinking.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

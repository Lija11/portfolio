import Education from "./Education";
import NewResume from "./NewResume";
import ProfessionalTrainee from "./ProfessionalTrainee";

const FAQdata = [
  {
    title: "Profession Skills",
    details: <NewResume />,
    status: true,
  },
  {
    title: "Education",
    details: <Education />,
    status: false,
  },
  {
    title: " Professional Trainee",
    details: <ProfessionalTrainee />,
    status: false,
  },
];

export default FAQdata;

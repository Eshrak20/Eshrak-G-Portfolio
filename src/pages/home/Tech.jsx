
import { BallCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../components/hoc";
import { technologies } from "../../components/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

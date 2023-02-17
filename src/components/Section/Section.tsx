import { ISectionProps } from "types/data";
import { SectionTodo } from "./Section.styled";

const Section: React.FC<ISectionProps> = ({ children }) => {
  return <SectionTodo>{children}</SectionTodo>;
};

export default Section;

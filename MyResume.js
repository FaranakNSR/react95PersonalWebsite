import TabContentHeader from "./Header";
import { Button } from "react95";
const MyResume = () => {
  return (
    <div>
      <TabContentHeader header="Download my resume!" />
      <form
        style={{ display: "flex", justifyContent: "center" }}
        method="get"
        // action="../Cover-Letter-Resume-Nash-Boisvert.pdf"
      >
        <Button type="submit">Click me!</Button>
      </form>
    </div>
  );
};

export default MyResume;

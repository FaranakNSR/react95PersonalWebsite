import TabContentHeader from "./Header";
import { List, ListItem, Divider, Fieldset } from "react95";

const MyProjects = () => {
  return (
    <div>
      <TabContentHeader header="Some of my stuff!" />
      <Fieldset
        style={{ fontWeight: "bold", marginBottom: "1rem" }}
        label="Disclaimer"
      >
        Sorry, many of my recent project details and source code is locked
        behind NDA&apos;s due to confidentiality agreements. Feel free to ask or
        inquire for more details about the things I&apos;ve done!
      </Fieldset>
      <List fullWidth>
        <ListItem style={{ fontWeight: "bold" }} as="a" href="#">
          Format-contribute to something
        </ListItem>
        <Divider />
        <ListItem style={{ fontWeight: "bold" }} as="a" href="#">
          My Portfolio
        </ListItem>
        <Divider />
        <ListItem style={{ fontWeight: "bold" }} as="a" href="#">
          My old website with less class writing html css
        </ListItem>
        <Divider />
        <ListItem style={{ fontWeight: "bold" }} as="a" href="#">
          Farah&apos;s Bikerun website!
        </ListItem>
        <Divider />
        <ListItem style={{ fontWeight: "bold" }} as="a" href="#">
          First years final project/app-dev
        </ListItem>
        <Divider />
        <ListItem
          style={{ fontWeight: "bold" }}
          as="a"
          href="https://github.com/FaranakNSR"
        >
          Check out my Github for more!
        </ListItem>
      </List>
    </div>
  );
};

export default MyProjects;

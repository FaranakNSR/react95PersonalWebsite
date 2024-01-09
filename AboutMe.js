import styles from "../styles/About.module.css";
import { useState } from "react";
import WeatherWindow from "./WeatherWindow";

import TabContentHeader from "./Header";
import { Fieldset, Anchor } from "react95";

const AboutMe = () => {
  const [showWeather, setShowWeather] = useState(false);

  return (
    <div>
      <TabContentHeader header="Faranak Nasoori" />
      <Fieldset className={styles.fieldSet} label="Location">
        Edmonton, Alberta, Canada -{" "}
        <Anchor className={styles.pointer} onClick={() => setShowWeather(true)}>
          [weather?]
        </Anchor>
        {showWeather && (
          <WeatherWindow handleWeatherClose={() => setShowWeather(false)} />
        )}
      </Fieldset>
      <Fieldset className={styles.fieldSet} label="Education">
        NAIT -Diploma, Computer Software Development
      </Fieldset>
      <Fieldset className={styles.listFieldSet} label="About">
        <ul>
          <li className={styles.li}>
            - Dean&apos;s Honour Roll 4 semesters in a row{" "}
          </li>
          <li className={styles.li}>
            - Four-month Capstone Project focused on developing a new social
            media brand from 0 to 100 with{" "}
            <Anchor href="https://www.myunitedway.ca/">
              (United Way of the Alberta Capital Region )
            </Anchor>
          </li>
          <li className={styles.li}>- Full stack role</li>
          <li className={styles.li}>- Ran student tutoring Nimbus</li>
          <li className={styles.li}>- Dog lover</li>

          <li className={styles.li}>- V 1.0 released in 1996</li>

          <li className={styles.li}>- Open-source contributor</li>
          <li className={styles.li}>- Seeking full time employment</li>
        </ul>
      </Fieldset>
    </div>
  );
};

export default AboutMe;

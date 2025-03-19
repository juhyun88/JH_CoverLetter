import React, { useEffect, useState } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section className="skills">
      <h2>나의 스킬들</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

import React, { useEffect, useState } from 'react';
import profileData from '../data/profile.json';

const AboutMe = () => {
  const [profile, setProfile] = useState({
    bio: '',
    contact: {
      email: '이메일 없음',
      linkedin: '#',
      github: '#',
    },
  });

  useEffect(() => {
    if (profileData) {
      setProfile(profileData);
    }
  }, []);

  return (
    <section className="about">
      <h2>약력 입력</h2>
      <p>{profile.bio}</p>
      <div className="contact-info">
        <p>Email: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
        <p>LinkedIn: <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
        <p>GitHub: <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">My GitHub</a></p>
      </div>
    </section>
  );
};

export default AboutMe;

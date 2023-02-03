import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Zhao Lee',
    aria: 'My name is Zhao Lee',
  },
  title: {
    display: 'Full-stack Web Developer',
    aria: 'I am a Full-stack Web Developer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/robertlee903/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/zhaolee97/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/1yBaTjq95LNH2VRg-AKqy0PduY3Xqh7pN/',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:zhao97.dev@gmail.com',
    },
  ],
};

export default config;

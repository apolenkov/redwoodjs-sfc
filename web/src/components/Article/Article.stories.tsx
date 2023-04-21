import type { ComponentMeta } from '@storybook/react';

import Article from './Article';

const ARTICLE = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  user: {
    id: 1,
    name: 'Jon Par',
    roles: 'user',
    posts: [],
    email: 'user@user.com',
  },
};

export const full = () => {
  return <Article article={ARTICLE} />;
};

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />;
};

export default {
  title: 'Components/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

// Manually seed via `yarn rw prisma db seed`
// Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`

import type { Prisma } from '@prisma/client';
import { db } from 'api/src/lib/db';

import { hashPassword } from '@redwoodjs/auth-dbauth-api';

export default async () => {
  try {
    const postExamples: Prisma.PostCreateArgs['data'][] = [
      {
        id: 1,
        title: 'Welcome to the blog!',
        body: "I'm baby single- origin coffee kickstarter lo - fi paleo skateboard.Tumblr hashtag austin whatever DIY plaid knausgaard fanny pack messenger bag blog next level woke.Ethical bitters fixie freegan,helvetica pitchfork 90's tbh chillwave mustache godard subway tile ramps art party. Hammock sustainable twee yr bushwick disrupt unicorn, before they sold out direct trade chicharrones etsy polaroid hoodie. Gentrify offal hoodie fingerstache.",
        userId: 1,
      },
      {
        id: 2,
        title: 'A little more about me',
        body: "Raclette shoreditch before they sold out lyft. Ethical bicycle rights meh prism twee. Tote bag ennui vice, slow-carb taiyaki crucifix whatever you probably haven't heard of them jianbing raw denim DIY hot chicken. Chillwave blog succulents freegan synth af ramps poutine wayfarers yr seitan roof party squid. Jianbing flexitarian gentrify hexagon portland single-origin coffee raclette gluten-free. Coloring book cloud bread street art kitsch lumbersexual af distillery ethical ugh thundercats roof party poke chillwave. 90's palo santo green juice subway tile, prism viral butcher selvage etsy pitchfork sriracha tumeric bushwick.",
        userId: 1,
      },
      {
        id: 3,
        title: 'What is the meaning of life?',
        body: 'Meh waistcoat succulents umami asymmetrical, hoodie post-ironic paleo chillwave tote bag. Trust fund kitsch waistcoat vape, cray offal gochujang food truck cloud bread enamel pin forage. Roof party chambray ugh occupy fam stumptown. Dreamcatcher tousled snackwave, typewriter lyft unicorn pabst portland blue bottle locavore squid PBR&B tattooed.',
        userId: 1,
      },
    ];
    const roles = {
      admin: 'John Doe',
      moderator: 'Peter Zak',
      user: 'Vil Toyk',
    };

    const users: Prisma.UserCreateArgs['data'][] = Object.keys(roles).map(
      (roleName: string, index: number): Prisma.UserUncheckedCreateInput => {
        const [hashedPassword, salt] = hashPassword(roleName);

        return {
          id: index + 1,
          name: roles[roleName],
          email: `${roleName}@${roleName}.com`,
          hashedPassword,
          salt,
          roles: roleName,
        };
      }
    );

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    );

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      users.map(async (data: Prisma.UserCreateArgs['data']) => {
        const record = await db.user.create({ data });
        console.log(record);
      })
    );

    await Promise.all(
      postExamples.map(async (data: Prisma.PostCreateArgs['data']) => {
        const record = await db.post.create({ data });
        console.log(record);
      })
    );
  } catch (error) {
    console.warn('Please define your seed data.');
    console.error(error);
  }
};

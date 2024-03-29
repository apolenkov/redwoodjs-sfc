export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: 1,
      title: 'First Post',
      body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
      createdAt: '2020-01-01T12:34:56Z',
      user: {
        id: 1,
        name: 'Jon Por',
        email: 'jon@mail.com',
        roles: 'user',
      },
    },
    {
      id: 2,
      title: 'Second Post',
      body: `Master cleanse gentrify irony put a bird on it hexagon enamel pin. Pop-up man braid artisan pug tilde synth lo-fi. Ethical tofu portland keytar waistcoat. Pabst authentic hammock chillwave twee trust fund. Lyft humblebrag ramps irony unicorn.`,
      createdAt: '2020-01-01T12:34:56Z',
      user: {
        id: 2,
        name: 'Mick Noor',
        email: 'mick@mail.com',
        roles: 'user',
      },
    },
  ],
});

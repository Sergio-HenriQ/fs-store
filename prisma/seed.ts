const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://utfs.io/f/a15f14ec-df64-4913-9f73-ea2b702a909a-1uby4u.png",
      },
    });

    const mouses = [
      {
        name: "Logitech M720 Triathlon",
        slug: "logitech-m720-triathlon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a3a49bb4-e7a2-49b9-b031-0be732c01663-j0xzh3.png",
          "https://utfs.io/f/c6071a82-3a3a-4d84-87a8-41f2710ec069-akzgs6.png",
          "https://utfs.io/f/d3aa0e6f-2005-48ac-8e6d-2a0bdd2f8992-250y39.png",
          "https://utfs.io/f/789b28c2-bc91-4402-9cd6-0ff622f9e27a-6axklo.png",
        ],
        basePrice: 352,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/2b961461-dfc4-47a2-88c9-782572d0f209-otetkp.png",
          "https://utfs.io/f/dc54fb1d-d868-4a93-9117-cf000d3c640b-x6ep3u.png",
          "https://utfs.io/f/1c533bcb-2f92-4c95-aca6-209bb8eac314-thphc5.png",
          "https://utfs.io/f/dabaef16-2b68-4b15-9777-4144a62e1405-l4plt0.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fd91c2c0-318d-4f1c-930e-612823fb5dfe-idaumz.png",
          "https://utfs.io/f/2525d27f-112b-420e-b121-123269165cbd-40f9t2.png",
          "https://utfs.io/f/e2b5d1e1-d3c5-42f5-b3eb-f8860bbde365-qe5e93.png",
          "https://utfs.io/f/11797948-c78b-4224-bd76-0153d9488026-m98ja0.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/3213ee48-dffb-4134-96b3-89fb7ae6975c-6pfvtn.png",
          "https://utfs.io/f/1912ee3a-df8a-41c2-a8f0-af64c1e1cf21-t3609o.png",
          "https://utfs.io/f/22c02280-99e3-46d2-982b-3ecf44c1f1e0-jk7x9f.png",
          "https://utfs.io/f/f534b7e7-edf4-4bd6-946b-05aa9ff5bef7-2ti76m.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/f339ea54-fe58-4c52-917d-9d375f4df1c9-1xd5uq.png",
          "https://utfs.io/f/cc613ee3-7aab-4cdf-af18-2f0b1093f165-2xbhct.png",
          "https://utfs.io/f/e773f0cd-ad5a-42da-8bae-569543b4c891-7s04kc.png",
          "https://utfs.io/f/d5f83764-82f3-4fb2-ae39-188141a1d4d1-cmorrv.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/0a89ad75-110a-4ab1-a453-f4af1cf3905e-5jk68j.png",
          "https://utfs.io/f/bbcd9761-2abe-41ab-841b-f230a044791b-m16w6s.png",
          "https://utfs.io/f/d0721161-6fb6-44c2-9acb-510775a4ad91-wiafu3.png",
          "https://utfs.io/f/7ff8f4d8-13c4-4ff9-a1ca-acf5aa54e57b-g0npvu.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://utfs.io/f/5c5c8eb7-aa46-42eb-91b2-4315e7ebe307-lmbr7f.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/472e5978-e383-4ee3-a804-a9e79dca4b2a-33zg48.png",
          "https://utfs.io/f/ab3b79a1-0e4c-4979-a8c3-d68ee7c42b8c-ausijr.png",
          "https://utfs.io/f/7134b814-cb98-46b9-8b22-586384799b25-otkh7q.png",
          "https://utfs.io/f/5fe91130-0170-4e78-926b-99a7056b3514-w8rm3f.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/85373ef8-09e4-4675-858f-327a36c4e55e-m9yl8y.png",
          "https://utfs.io/f/33a5c31e-52db-41fe-a63a-b3697b331fac-du02k1.png",
          "https://utfs.io/f/48355f49-9f59-4e1b-9956-e703b7c856ae-5e1jv4.png",
          "https://utfs.io/f/af9c651b-fb93-4adb-94f0-f19a83930ddf-31wytt.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/52f7135c-05ae-42c3-88f5-4900f0908e24-u67teu.png",
          "https://utfs.io/f/06521d16-6571-4c64-8c01-1df8b10e2cc4-58nqzp.png",
          "https://utfs.io/f/3f9484c3-b1b2-4372-ac30-38991fa2841a-jowbfg.png",
          "https://utfs.io/f/c4cd8a93-06ae-493f-b691-2970c09101b7-qeno4j.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/12c839eb-db9c-49d2-9014-ea559908d102-tbfuuf.png",
          "https://utfs.io/f/1c59fb57-96e3-4872-ad04-a7a8b0e42187-mk1c1y.png",
          "https://utfs.io/f/e35519e9-fd28-4fe1-9c4b-4d46e07d15d1-fsmt9h.png",
          "https://utfs.io/f/5be6d34c-19f0-44fd-b21f-2ab1786abe99-918ah0.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/f6cbea64-fb97-4f18-8504-1d77c22027d4-t8tglh.png",
          "https://utfs.io/f/24d8afbc-4f7f-40c2-be25-266b1bb1bf6c-4b9e6c.png",
          "https://utfs.io/f/f59dcea4-ac52-4666-b9a5-d7de4f0de9de-kmao8t.png",
          "https://utfs.io/f/3ad0ea16-28e9-400e-8b41-647f2a45797e-ph9bb6.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/590e7f94-7274-4589-a1cb-a41382dd44fe-b14pyz.png",
          "https://utfs.io/f/7fee6a63-54b7-446e-9ce7-90163e74dd42-7jaqka.png",
          "https://utfs.io/f/8e1ae64f-6640-417e-96bc-1c6e80074d41-41gr5l.png",
          "https://utfs.io/f/51db1de0-dfd5-4225-8337-426588f2ae42-jmrqw.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://utfs.io/f/4c07e184-a892-4b26-a1c4-7bcc870208b6-dowqtl.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/71f7b6ef-77de-4227-86a5-34ea61760bd5-q4fy0h.png",
          "https://utfs.io/f/13473814-1656-4d39-9882-b031374d83f0-ykegpe.png",
          "https://utfs.io/f/65f7fb2e-a147-4105-b6d8-7b96e4ce2311-s0r2kt.png",
          "https://utfs.io/f/8dac6942-b915-4ad5-9634-7188d4cb9a8b-jksjvw.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6c3369bc-e180-4b2c-ba0d-802d89c120d6-c38ve3.png",
          "https://utfs.io/f/bb6acc82-9bcf-45a1-a010-fdab56cb5689-7vkzey.png",
          "https://utfs.io/f/3509f5e8-3ac5-4179-8249-23ea500bb8d4-3nx3ft.png",
          "https://utfs.io/f/d5476463-1567-4968-a272-97f9b73912a6-jqsjc.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/bd67a294-48d8-414c-939a-8329a4debe44-qjco5l.png",
          "https://utfs.io/f/be90d9c6-ee1d-449f-99d2-d298d986b730-n1ioqw.png",
          "https://utfs.io/f/8caebe1e-0b3e-4477-9184-a14d38a2168c-jjopc7.png",
          "https://utfs.io/f/6675fbc1-111d-420c-836c-c24ddd20894d-g1upxi.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6148125f-ba90-4ddd-be46-1404f55a477f-31f1fj.png",
          "https://utfs.io/f/003eff56-9c9a-4846-b133-7abfa2daa682-axcx8g.png",
          "https://utfs.io/f/77f8055e-6d14-4c1a-ada5-724ec4d6e7ff-ow4vwf.png",
          "https://utfs.io/f/68c203c3-92e1-40dc-8843-e3bd7a2370b6-w677eq.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/4b816911-2a42-4f74-866d-a7ad5c1e411d-5g93b8.png",
          "https://utfs.io/f/00b5b076-e9a2-4c27-b440-7bc5038e299d-1yf3wj.png",
          "https://utfs.io/f/30f00218-a247-43f4-94a5-58994b17f0e2-1jevi6.png",
          "https://utfs.io/f/e28e065b-571a-4365-8a7c-62b55ec75d59-518uwv.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c9bb1224-60e2-479b-a877-be1821846a91-rkph6m.png",
          "https://utfs.io/f/64dcfafe-ec05-482e-a955-cb26ee6761f4-dlxiin.png",
          "https://utfs.io/f/20fa42e1-3013-439e-97e3-33456138a41e-cug5c.png",
          "https://utfs.io/f/123b1ccf-20cd-45bc-a895-bf408f7ab22c-ebmetb.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://utfs.io/f/a774894c-da0a-4c1c-920d-f3f96ef643dd-fejzqz.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/8912c05f-adc6-4b5a-a158-8f62d8a240e0-on5ldd.png",
          "https://utfs.io/f/e46b3a53-a4ab-48ae-93c4-b520c614f402-x3442a.png",
          "https://utfs.io/f/e376c378-5b15-4345-9d38-29dd63e2ec77-ti1f7x.png",
          "https://utfs.io/f/5f863d2c-aa81-4cd2-99a3-468386b0d40e-l22wj0.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/48e46e11-4c5d-4bc3-9897-2c2b9b9caed9-n9raei.png",
          "https://utfs.io/f/06abed28-1b44-4b39-8cec-cdd058d067d7-1nss0n.png",
          "https://utfs.io/f/35f84fd7-efab-437d-a89f-5dcd3cf813b9-qlcufs.png",
          "https://utfs.io/f/b38b8241-ccab-45f9-a49a-54a88e2584a4-ji7547.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/827bb694-fa50-4b18-b45e-5604f557e9a5-culmza.png",
          "https://utfs.io/f/1773f39f-e68c-40b2-be30-e162276afc56-gv99k9.png",
          "https://utfs.io/f/e348ba3e-c1d8-4153-947b-6f5fa1e304b6-ofzvvc.png",
          "https://utfs.io/f/1ae55b69-6179-4bea-bbec-0611c60aac94-59v0o7.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/1854c43f-6cb2-4f2c-b96e-81a07fd59a67-k45quc.png",
          "https://utfs.io/f/d1dd7dfc-f367-404d-816c-214a83d3cca9-dcr81v.png",
          "https://utfs.io/f/ddf9d77c-4d2b-4231-a8ba-aa404c8b6dab-6lcp9e.png",
          "https://utfs.io/f/bef593ae-81e4-40b6-a39f-778e4d0ae15e-61tj3.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/3fafd062-1ebe-420a-809f-1fb4f714a1b0-x7k2s6.png",
          "https://utfs.io/f/f04e9b5b-95fe-4355-9778-6f27ce1d3338-zcern9.png",
          "https://utfs.io/f/016e7ef4-c918-473b-aed3-065d2cc6e1ff-xjulgs.png",
          "https://utfs.io/f/64a66abc-04b6-4425-af80-63f9a74e40cc-vezwlp.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/187a35be-24dd-49fd-8f04-6818f996da9e-x7tx5v.png",
          "https://utfs.io/f/0b8e8812-5a63-4494-900f-3436561b9983-zcom0y.png",
          "https://utfs.io/f/aabc2c44-b929-43d6-a910-74509d608d13-xjkr33.png",
          "https://utfs.io/f/cf6f6344-49f3-4630-9a0b-1384e0ef2968-veq280.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://utfs.io/f/2d739b0a-5d57-402b-8b60-0091192d3621-56vqil.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/cd17d191-ad5b-4dac-b70f-b4271b7cf56f-l17xro.png",
          "https://utfs.io/f/a499edc6-2a31-4feb-8555-2cdc164004bf-te7tat.png",
          "https://utfs.io/f/871dd636-5f8e-4603-8152-338d13490876-x9wd56.png",
          "https://utfs.io/f/ef41fa38-e20b-4c76-84da-e6237f385eca-owwhm1.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6a62a087-3418-4e75-925c-9627a60ce3e8-rax9q4.png",
          "https://utfs.io/f/39052635-5ab3-40d0-bce6-9a5a559e53b8-w5lwxn.png",
          "https://utfs.io/f/4ec72073-1e13-409a-aeb8-07e0785bd204-y0thty.png",
          "https://utfs.io/f/0c643e90-441d-4cdc-9b53-c07be37cd362-t64umf.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ffbef900-c232-4d3d-8bf3-8574cbd6eeb4-60cp0c.png",
          "https://utfs.io/f/a80f3d1c-f3c8-43e1-8530-e2679c7592c5-2cn6it.png",
          "https://utfs.io/f/dbf8340f-8bdb-4eae-994e-f40335e539c3-apn21y.png",
          "https://utfs.io/f/55f307de-67fb-4664-ae5f-ea113938e3f7-j2mxl3.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c811b4c1-8d6e-43a9-b837-f243af805544-1wl9gu.png",
          "https://utfs.io/f/5b409bba-3d89-4e57-8be0-3a4ab15f4649-qu5bvz.png",
          "https://utfs.io/f/4931e2e1-cc41-45fc-951d-839313dd5bcb-j9eno0.png",
          "https://utfs.io/f/3188f9a9-68d5-4367-9360-84479b68b25d-5o5er5.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/2c6cd5ce-2cc1-420f-9c2c-978bd20da33d-yi0au.png",
          "https://utfs.io/f/b6484f4c-c947-4475-9739-5f1b3794ff07-pw22pz.png",
          "https://utfs.io/f/fd9e4098-d9ae-4b35-8893-3ce5d8fb4d0a-k7hwu0.png",
          "https://utfs.io/f/844c6c12-25e0-49f5-990e-282949880806-4q25l5.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/181afb10-4b24-4aaf-993d-d7d9ff7d2853-al6r5z.png",
          "https://utfs.io/f/0007fab7-38b4-4ec5-bd77-7a19ae47d66b-zid8e0.png",
          "https://utfs.io/f/18076b0e-5f95-4193-8446-947db814b4dc-akt5yv.png",
          "https://utfs.io/f/56f3ecba-599d-4864-ae98-c96e73c26e20-ecqwga.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://utfs.io/f/99b8712a-1fbb-4f3b-88f8-6ec8ae7d94e0-c6c33c.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/466955b1-507d-4c55-a95e-6e284a1f0c1b-b5j8co.png",
          "https://utfs.io/f/5d91cf15-0005-4096-aaf9-a3f0c523b1ae-4e4pk7.png",
          "https://utfs.io/f/3a6e8357-810e-4e63-b540-0ffaa435034c-2d9t8a.png",
          "https://utfs.io/f/5d91cf15-0005-4096-aaf9-a3f0c523b1ae-4e4pk7.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c224a652-7b66-4a7d-8048-ec4911c20ea7-cukwpp.png",
          "https://utfs.io/f/91297e6a-5b50-433a-86c4-24eaf56858b3-gv9ztu.png",
          "https://utfs.io/f/199d5f4d-5426-4d60-8099-43dd2982d9a2-ofz5lr.png",
          "https://utfs.io/f/5b507547-b978-495d-87d5-8c5be7f46177-59vqxs.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/4cee5462-d6da-4273-85a7-30ec1f55530f-o2pxdo.png",
          "https://utfs.io/f/fd883d59-19cc-45dd-8e8c-065d99d7cba2-j81a65.png",
          "https://utfs.io/f/2f4ed207-dea4-4532-a206-560ee823157e-edcmym.png",
          "https://utfs.io/f/40785907-99f9-4e3c-9a14-24e680bbbca6-9inzr3.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6c607db0-1903-4798-9081-8a9840550ea4-gxgbj0.png",
          "https://utfs.io/f/67c4a78f-0137-461d-8191-4c7f114a4e79-5g9sx1.png",
          "https://utfs.io/f/6c430078-3dca-46a8-a240-128289066068-rtzxd2.png",
          "https://utfs.io/f/e0c96157-cdb9-422a-bc08-36996a82f1e1-kte061.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/07dca9e4-5b47-4399-9523-836d89e99e91-f1tve5.png",
          "https://utfs.io/f/19763c2c-cf6c-43a5-b01d-c038b3b9a32c-q9fa1g.png",
          "https://utfs.io/f/dc298394-dfa4-46bf-a3cb-53fd8314494a-3gfmi3.png",
          "https://utfs.io/f/1cb95550-b674-4941-8436-4cfded6d1809-x6aj1m.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/99e0ded1-513e-42e1-b199-f87b503a2452-uk14e7.png",
          "https://utfs.io/f/4d41e025-c51d-471d-b427-4a4646083905-wovt9a.png",
          "https://utfs.io/f/fb94a323-02a2-42d2-9362-4f4fb379b639-ytqi4d.png",
          "https://utfs.io/f/32dee3d5-8478-414a-a754-f5295f587f02-y2iuzo.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

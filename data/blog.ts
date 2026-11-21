
import blogArchive from "./blog-original.json";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogContentBlock = {
  type: string;
  text: string;
};

export type BlogArticleImage = {
  src: string;
  alt: string;
};

export type BlogArticleLink = {
  text: string;
  href: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  content: BlogSection[];
  faqs: BlogFAQ[];
  body?: BlogContentBlock[];
  images?: BlogArticleImage[];
  links?: BlogArticleLink[];
  imageAlt?: string;
  publishedAt?: string | null;
  modifiedAt?: string | null;
  author?: string;
};

const curatedArticles: BlogArticle[] = [
  {
    category: "Erosion Control",
    title:
      "Coir Geotextile Supplier for Government Projects: How Agencies Approve It and What to Ask Before You Bid",
    description:
      "Explore coir geotextile applications in public infrastructure projects, approval requirements, product grades and important questions to ask suppliers.",
    image: "/images/blog/coir-geotextile.jpg",
    href: "https://www.adhiannamcoir.com/post/coir-geotextile-supplier-government-projects",

    content: [
      {
        heading: "Understanding Government Approval Requirements",
        paragraphs: [
          "Coir geotextiles are natural fibre materials used for erosion control, slope protection and soil stabilisation. Before using them in a government infrastructure project, contractors need to understand the approval requirements specified by the relevant agency.",
          "Approval processes differ across regions. Some agencies require products to appear on qualified or approved product lists, while others evaluate technical test reports, product specifications and samples.",
        ],
        points: [
          "United States: State departments of transportation may require qualified product list approval and recognised test data.",
          "Europe and the UK: Project requirements may refer to relevant geotextile standards and CE marking where applicable.",
          "India: BIS standards include IS 15869:2020 for open-weave coir geotextiles and IS 15872 for erosion control applications.",
          "Other international markets: Consultants may evaluate GSM, tensile strength, functional life and product samples against project specifications.",
        ],
      },
      {
        heading: "What Should You Ask a Coir Geotextile Supplier?",
        paragraphs: [
          "Selecting a supplier involves more than comparing prices. Contractors should confirm that the product specification matches the project design and that the supplier can provide the necessary technical documentation.",
        ],
        points: [
          "Weave and GSM: Open-weave products allow vegetation to grow through the material, while closer weaves provide greater soil coverage. Adhi Annam offers grades from 400 to 900 GSM, with custom options.",
          "Testing and standards: Ask for available test reports and confirm whether samples can be supplied for agency or third-party testing.",
          "Functional life: Woven coir geotextiles generally have a functional life of around 3 to 6 years, depending on GSM and site conditions.",
          "Roll dimensions: Common widths include 1 m, 2 m and 2.4 m, with standard lengths of 25 m and 50 m. Custom sizes may be requested.",
          "Lead time: Confirm production and delivery schedules before finalising a project bid.",
          "Shipping: Discuss FOB, CIF or CFR terms and available ports such as Tuticorin, Chennai and Cochin.",
          "Quality systems: Check the manufacturer's quality management and environmental management certifications.",
          "Technical guidance: Ask whether the supplier can recommend weave and GSM based on slope gradient, slope length and soil type.",
        ],
      },
      {
        heading: "Applications in Public Infrastructure Projects",
        paragraphs: [
          "Coir geotextiles support vegetation establishment and help protect exposed soil in a range of infrastructure and land-restoration projects.",
        ],
        points: [
          "Highways and road embankments: Protecting slopes during vegetation establishment.",
          "Railway cuttings: Supporting soil stabilisation along railway corridors.",
          "River and canal banks: Helping protect banks while supporting natural vegetation.",
          "Mining and landfill rehabilitation: Covering and stabilising disturbed land.",
          "Rural roads: Supporting soil reinforcement and erosion-control applications.",
        ],
      },
      {
        heading: "Limitations to Consider",
        paragraphs: [
          "Coir geotextile is a biodegradable material intended for temporary erosion-control and vegetation-establishment functions. It is not a replacement for every permanent geotechnical reinforcement requirement.",
          "In high-flow water channels, additional reinforcement or specialised erosion-control products may be needed. Contractors should also allow sufficient time for product testing and agency approval when required.",
        ],
        points: [
          "Coir naturally degrades over time, commonly within approximately 3 to 6 years depending on conditions.",
          "High-flow channels may require reinforced blankets or other engineered erosion-control systems.",
          "Products should be selected according to the project's technical specification.",
          "Ask for GSM tolerance information and supporting test certificates.",
        ],
      },
      {
        heading: "Plan Your Coir Geotextile Requirement",
        paragraphs: [
          "For a public infrastructure project, share the slope gradient, slope length, soil type and applicable agency standard with the manufacturer. These details help determine a suitable weave, GSM and product format.",
          "Adhi Annam Coir Comforts manufactures woven coir geotextiles and coir erosion-control blankets at its facility in Pollachi, Tamil Nadu, India, and supplies products for domestic and international requirements.",
        ],
      },
    ],

    faqs: [
      {
        question: "Is coir geotextile approved for government road projects?",
        answer:
          "Approval depends on the agency and project specification. India includes coir geotextile in relevant BIS standards and rural road programmes. Other regions may require qualified product list approval, project-specific testing or technical documentation.",
      },
      {
        question: "How long does coir geotextile last?",
        answer:
          "Woven coir geotextile generally has a functional life of around 3 to 6 years, depending on GSM and site conditions.",
      },
      {
        question: "What GSM is used for slope protection?",
        answer:
          "Common coir geotextile grades range from 400 to 900 GSM. The appropriate grade depends on slope conditions, soil type and project design.",
      },
      {
        question: "Who manufactures coir geotextile for export?",
        answer:
          "Adhi Annam Coir Comforts Pvt. Ltd. manufactures woven coir geotextiles and erosion-control blankets in Pollachi, Tamil Nadu, India.",
      },
    ],
  },

  {
    category: "Interior Solutions",
    title:
      "Coir Engraved Boards: Sustainable Signage and Decor for Indian Offices",
    description:
      "Discover how compressed coconut fibre boards can be used for office signage, reception branding, nameplates and natural interior decoration.",
    image: "/images/blog/coir-engraved-boards.jpg",
    href: "https://www.adhiannamcoir.com/post/coir-engraved-board-signage",

    content: [
      {
        heading: "What Is a Coir Engraved Board?",
        paragraphs: [
          "A coir engraved board is a rigid panel made from compressed coconut fibre. Logos, lettering, patterns and designs can be engraved into its surface to create signage, nameplates, wall decor and branded displays.",
          "Unlike smooth acrylic or PVC, coir has a visible natural fibre texture. This gives the finished board a warm, tactile appearance that can complement offices, hotels, restaurants and other interiors.",
          "Coir engraved boards are part of the wider range of coir interior panels and boards used in interior and architectural applications.",
        ],
      },
      {
        heading: "Where Can Coir Engraved Boards Be Used?",
        paragraphs: [
          "Coir engraved boards are suitable for interiors where natural materials and distinctive textures help communicate a brand's identity.",
        ],
        points: [
          "Office signage: Reception logos, nameplates and directional signs.",
          "Hospitality decor: Branding and decorative displays for hotels, restaurants and cafes.",
          "Events and exhibitions: Branded display boards that stand apart from conventional synthetic signage.",
          "Wall art and recognition: Engraved decorative panels, awards and recognition plaques.",
          "Reception and lobby branding: Natural-finish displays that create a distinctive first impression.",
        ],
      },
      {
        heading: "How Do Coir Boards Compare with Acrylic and MDF?",
        paragraphs: [
          "Coir boards compete on natural appearance, texture and sustainability rather than being the lowest-cost signage material. Acrylic and MDF are often cheaper and provide smooth, uniform surfaces.",
          "Coir offers a different visual experience. Its natural fibre texture adds depth to bold logos and lettering, making the material itself part of the design.",
          "For very fine details or photographic-quality finishes, a smooth synthetic panel may be more suitable. Coir is a better fit when the design benefits from a bold, tactile and organic appearance.",
        ],
      },
      {
        heading: "Customisation and Design Options",
        paragraphs: [
          "Coir engraved boards can be customised according to a company's logo, artwork and interior requirements. Board dimensions, thickness and finish can be planned around the intended application.",
          "Businesses can share their logo, preferred dimensions and installation location to discuss a suitable design and sample.",
        ],
        points: [
          "Custom logos and lettering.",
          "Decorative patterns and artwork.",
          "Made-to-order board sizes and thicknesses.",
          "Designs for offices, hospitality interiors and exhibitions.",
        ],
      },
      {
        heading: "A Natural Choice for Branded Interiors",
        paragraphs: [
          "Coir is a natural agricultural fibre obtained from coconut husk. Using it in signage and decorative panels offers an alternative to conventional plastic-based materials.",
          "For businesses that want their physical spaces to reflect their sustainability goals, coir signage can create a consistent natural look across reception areas, offices and branded displays.",
          "Adhi Annam Coir Comforts manufactures coir products in Pollachi, Tamil Nadu, and offers custom design discussions for coir-based interior applications.",
        ],
      },
    ],

    faqs: [
      {
        question: "What is a coir engraved board?",
        answer:
          "It is a rigid panel made from compressed coconut fibre with logos, lettering or artwork engraved into its surface. It is used for signage, nameplates, wall decor and branded displays.",
      },
      {
        question: "Where are coir engraved boards used?",
        answer:
          "They can be used for office signage, reception branding, hospitality interiors, event displays, exhibition boards and decorative wall panels.",
      },
      {
        question: "How do coir boards compare with acrylic or MDF?",
        answer:
          "Coir offers a natural fibre texture and organic appearance. Acrylic and MDF generally provide smoother surfaces and may cost less, while coir is chosen for its distinctive natural finish.",
      },
      {
        question: "Can coir boards be custom engraved?",
        answer:
          "Yes. Logos, lettering, patterns and artwork can be planned according to the design brief, board size and finish requirements.",
      },
      {
        question: "Are coir engraved boards sustainable?",
        answer:
          "They are made using coconut fibre, a natural agricultural by-product, and offer an alternative to conventional acrylic and PVC signage.",
      },
    ],
  },

  {
    category: "Construction",
    title:
      "Coir Rolls for Construction and Landscaping: A Contractor’s Guide",
    description:
      "Learn how coir rolls are used for slope lining, drainage wraps, garden bed edging, mulching and landscaping applications.",
    image: "/images/blog/coir-rolls-construction.jpg",
    href: "https://www.adhiannamcoir.com/post/coir-roll-construction-landscaping",

    content: [
      {
        heading: "What Are Coir Rolls Used for on Site?",
        paragraphs: [
          "Coir rolls are made from needled coconut fibre and supplied in roll form. Contractors can cut them to the required length and adapt them for different construction and landscaping applications.",
          "The natural fibre structure is breathable and can retain moisture. These properties make coir rolls useful for landscaping, planting and selected erosion-control applications.",
        ],
        points: [
          "Slope lining and erosion control.",
          "Drainage wraps and filtering applications.",
          "Garden bed edging and mulching.",
          "Planter and green-wall lining.",
          "Moisture-holding layers beneath new planting.",
        ],
      },
      {
        heading: "How Are Coir Rolls Different from Erosion-Control Blankets?",
        paragraphs: [
          "Coir rolls and coir erosion-control blankets are related products, but they serve different purposes.",
          "Erosion-control blankets are specific products designed for slope stabilisation, often with reinforcing netting and defined GSM grades. Coir rolls are more flexible needlefelt materials that contractors can cut and adapt for different site tasks.",
          "For a project with a defined slope-stabilisation specification, a suitable erosion-control blanket may be required. For edging, lining, wrapping and mulching, a coir roll may be a more adaptable option.",
        ],
      },
      {
        heading: "Choosing the Right Grade for Each Application",
        paragraphs: [
          "The required coir roll grade depends on the job, site conditions and how long the material needs to function. Lighter grades are suitable for many mulching and lining applications, while heavier grades may be selected for slope and higher-load situations.",
        ],
        points: [
          "Mulching and edging: Lighter grades can help hold moisture and provide a natural layer around plants.",
          "Bed and planter lining: Medium grades can retain moisture and support planting applications.",
          "Slope and revegetation: Heavier grades can help hold soil and seed while vegetation becomes established.",
          "Drainage wraps: Coir fibre can be used in suitable filtering and separation applications around drains.",
        ],
      },
      {
        heading: "Benefits and Limitations of Coir Rolls",
        paragraphs: [
          "Coir rolls can retain moisture around planting areas and support seed germination and young plant establishment. As the natural fibre breaks down, it returns organic matter to the soil.",
          "Their biodegradability is also an important limitation. Coir rolls are intended for temporary or medium-term applications, not permanent structural separation where a long-lasting engineered material is required.",
          "For permanent sub-grade separation beneath roads or structures, contractors should use the engineered material specified by the project designer.",
        ],
      },
      {
        heading: "Planning Your Coir Roll Requirement",
        paragraphs: [
          "Before ordering, identify the application, site area, required width, length and expected service period. These details help the manufacturer recommend an appropriate product grade.",
          "Adhi Annam Coir Comforts offers coir rolls and sheets for different applications, with custom requirements discussed according to project needs.",
        ],
      },
    ],

    faqs: [
      {
        question: "What are coir rolls used for in construction and landscaping?",
        answer:
          "They are used for slope lining, erosion control, drainage wraps, garden bed edging, mulching, planter lining and moisture-holding layers in landscaping.",
      },
      {
        question: "How are coir rolls different from erosion-control blankets?",
        answer:
          "Erosion-control blankets are specified products designed for slope stabilisation. Coir rolls are flexible needlefelt materials that can be cut and adapted for multiple site applications.",
      },
      {
        question: "Do coir rolls help plants and soil?",
        answer:
          "Coir can retain moisture around the soil surface, support seed germination and help young plants establish. The fibre biodegrades over time.",
      },
      {
        question: "Are coir rolls biodegradable?",
        answer:
          "Yes. They are made from natural coconut fibre and biodegrade over time. The timeline depends on GSM, climate and soil conditions.",
      },
      {
        question: "What sizes and grades are available?",
        answer:
          "Common widths include 1 metre and 2 metres, with custom lengths and grades available according to the application and manufacturer specification.",
      },
    ],
  },

  {
    category: "Green Building",
    title:
      "Coir Products for IGBC and GRIHA Green Building Ratings in India",
    description:
      "Understand how natural coir insulation, acoustic and roof panels can support sustainable building design and green building goals.",
    image: "/images/blog/coir-green-building.jpg",
    href: "https://www.adhiannamcoir.com/post/coir-green-building-india",

    content: [
      {
        heading: "Do Coir Products Support Green Building Credits?",
        paragraphs: [
          "Green building projects consider material selection, energy efficiency, indoor environmental quality, water use and site management. Natural coir products can contribute to some of these objectives when their properties are supported by suitable documentation.",
          "Coir products do not independently award a building its green certification. Instead, they may support specific credit categories as part of the complete building design and assessment.",
        ],
      },
      {
        heading: "Understanding IGBC and GRIHA",
        paragraphs: [
          "IGBC, the Indian Green Building Council, and GRIHA, the Green Rating for Integrated Habitat Assessment, are two major green building rating systems used in India.",
          "IGBC offers rating levels such as Certified, Silver, Gold and Platinum across different building categories. GRIHA uses a star-based rating system and places emphasis on climate-responsive design, local materials and lifecycle impact.",
          "Project teams should check the applicable rating version and credit requirements before selecting materials or preparing certification submissions.",
        ],
      },
      {
        heading: "Which Coir Products Can Support Green Building Projects?",
        paragraphs: [
          "Different coir products may support different aspects of sustainable building design. Their contribution depends on the product's documented material and performance characteristics and the project's assessment criteria.",
        ],
        points: [
          "Insulation panels: May support thermal performance and energy-efficiency objectives.",
          "Acoustic panels: Can contribute to indoor environmental quality and occupant comfort.",
          "Roof panels and false ceilings: May combine thermal and sustainable-material considerations.",
          "Erosion-control blankets: Can support site management and soil conservation in landscaping works.",
        ],
      },
      {
        heading: "The Importance of Product Documentation",
        paragraphs: [
          "Project teams should collect product specifications, material composition details, relevant certifications and performance test reports before including a material in a green building submission.",
          "For example, thermal conductivity data may be relevant when evaluating insulation performance. The exact documentation required depends on the rating system, credit category and project requirements.",
          "Adhi Annam Coir Comforts operates under ISO 9001:2015 and ISO 14001:2015 management system certifications and can discuss available product information for project requirements.",
        ],
      },
      {
        heading: "The Role of Coir in Sustainable Building Design",
        paragraphs: [
          "Coir is a natural fibre obtained from coconut husk. Its local availability in India and natural origin make it an option worth considering in projects that evaluate regional materials and lower-impact material choices.",
          "A green building rating depends on the complete building strategy, including orientation, glazing, HVAC systems, water management and site planning. Coir products can contribute to selected material and performance objectives within that wider strategy.",
        ],
      },
    ],

    faqs: [
      {
        question: "Do coir products earn green building credits under IGBC and GRIHA?",
        answer:
          "Coir products may contribute to selected sustainable-material, indoor-environmental-quality and energy-efficiency credits when supported by the required documentation. A product alone does not earn a building rating.",
      },
      {
        question: "What are IGBC and GRIHA?",
        answer:
          "IGBC is the Indian Green Building Council rating programme. GRIHA is the Green Rating for Integrated Habitat Assessment, developed by TERI with support from the Government of India.",
      },
      {
        question: "Which coir products support green building projects?",
        answer:
          "Coir insulation panels, acoustic panels, roof panels and erosion-control products may support relevant material, energy, indoor-environmental-quality and site-management objectives.",
      },
      {
        question: "Why are natural materials considered in green building?",
        answer:
          "Natural and locally available materials may support regional-material and lower-impact material strategies, depending on their properties and the applicable rating criteria.",
      },
      {
        question: "Can a supplier provide documentation for green building certification?",
        answer:
          "A manufacturer may provide product composition, certifications and performance test data. The project team should confirm that the documents match the specific credit requirements.",
      },
    ],
  },

  {
    category: "Corporate Gifting",
    title:
      "Coir Corporate Gifts: Sustainable Office Products Made in India",
    description:
      "Explore natural coir-based laptop stands, desk organisers, engraved plaques and planters for sustainable corporate gifting.",
    image: "/images/blog/coir-corporate-gifts.jpg",
    href: "https://www.adhiannamcoir.com/post/coir-corporate-gift-india",

    content: [
      {
        heading: "What Are Coir Corporate Gifts?",
        paragraphs: [
          "Coir corporate gifts are office and desk products made using coconut fibre. They offer businesses an alternative to conventional plastic promotional items and can combine practical use with a natural appearance.",
          "Common products include laptop stands, desk organisers, mobile stands, engraved plaques and branded planters. These items can be designed for employees, clients, business events and recognition programmes.",
        ],
      },
      {
        heading: "Why Consider Coir Gifts Instead of Conventional Promotional Items?",
        paragraphs: [
          "Many conventional promotional gifts are made from plastic or synthetic materials and may be discarded after a short period. A functional desk product has the potential to remain in use for longer.",
          "Coir gifts connect a company's branding with a natural agricultural by-product. For businesses communicating sustainability and environmental responsibility, this can make the gift more consistent with their message.",
          "The value of a corporate gift is not only its appearance. Practical usefulness, quality, branding and the recipient's experience all matter.",
        ],
      },
      {
        heading: "Where Do Coir Corporate Gifts Fit?",
        paragraphs: [
          "Coir products can be customised for different business occasions. Their natural texture and practical applications make them suitable for organisations looking for alternatives to standard promotional merchandise.",
        ],
        points: [
          "Employee welcome kits: Desk products for onboarding and employee appreciation.",
          "Client gifting: Useful branded items for customers and business partners.",
          "Events and conferences: Natural-material giveaways for exhibitions and corporate events.",
          "Recognition awards: Engraved plaques and customised display items.",
          "Office branding: Branded planters and desk accessories for workplace use.",
        ],
      },
      {
        heading: "Available Product Ideas",
        paragraphs: [
          "Corporate gifting requirements can be planned around the occasion, quantity, branding and intended use. Custom designs can help create a consistent look across a company's gift collection.",
        ],
        points: [
          "Coir laptop stands.",
          "Desk organisers.",
          "Mobile stands.",
          "Engraved plaques.",
          "Branded planters.",
        ],
      },
      {
        heading: "Custom Branding and Bulk Orders",
        paragraphs: [
          "Coir corporate gifts can be customised with company logos and design elements. Engraving directly into the fibre surface provides a distinctive natural finish.",
          "These products are generally made to order. Businesses should share the occasion, estimated quantity, preferred items and branding requirements early so that designs, samples and production schedules can be discussed.",
          "Adhi Annam Coir Comforts manufactures coir-based products in Pollachi, Tamil Nadu, and can discuss custom designs and bulk corporate gifting requirements.",
        ],
      },
    ],

    faqs: [
      {
        question: "What are coir corporate gifts?",
        answer:
          "They are office and desk products made from coconut fibre, including laptop stands, desk organisers, mobile stands, engraved plaques and branded planters.",
      },
      {
        question: "Why choose coir gifts over conventional promotional items?",
        answer:
          "Coir gifts offer a natural-material alternative to conventional plastic promotional products. Functional desk items can be useful to recipients and align with a company's sustainability message.",
      },
      {
        question: "Can coir gifts be branded with a company logo?",
        answer:
          "Yes. Logos and designs can be incorporated into suitable coir gift products through engraving or other appropriate finishing methods.",
      },
      {
        question: "What coir gift items are available?",
        answer:
          "Product options include laptop stands, desk organisers, mobile stands, engraved plaques and branded planters. Custom designs can also be discussed.",
      },
      {
        question: "Are coir corporate gifts suitable for bulk orders?",
        answer:
          "Yes. They can be made to order for employee kits, client gifting, conferences and events. Quantity, design and production timelines should be confirmed with the manufacturer.",
      },
    ],
  },
];

type BlogArchiveRecord = {
  slug: string;
  url: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  publishedAt: string | null;
  modifiedAt: string | null;
  author: string;
  body: BlogContentBlock[];
  images: BlogArticleImage[];
  links: BlogArticleLink[];
};

function getSlug(href: string) {
  return href.split("/").filter(Boolean).pop();
}

const sourceArticles: BlogArchiveRecord[] = blogArchive;

export const articles: BlogArticle[] = sourceArticles
  .map((article) => {
    const curated = curatedArticles.find(
      (item) => getSlug(item.href) === article.slug,
    );

    return {
      category: curated?.category ?? "Coir Insights",
      title: article.title,
      description: article.description,
      image: article.image,
      href: article.url,
      content: curated?.content ?? [],
      faqs: curated?.faqs ?? [],
      body: article.body,
      images: article.images,
      links: article.links,
      imageAlt: article.imageAlt,
      publishedAt: article.publishedAt,
      modifiedAt: article.modifiedAt,
      author: article.author,
    };
  })
  .sort((left, right) =>
    (right.publishedAt ?? "").localeCompare(left.publishedAt ?? ""),
  );

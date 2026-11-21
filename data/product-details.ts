
export type ProductDetail = {
  tagline: string;
  description: string;
  applications: string[];
  advantages: string[];
  note?: string;
};

export const productDetails: Record<string, ProductDetail> = {
  // =====================================================
  // COIR PACKAGING — 10 PRODUCTS
  // =====================================================

  "coir-bubble-wrap": {
    tagline: "A natural alternative to plastic bubble wrap",
    description:
      "Coir Bubble Wrap is made from coconut fibre and designed to protect fragile products during shipping and handling. Its interlocking natural fibres help absorb shock and vibration, offering an alternative to conventional plastic bubble wrap.",
    applications: [
      "Electronics, devices and components",
      "Glassware, bottles and ceramic products",
      "Cosmetics and premium gift packaging",
      "Furniture, mirrors and decorative items",
      "Industrial parts and machined components",
    ],
    advantages: [
      "Helps absorb shock and vibration during transit",
      "Made from natural coconut fibre",
      "Alternative to plastic bubble-wrap packaging",
      "Available in customised sizes and thicknesses",
      "Suitable for wrapping and interleaving",
    ],
  },

  "coir-void-fillers": {
    tagline: "Natural void filling for protective packaging",
    description:
      "Coir Void Fillers are compressed coconut fibre nuggets designed to fill empty spaces inside shipping cartons. They help prevent products from moving during transportation and provide an alternative to thermocol, EPS packing peanuts and plastic air pillows.",
    applications: [
      "E-commerce and online product shipments",
      "Glassware, crockery and decorative products",
      "Electronics and appliances",
      "Food, beverage and gift packaging",
      "Premium retail and consumer goods",
    ],
    advantages: [
      "Fills empty spaces inside shipping cartons",
      "Helps cushion products from multiple sides",
      "Alternative to thermocol and EPS fillers",
      "Uses natural coconut fibre",
      "Can work with existing carton packing processes",
    ],
  },

  "coir-fitted-cushion": {
    tagline: "Custom-moulded cushioning for product protection",
    description:
      "Coir Fitted Cushioning consists of moulded coconut fibre inserts designed around the shape and dimensions of individual products. These fitted cushions provide protective support inside packaging boxes as an alternative to conventional EPS and PE foam inserts.",
    applications: [
      "Consumer electronics and accessories",
      "Glassware, bottles and ceramics",
      "Medical instruments and diagnostic equipment",
      "Cosmetics, skincare and gift sets",
      "Industrial components and precision parts",
    ],
    advantages: [
      "Custom-moulded to product dimensions",
      "Designed to fit existing cartons",
      "Helps protect fragile products during transit",
      "Alternative to conventional foam inserts",
      "Physical prototypes can be developed for testing",
    ],
    note:
      "The manufacturer indicates a prototype development period of approximately 14–21 days.",
  },

  "coir-wood-box": {
    tagline: "Lightweight shipping crates made from compressed coir",
    description:
      "Coir Wood Boxes are shipping crates made using compressed coconut fibre panels with metal-reinforced edges. They are designed as an alternative to traditional wooden crates for transporting industrial and valuable products.",
    applications: [
      "Heavy machinery and automobile components",
      "Electronics, appliances and medical equipment",
      "Artwork, antiques and fragile goods",
      "Defence and aerospace components",
      "Warehousing and industrial storage",
    ],
    advantages: [
      "Alternative to traditional solid wooden crates",
      "Designed to be lighter than conventional wooden crates",
      "Naturally resistant to pests and termites",
      "Can be customised to product dimensions",
      "Suitable for industrial shipping applications",
    ],
    note:
      "The manufacturer states that its coir panels use a vulcanised rubber binder. The product is not home-compostable.",
  },

  "coir-wood-pallet": {
    tagline: "An alternative to traditional timber export pallets",
    description:
      "Coir Wood Pallets are manufactured using compressed coconut fibre composite as an alternative to conventional timber pallets. They are intended for goods handling, storage and export shipping.",
    applications: [
      "International export shipments",
      "Warehousing and inventory handling",
      "Industrial and manufacturing facilities",
      "Forklift and pallet-jack operations",
      "Logistics and distribution centres",
    ],
    advantages: [
      "Made from compressed coconut fibre composite",
      "Alternative to solid timber packaging",
      "Can be specified in different dimensions",
      "Designed for warehouse and shipping operations",
      "Can be specified to suit handling equipment",
    ],
    note:
      "Load capacity, dimensions and handling suitability must be confirmed for the selected pallet design.",
  },

  "coir-foam-block": {
    tagline: "Natural cushioning blocks for protective packaging",
    description:
      "Coir Foam Blocks are pre-cut coconut fibre cushioning blocks used inside shipping cartons. They provide cushioning and space filling for products as an alternative to conventional PE and EPE foam blocks.",
    applications: [
      "Electronics and device packaging",
      "Glassware, bottles and jars",
      "Industrial parts, valves and fittings",
      "E-commerce shipping cartons",
      "Pharmaceutical kits and diagnostic equipment",
    ],
    advantages: [
      "Available in ready-to-use block shapes",
      "Standard formats can avoid product-specific mould tooling",
      "Can fit existing carton arrangements",
      "Uses natural coconut fibres",
      "Alternative to selected PE and EPE foam blocks",
    ],
  },

  "coir-corner-cap": {
    tagline: "Natural edge and corner protection",
    description:
      "Coir Corner Caps are compressed coconut fibre protectors designed to fit over vulnerable corners and edges. They help cushion products during transportation and provide an alternative to conventional foam corners and plastic edge guards.",
    applications: [
      "Tables, cabinets and furniture",
      "Refrigerators and household appliances",
      "Glass panels, mirrors and framed artwork",
      "Televisions and large display panels",
      "Stone countertops, tiles and building panels",
    ],
    advantages: [
      "Protects vulnerable product corners",
      "Helps absorb and distribute impact",
      "Designed to fit product edges",
      "Alternative to foam corner protection",
      "Custom profiles and sizes can be developed",
    ],
    note:
      "For very heavy products, the required density and additional cushioning should be confirmed.",
  },

  "coir-tube-protectors": {
    tagline: "Protective coconut fibre sleeves for cylindrical products",
    description:
      "Coir Tube Protectors are coconut fibre sleeves designed to protect cylindrical goods during shipping and storage. They cushion the curved surfaces and ends of products such as pipes, rods and rolls.",
    applications: [
      "Metal, PVC and composite pipes",
      "Textile, paper, film and foil rolls",
      "Threaded rods and machine shafts",
      "Industrial cylindrical components",
      "Rolled documents, drawings and artwork",
    ],
    advantages: [
      "Protects cylindrical surfaces and ends",
      "Can be specified for different diameters and lengths",
      "Natural-fibre alternative to selected plastic sleeves",
      "Helps reduce surface damage during handling",
      "Can be customised to product dimensions",
    ],
    note:
      "For shipments exposed to standing water or heavy moisture, use a suitable protective liner.",
  },

  "coir-table-protectors": {
    tagline: "Natural fibre protection for flat product surfaces",
    description:
      "Coir Table Protectors are natural coconut fibre protective materials designed for flat surfaces. They help cushion furniture, glass and other flat products against scratches and handling damage during transportation.",
    applications: [
      "Wooden tables and furniture surfaces",
      "Glass and mirror panels",
      "Cabinets and furniture components",
      "Stone and ceramic slabs",
      "Flat panels and decorative surfaces",
    ],
    advantages: [
      "Helps protect surfaces from scratches",
      "Provides cushioning during handling and transit",
      "Can be cut to suit surface dimensions",
      "Natural-fibre alternative to selected foam sheets",
      "Can be used with coir corner caps for added protection",
    ],
  },

  "coir-packaging-container": {
    tagline: "Moulded coconut fibre containers with lids",
    description:
      "Coir Packaging Containers are moulded coconut fibre boxes with lids, designed for food packaging, consumer goods and gift products. Their natural textured appearance provides an alternative to conventional moulded plastic containers.",
    applications: [
      "Dry foods, bakery products and gift sets",
      "Tea, coffee and spice packaging",
      "Cosmetics, soaps and personal care products",
      "Corporate gifts and promotional hampers",
      "Handmade products, candles and ceramics",
      "Retail and e-commerce packaging",
    ],
    advantages: [
      "Distinctive natural fibre appearance",
      "Rigid moulded construction",
      "Designed with lids for enclosed packaging",
      "Supports branding through labels and other finishes",
      "Can be stacked or nested for storage",
    ],
  },

  // =====================================================
  // COIR FILTRATION — 2 PRODUCTS
  // =====================================================

  "coir-air-filter": {
    tagline: "Natural coconut fibre pre-filter media for HVAC and industrial air filtration",
    description:
      "Coir Air Filter is a natural pre-filtration media made from coconut fibre. Designed for use as a first-stage filter, it helps capture dust, paint overspray and airborne particulates before air reaches higher-efficiency filters. The manufacturer lists G1–G4 filtration grades for selected HVAC systems, paint booths and industrial ventilation applications.",
    applications: [
      "Paint spray booths: captures overspray in suitable paint-line exhaust systems",
      "HVAC pre-filtration: first-stage dust capture upstream of bag and HEPA filters",
      "Industrial exhaust: pre-filtration in manufacturing plants and workshops",
      "Food and beverage facilities: ventilation pre-filtration in suitable environments",
      "Cleanrooms: preliminary filtration to help protect downstream filters",
    ],
    advantages: [
      "G1–G4 pre-filtration grades are listed by the manufacturer",
      "Open fibre structure designed to support airflow",
      "Dust-holding capacity for suitable filtration applications",
      "Selected 700–1,200 GSM rolls and pads may be washable and reusable 2–3 times",
      "Coconut fibre alternative to selected synthetic pre-filter media",
      "No synthetic microplastic shedding from the coir fibre itself",
      "Spent media may be suitable for permitted biomass recovery routes",
    ],
    note:
      "Performance and service life depend on the selected grade and operating conditions. Share airflow, filter housing dimensions and target particle size to discuss a suitable specification. Confirm washability and reuse suitability for the exact product before installation.",
  },

  "coir-wastewater-filter-media": {
    tagline: "Engineered coconut fibre media for wastewater solids capture and biofiltration",
    description:
      "Coir Wastewater Filter Media is a coconut fibre-based filtration material developed for selected wastewater treatment and water-management systems. Its fibrous structure can support suspended-solids capture and provide a surface suitable for biofiltration. Different media densities, thicknesses and layers can be considered according to system requirements.",
    applications: [
      "Decentralised wastewater treatment systems",
      "Municipal wastewater pre-filtration",
      "Industrial effluent treatment arrangements",
      "Trickling filters and biological treatment systems",
      "Aquaculture water-treatment and recirculation systems",
    ],
    advantages: [
      "Made from natural coconut fibre",
      "Suitable for solids-capture and biofiltration applications",
      "Can be configured for different media densities and thicknesses",
      "Can be arranged in multiple layers",
      "Designed to support hydraulic flow when correctly specified",
      "Alternative natural-fibre medium for selected treatment applications",
      "No microplastic shedding from the coir fibre itself",
    ],
    note:
      "Treatment efficiency, solids-removal rate, flow capacity and replacement intervals depend on influent water quality and system design. Pilot testing is recommended before full-scale installation. Share flow rate, water characteristics and filter dimensions for application-specific evaluation.",
  },

  // =====================================================
  // COIR INTERIOR PANEL — 4 PRODUCTS
  // =====================================================

  "coir-roof-panel": {
    tagline: "Coconut fibre panels for roofing and building interiors",
    description:
      "Coir Roof Panels are coconut fibre-based panels intended for selected roofing, ceiling and architectural applications. They provide a natural-fibre material option for building projects where thermal and acoustic considerations are part of the design. The final suitability depends on panel construction and installation conditions.",
    applications: [
      "Roof lining and ceiling applications",
      "Green building projects",
      "Exhibition and event spaces",
      "Commercial and residential interiors",
      "Architectural and construction projects",
    ],
    advantages: [
      "Uses coconut fibre as a panel material",
      "Can contribute to thermal and acoustic design",
      "Natural-fibre appearance for architectural interiors",
      "Can be considered for customised panel layouts",
      "Suitable for selected building and interior projects",
    ],
    note:
      "Thermal conductivity, weather resistance, fire performance and structural suitability must be confirmed for the exact panel specification. Request relevant test data before using it as a building-system component.",
  },

  "coir-insulation-panel": {
    tagline: "Natural fibre panels for thermal insulation applications",
    description:
      "Coir Insulation Panels are coconut fibre-based panels designed for selected thermal insulation applications in walls, roofs and partitions. They provide a natural-fibre material option for construction projects. The manufacturer lists a thermal conductivity value of approximately 0.045 W/mK; actual performance depends on the panel specification and installation.",
    applications: [
      "Interior and partition wall systems",
      "Roof and ceiling insulation",
      "Green building projects",
      "Modular and prefabricated buildings",
      "Selected cold-storage and retrofit projects",
    ],
    advantages: [
      "Made using natural coconut fibre",
      "Designed for selected thermal insulation applications",
      "Can be specified in different panel thicknesses",
      "Suitable for selected wall, roof and partition systems",
      "Natural-fibre alternative for building insulation designs",
    ],
    note:
      "The manufacturer lists thermal conductivity of approximately 0.045 W/mK. Confirm the test standard, panel density, thickness, moisture resistance and fire classification for the required project.",
  },

  "coir-acoustic-panel": {
    tagline: "Coconut fibre panels for acoustic interior design",
    description:
      "Coir Acoustic Panels are natural-fibre panels intended for interior sound-absorption applications. Their fibrous structure can help manage room reflections when used as part of a suitable acoustic treatment design. They are not a substitute for a complete soundproofing system.",
    applications: [
      "Office interiors and coworking spaces",
      "Recording studios and performance spaces",
      "Restaurants and hospitality interiors",
      "Schools, classrooms and auditoriums",
      "Home theatres and meeting rooms",
    ],
    advantages: [
      "Made using coconut fibre",
      "Suitable for interior acoustic treatment designs",
      "Can be arranged in different panel layouts",
      "Natural-fibre appearance for interior spaces",
      "Can complement other acoustic materials and treatments",
    ],
    note:
      "Sound absorption depends on thickness, density, backing, mounting and room conditions. Request acoustic test results, such as NRC data where available. Acoustic panels absorb room sound; they do not automatically soundproof a room.",
  },

  "coir-board-engraving": {
    tagline: "Custom engraved designs on coir boards",
    description:
      "Coir Board Engraving involves creating decorative designs, patterns, text or branding on suitable coir-based boards. It can be used to develop customised decorative and interior design elements. The engraving method and finished result depend on the board material and design requirements.",
    applications: [
      "Interior wall decorations",
      "Custom name and display boards",
      "Office and commercial branding",
      "Decorative panels",
      "Personalised design projects",
    ],
    advantages: [
      "Supports customised designs and patterns",
      "Can incorporate text and decorative elements",
      "Suitable for selected interior applications",
      "Can be developed for personalised projects",
      "Provides a distinctive coir-board finish",
    ],
    note:
      "Confirm board composition, engraving method, dimensions and available finishes with the manufacturer before specifying the product.",
  },

  // =====================================================
  // COIR SCRUBBER — 2 PRODUCTS
  // =====================================================

  "coir-kitchen-scrubber": {
    tagline: "Natural coconut fibre scrubber for kitchen cleaning",
    description:
      "Coir Kitchen Scrubbers are cleaning accessories made from coconut fibre. Their naturally textured fibres provide a scrubbing surface for removing everyday dirt and grease from suitable cookware and kitchen surfaces. They offer an alternative to selected synthetic sponges and plastic scouring pads.",
    applications: [
      "Cleaning pots and pans",
      "Kitchen utensils",
      "Suitable kitchen work surfaces",
      "Household cleaning",
      "Commercial kitchen cleaning",
    ],
    advantages: [
      "Made using natural coconut fibre",
      "Textured surface for scrubbing",
      "Suitable for everyday cleaning tasks",
      "Alternative to selected synthetic scrubbers",
      "Compact and convenient to use",
    ],
    note:
      "Test on a small area before using on delicate, coated or non-stick surfaces. Allow the scrubber to dry between uses.",
  },

  "coir-bath-scrubber": {
    tagline: "Natural coir scrubber for bath and household use",
    description:
      "Coir Bath Scrubbers are coconut fibre-based cleaning accessories designed for selected bath and household cleaning applications. Their natural fibre texture provides a traditional scrubbing surface for suitable cleaning tasks.",
    applications: [
      "Bathroom cleaning",
      "Cleaning selected household surfaces",
      "Bath and utility accessories",
      "General household maintenance",
      "Cleaning utility areas",
    ],
    advantages: [
      "Uses natural coconut fibre",
      "Textured scrubbing surface",
      "Suitable for selected cleaning tasks",
      "Simple and practical design",
      "Alternative to selected synthetic cleaning accessories",
    ],
    note:
      "Allow the scrubber to dry between uses. If intended for personal body use, confirm the product's suitability and test gently before regular use.",
  },

  // =====================================================
  // COIR HORTICULTURE — 9 PRODUCTS
  // =====================================================

  "coir-pots": {
    tagline: "Plantable coir pots for growing and gardening",
    description:
      "Coir Pots are plant-growing containers made using coconut fibre. They are designed for nursery, gardening and planting applications. Depending on the product construction, the pot can be planted along with the plant, reducing the need to remove the growing container during transplanting.",
    applications: [
      "Commercial nursery plant production",
      "Seed starting and propagation",
      "Home gardening",
      "Greenhouses and garden centres",
      "Reforestation and landscaping projects",
    ],
    advantages: [
      "Made using coconut fibre",
      "Suitable for growing and planting applications",
      "Can support root growth through the pot wall, depending on construction",
      "Natural-fibre alternative to selected plastic pots",
      "Available for different plant sizes and uses",
    ],
    note:
      "Biodegradation and root penetration depend on fibre treatment, pot thickness, soil conditions and growing time.",
  },

  "coir-weed-prevention-mats": {
    tagline: "Natural coir mats for weed management",
    description:
      "Coir Weed Prevention Mats are coconut fibre-based ground covers placed around plants and landscaped areas. They cover exposed soil and help reduce the space available for unwanted weed growth while supporting soil coverage around planted areas.",
    applications: [
      "Garden beds",
      "Tree and shrub planting",
      "Landscaping projects",
      "Nurseries and plantations",
      "Agricultural growing areas",
    ],
    advantages: [
      "Made using natural coir fibre",
      "Helps cover exposed soil",
      "Can help reduce weed growth",
      "Can be placed around trees and plants",
      "Suitable for landscaping and horticultural projects",
    ],
    note:
      "Effectiveness depends on mat thickness, coverage, installation and site conditions. Secure the mat properly to prevent movement.",
  },

  "coco-basket-liner": {
    tagline: "Natural coconut fibre liners for hanging baskets",
    description:
      "Coco Basket Liners are shaped coconut fibre liners designed to fit planting baskets and containers. They provide a natural-looking growing surface for decorative and horticultural use, while holding suitable growing media inside the basket.",
    applications: [
      "Hanging flower baskets",
      "Decorative garden containers",
      "Balcony gardening",
      "Nursery displays",
      "Home and commercial landscaping",
    ],
    advantages: [
      "Made using coconut fibre",
      "Natural appearance for planting baskets",
      "Available in different basket shapes",
      "Suitable for decorative planting",
      "Can be used with suitable growing media",
    ],
    note:
      "Select the liner shape and dimensions to match the basket. Water retention depends on liner thickness and growing conditions.",
  },

  "coco-trough-liner": {
    tagline: "Coir liners for trough planters",
    description:
      "Coco Trough Liners are coconut fibre liners designed for elongated trough-style planters. They provide a natural surface for planting arrangements in gardens, balconies and landscaped spaces.",
    applications: [
      "Window-box planters",
      "Balcony troughs",
      "Garden planters",
      "Commercial landscaping",
      "Decorative planting arrangements",
    ],
    advantages: [
      "Made using coconut fibre",
      "Designed for trough-shaped containers",
      "Natural decorative appearance",
      "Suitable for different planting arrangements",
      "Can be paired with suitable growing media",
    ],
    note:
      "Confirm the trough dimensions and liner thickness before ordering.",
  },

  "coir-coco-pole": {
    tagline: "Natural coir support poles for climbing plants",
    description:
      "Coir Coco Poles are plant support structures covered with coconut fibre. They provide a vertical surface for climbing and aerial-rooted plants to attach to as they grow, making them useful for indoor gardening and nursery cultivation.",
    applications: [
      "Indoor climbing plants",
      "Monstera and philodendron plants",
      "Nursery plant cultivation",
      "Home gardening",
      "Greenhouse growing",
    ],
    advantages: [
      "Covered with natural coconut fibre",
      "Provides vertical plant support",
      "Suitable for climbing and aerial-rooted plants",
      "Can be used in indoor and outdoor gardening",
      "Can be specified in different lengths and sizes",
    ],
    note:
      "Choose pole height and diameter according to the plant and pot size. Support and fixing arrangements should be checked before use.",
  },

  "coir-microgreen-grow-mat": {
    tagline: "Coconut fibre growing mats for microgreens",
    description:
      "Coir Microgreen Grow Mats are coconut fibre-based growing surfaces intended for microgreen cultivation. They provide a growing medium for seeds placed in suitable trays and controlled growing setups.",
    applications: [
      "Microgreen cultivation",
      "Indoor gardening",
      "Home-grown edible greens",
      "Small-scale commercial growing",
      "Seed germination setups",
    ],
    advantages: [
      "Made using coconut fibre",
      "Designed for tray-based growing",
      "Easy to place in growing trays",
      "Suitable for selected seed varieties",
      "Natural-fibre growing medium",
    ],
    note:
      "Growing results depend on seed variety, mat preparation, water management and cultivation conditions. Confirm suitability for food-growing applications with the supplier.",
  },

  "coir-root-trainer": {
    tagline: "Coir root trainers for nursery and tree propagation",
    description:
      "Coir Root Trainers are tapered plant-growing containers made using coir-based materials. Their design is intended to guide root development and support nursery production. The manufacturer describes an open-base design that encourages air pruning and downward root growth.",
    applications: [
      "Tree nursery operations",
      "Seedling propagation",
      "Forestry and reforestation",
      "Agroforestry projects",
      "Commercial horticultural production",
    ],
    advantages: [
      "Uses coconut fibre-based material",
      "Tapered design for nursery growing",
      "Open-base construction supports air-pruning",
      "Can be transplanted with the plant, depending on product design",
      "Suitable for organised seedling production",
    ],
    note:
      "Root development depends on plant species, growing medium and nursery conditions. Confirm dimensions and transplanting instructions for the selected model.",
  },

  "coir-grow-mat": {
    tagline: "Natural coconut fibre mats for plant growing",
    description:
      "Coir Grow Mats are coconut fibre-based growing surfaces used in selected horticulture and cultivation setups. They provide a natural-fibre medium for suitable plant-growing applications and can be supplied in mat formats.",
    applications: [
      "Greenhouse cultivation",
      "Nursery growing",
      "Selected hydroponic and controlled growing setups",
      "Home gardening",
      "Commercial horticulture",
    ],
    advantages: [
      "Made using coconut fibre",
      "Suitable for selected growing systems",
      "Can be supplied in mat formats",
      "Natural-fibre growing medium",
      "Can be cut to suit suitable growing areas",
    ],
    note:
      "Growing performance depends on the crop, irrigation, mat preparation and growing system. Confirm pH, salinity and pre-treatment requirements with the supplier.",
  },

  "coir-seedling-tray": {
    tagline: "Coir-based trays for seedling propagation",
    description:
      "Coir Seedling Trays are growing trays made using coconut fibre-based materials. They are intended for seed starting, nursery propagation and organised plant production. The tray format can support handling and transplanting of young plants.",
    applications: [
      "Seed germination",
      "Nursery operations",
      "Vegetable seedling production",
      "Flower cultivation",
      "Horticultural propagation",
    ],
    advantages: [
      "Uses coconut fibre-based material",
      "Designed for seedling growing",
      "Suitable for nursery use",
      "Can support organised seedling handling",
      "Alternative to selected conventional plastic trays",
    ],
    note:
      "Confirm tray dimensions, cell configuration, growing-medium compatibility and transplanting method before ordering.",
  },

  // =====================================================
  // COIR ROLL & SHEETS — 2 PRODUCTS
  // =====================================================

  "coir-needlefelt-roll": {
    tagline: "Needle-punched coir rolls for industrial and interior applications",
    description:
      "Coir Needlefelt Rolls are fibrous sheet materials produced by mechanically entangling coconut fibres. Supplied in roll form, they can be cut and used in selected industrial, construction, automotive and interior applications.",
    applications: [
      "Automotive and industrial applications",
      "Flooring underlay",
      "Building and construction projects",
      "Protective lining",
      "Fabrication and insulation applications",
    ],
    advantages: [
      "Made using coconut fibre",
      "Supplied in convenient roll form",
      "Can be cut to required dimensions",
      "Suitable for selected industrial uses",
      "Can be specified in different thicknesses and densities",
    ],
    note:
      "Confirm fibre density, thickness, roll width, binder content and intended-use requirements with the manufacturer.",
  },

  "rubberized-coir-sheet": {
    tagline: "Rubberized coir sheets for cushioning and industrial use",
    description:
      "Rubberized Coir Sheets combine coconut fibre with a rubber binder to create sheet materials for cushioning and selected industrial applications. They can be supplied in different dimensions and thicknesses according to the required use.",
    applications: [
      "Mattress and bedding production",
      "Furniture cushioning",
      "Automotive seating",
      "Industrial padding",
      "Interior and upholstery applications",
    ],
    advantages: [
      "Combines coconut fibre and rubber binder",
      "Available in sheet form",
      "Can be supplied in different thicknesses",
      "Suitable for selected cushioning applications",
      "Can be cut to required dimensions",
    ],
    note:
      "Material composition, density and performance depend on the selected grade. Confirm specifications before use.",
  },

  // =====================================================
  // COIR EROSION CONTROL — 3 PRODUCTS
  // =====================================================

  "coir-geotextile": {
    tagline: "Natural coir geotextiles for soil protection",
    description:
      "Coir Geotextiles are woven or structured coconut fibre materials used in soil protection and erosion management projects. They cover exposed soil and can help reduce surface movement while allowing vegetation to establish under suitable conditions.",
    applications: [
      "Slope stabilisation projects",
      "Riverbank protection",
      "Roadside landscaping",
      "Embankments and drainage areas",
      "Soil conservation projects",
    ],
    advantages: [
      "Made using natural coconut fibre",
      "Helps protect exposed soil",
      "Allows vegetation to establish through suitable structures",
      "Can be supplied in different mesh configurations",
      "Suitable for erosion management projects",
    ],
    note:
      "Selection depends on slope, soil type, water flow, required service life and project conditions. Confirm the appropriate geotextile specification with the project engineer.",
  },

  "coir-erosion-control-blanket": {
    tagline: "Coconut fibre blankets for exposed soil protection",
    description:
      "Coir Erosion Control Blankets are natural fibre mats used to cover exposed soil in landscaping and environmental projects. They help reduce surface soil movement and support vegetation establishment while the planted area develops.",
    applications: [
      "Slopes and embankments",
      "Roadside landscaping",
      "Riverbanks and waterways",
      "Land restoration projects",
      "Garden and landscape development",
    ],
    advantages: [
      "Made using coconut fibre",
      "Provides coverage for exposed ground",
      "Helps reduce surface erosion",
      "Supports vegetation establishment",
      "Suitable for outdoor environmental projects",
    ],
    note:
      "The required blanket weight, anchoring and installation method depend on slope, soil and water-flow conditions.",
  },

  "coir-erosion-control-blanket-pp-net": {
    tagline: "Reinforced coir blanket for soil erosion management",
    description:
      "Coir Erosion Control Blankets with PP Net combine coconut fibre with polypropylene netting. This construction provides a reinforced blanket format for selected soil protection, landscaping and environmental projects.",
    applications: [
      "Slope and embankment protection",
      "Roadside soil conservation",
      "Riverbank landscaping",
      "Land restoration",
      "Outdoor erosion management projects",
    ],
    advantages: [
      "Combines coir fibre with PP netting",
      "Provides a reinforced blanket structure",
      "Helps cover exposed soil",
      "Suitable for selected landscaping projects",
      "Can be specified for project requirements",
    ],
    note:
      "This product contains polypropylene netting and is not entirely plastic-free. Confirm net type and project suitability before ordering.",
  },

  // =====================================================
  // COIR MATTRESSES — 10 PRODUCTS
  // =====================================================

  "coir-memory-foam-mattress": {
    tagline: "A mattress combining coir support and memory foam comfort",
    description:
      "Coir Memory Foam Mattresses combine coconut coir-based support layers with memory foam comfort layers. This construction is intended to provide a combination of firmness and cushioning for everyday bedding.",
    applications: [
      "Home bedrooms",
      "Guest rooms",
      "Residential bedding",
      "Hospitality accommodation",
      "Mattress retail",
    ],
    advantages: [
      "Combines coir and memory foam layers",
      "Designed to provide support and cushioning",
      "Suitable for everyday sleeping arrangements",
      "Can be specified in different mattress sizes",
      "Can be selected according to comfort preferences",
    ],
    note:
      "Firmness, layer thickness and material composition vary by model. Confirm the construction before purchase.",
  },

  "foam-mattress": {
    tagline: "Comfortable foam mattress for everyday use",
    description:
      "Foam Mattresses are bedding products made using foam layers designed to provide a cushioned sleeping surface. They are suitable for residential and hospitality bedding requirements.",
    applications: [
      "Home bedrooms",
      "Guest bedrooms",
      "Hostels and accommodation",
      "Hotels and hospitality",
      "Residential furniture",
    ],
    advantages: [
      "Provides a cushioned sleeping surface",
      "Available in different sizes",
      "Suitable for everyday bedding",
      "Can be selected according to preferred firmness",
      "Suitable for residential and commercial use",
    ],
    note:
      "Foam density, thickness, type and firmness depend on the selected model.",
  },

  "rubberized-coir-mattress": {
    tagline: "Natural coir support for comfortable bedding",
    description:
      "Rubberized Coir Mattresses use coconut fibre bonded with rubber latex to form a supportive mattress layer. They are designed for people who prefer a firmer sleeping surface and natural-fibre-based mattress construction.",
    applications: [
      "Home bedrooms",
      "Residential bedding",
      "Guest rooms",
      "Hotels and accommodation",
      "Mattress retail",
    ],
    advantages: [
      "Uses rubberized coconut fibre",
      "Provides a firm support layer",
      "Suitable for regular bedding applications",
      "Can be supplied in different sizes",
      "Can be combined with suitable comfort layers",
    ],
    note:
      "Comfort and firmness depend on the mattress construction, thickness and individual preference.",
  },

  "slim-coir-mattresses": {
    tagline: "Space-conscious coir mattresses for practical bedding",
    description:
      "Slim Coir Mattresses are thinner mattress options made using coir-based materials. They are intended for sleeping arrangements where a compact mattress profile is preferred.",
    applications: [
      "Guest beds",
      "Hostels and accommodation",
      "Compact sleeping spaces",
      "Floor bedding arrangements",
      "Residential use",
    ],
    advantages: [
      "Slim mattress profile",
      "Uses coir-based material",
      "Suitable for compact spaces",
      "Can be supplied in different dimensions",
      "Practical for selected bedding arrangements",
    ],
    note:
      "Available thickness, construction and firmness should be confirmed before purchase.",
  },

  "back-pain-relief-mattress": {
    tagline: "Support-focused mattress for everyday rest",
    description:
      "Back Pain Relief Mattresses are designed with a support-focused construction for people seeking a suitable sleeping surface. Mattress comfort and support depend on individual needs and the product's materials, firmness and construction.",
    applications: [
      "Residential bedrooms",
      "Everyday sleeping arrangements",
      "Guest rooms",
      "Bedding retailers",
      "Hospitality accommodation",
    ],
    advantages: [
      "Designed with support in mind",
      "Can be supplied in different sizes",
      "Can be selected according to firmness preference",
      "Suitable for regular bedding use",
      "Different material configurations may be available",
    ],
    note:
      "No mattress can guarantee relief from back pain or treat a medical condition. Choose a mattress based on personal comfort and seek professional advice where needed.",
  },

  "foldable-travel-mattress": {
    tagline: "Convenient foldable mattress for travel and extra bedding",
    description:
      "Foldable Travel Mattresses are compact bedding products designed to fold for storage and transportation. They provide an additional sleeping surface for travel, guests and temporary accommodation.",
    applications: [
      "Travel and camping",
      "Guest accommodation",
      "Temporary sleeping arrangements",
      "Hostels and shared accommodation",
      "Home storage and extra bedding",
    ],
    advantages: [
      "Foldable design",
      "Convenient for storage",
      "Suitable for temporary bedding",
      "Can be transported more easily than many fixed mattresses",
      "Useful for guest and travel arrangements",
    ],
    note:
      "Folded dimensions, material, thickness and carrying arrangements vary by model.",
  },

  "hospital-bed-mattress": {
    tagline: "Mattress designed for hospital and care bed use",
    description:
      "Hospital Bed Mattresses are bedding products intended for use with hospital and care beds. They can be specified according to bed dimensions and the requirements of the care environment.",
    applications: [
      "Hospitals and clinics",
      "Nursing homes",
      "Patient care facilities",
      "Home healthcare beds",
      "Medical accommodation",
    ],
    advantages: [
      "Designed for hospital bed dimensions",
      "Can be supplied in different sizes and thicknesses",
      "Suitable for care environments",
      "Can be selected for specific bed requirements",
      "Supports practical patient bedding arrangements",
    ],
    note:
      "Confirm clinical requirements, cleaning compatibility, fire standards and pressure-management specifications before selection. Do not assume pressure-relief performance without test data.",
  },

  "waterproof-mattress-protector": {
    tagline: "Protective covering for mattress care",
    description:
      "Waterproof Mattress Protectors are protective covers designed to help shield mattresses from liquid spills and everyday moisture. They provide an additional protective layer over the mattress.",
    applications: [
      "Home bedrooms",
      "Children's beds",
      "Guest rooms",
      "Hotels and accommodation",
      "Healthcare and care environments",
    ],
    advantages: [
      "Helps protect mattresses from liquid spills",
      "Adds a protective layer over the mattress",
      "Supports mattress maintenance",
      "Can be supplied for different mattress sizes",
      "Suitable for residential and hospitality use",
    ],
    note:
      "Waterproof performance, breathability and washing instructions depend on the selected material.",
  },

  "memory-foam-pillow": {
    tagline: "Cushioned pillow with memory foam support",
    description:
      "Memory Foam Pillows are designed using foam that responds to pressure and provides a shaped cushioning surface. They are intended to provide head and neck support during rest.",
    applications: [
      "Home bedrooms",
      "Guest rooms",
      "Hotels and accommodation",
      "Residential bedding",
      "Travel and personal use",
    ],
    advantages: [
      "Memory foam cushioning",
      "Designed to respond to pressure",
      "Provides a shaped pillow surface",
      "Suitable for regular bedding use",
      "Can be supplied in different pillow designs",
    ],
    note:
      "Pillow shape, firmness, foam type and cover material vary by model.",
  },

  "coir-cotton-pillow": {
    tagline: "A natural-fibre pillow for everyday bedding",
    description:
      "Coir and Cotton Pillows combine coconut fibre-based material with cotton components to create a natural-fibre bedding accessory. They are intended for everyday use in residential and hospitality settings.",
    applications: [
      "Home bedrooms",
      "Guest rooms",
      "Hotels and accommodation",
      "Residential bedding",
      "Bedding retail",
    ],
    advantages: [
      "Combines coir and cotton materials",
      "Natural-fibre product construction",
      "Suitable for everyday bedding",
      "Can be supplied in different pillow sizes",
      "Alternative material choice for bedding",
    ],
    note:
      "Filling composition, firmness, cover material and care instructions depend on the selected model.",
  },

  // =====================================================
  // COIR CORPORATE GIFTS — 6 PRODUCTS
  // =====================================================

  "laptop-stand": {
    tagline: "A natural-material accessory for modern workspaces",
    description:
      "Laptop Stands are desk accessories designed to hold a laptop in an elevated position. Coir-based or coir-composite designs can provide a distinctive natural-material appearance for office and home workspaces.",
    applications: [
      "Office desks",
      "Home workstations",
      "Corporate gifting",
      "Employee welcome kits",
      "Promotional merchandise",
    ],
    advantages: [
      "Useful desk accessory",
      "Suitable for corporate gifting",
      "Distinctive natural-material appearance",
      "Can be customised for branding",
      "Practical for office and home use",
    ],
    note:
      "Confirm the actual material, dimensions, ventilation design and supported laptop weight for the selected product.",
  },

  "table-organizer": {
    tagline: "A practical desk organiser for everyday workspaces",
    description:
      "Table Organizers are desktop accessories designed to keep stationery and small office items arranged neatly. Coir-based decorative elements can provide a natural appearance suitable for workspaces and gifting.",
    applications: [
      "Office desks",
      "Home study tables",
      "Reception counters",
      "Corporate gifting",
      "Employee and event gifts",
    ],
    advantages: [
      "Helps organise small desk items",
      "Suitable for office and home use",
      "Natural decorative appearance",
      "Can be customised for gifting",
      "Useful for promotional and corporate events",
    ],
    note:
      "Confirm the number of compartments, dimensions, finish and customisation options for the selected design.",
  },

  "coir-wood-painting": {
    tagline: "Decorative artwork with natural coir elements",
    description:
      "Coir Wood Paintings are decorative products that combine wood-based surfaces with artistic designs and coir elements. They are intended for interior decoration and personalised gifting.",
    applications: [
      "Home interior decoration",
      "Office wall decoration",
      "Corporate gifting",
      "Personalised gifts",
      "Decorative retail displays",
    ],
    advantages: [
      "Distinctive decorative appearance",
      "Combines natural material elements",
      "Suitable for display and gifting",
      "Can feature customised artwork",
      "Useful for corporate and personal occasions",
    ],
    note:
      "Artwork, dimensions, finish and personalisation options depend on the selected design.",
  },

  "mobile-stand": {
    tagline: "A compact stand for everyday mobile use",
    description:
      "Mobile Stands are small accessories designed to hold smartphones at a convenient viewing angle. Coir-based or coir-composite versions can offer a natural-material finish for desks and personal workspaces.",
    applications: [
      "Office desks",
      "Home workstations",
      "Study tables",
      "Corporate gifting",
      "Promotional merchandise",
    ],
    advantages: [
      "Compact and practical accessory",
      "Helps position a smartphone for viewing",
      "Suitable for desk use",
      "Can be customised for gifting",
      "Useful for corporate promotional kits",
    ],
    note:
      "Confirm phone compatibility, dimensions, material construction and available branding options for the selected model.",
  },

  "coir-gift-pots": {
    tagline: "Natural coir pots for thoughtful gifting",
    description:
      "Coir Gift Pots are decorative plant containers made using coconut fibre. They are suitable for small plants and can be presented as natural-themed gifts for corporate and personal occasions.",
    applications: [
      "Corporate gift hampers",
      "Employee welcome gifts",
      "Event and conference giveaways",
      "Home and office decoration",
      "Nursery and gardening gifts",
    ],
    advantages: [
      "Made using coconut fibre",
      "Natural decorative appearance",
      "Suitable for small plant arrangements",
      "Can be included in gift hampers",
      "Useful for nature-themed gifting",
    ],
    note:
      "Confirm pot dimensions, shape, finish and whether plants or growing media are included.",
  },

  "coir-wood-plaque": {
    tagline: "Custom decorative plaques for recognition and gifting",
    description:
      "Coir Wood Plaques are decorative plaque products combining wood-based elements and coir-inspired design. They can be used for recognition, personalised messages and corporate gifting.",
    applications: [
      "Corporate awards and recognition",
      "Office displays",
      "Personalised gifts",
      "Event souvenirs",
      "Promotional and commemorative products",
    ],
    advantages: [
      "Suitable for customised messages",
      "Natural decorative appearance",
      "Useful for corporate recognition",
      "Can be personalised with designs",
      "Suitable for events and gifting",
    ],
    note:
      "Confirm plaque dimensions, base material, engraving or printing method and customisation options before ordering.",
  },
};

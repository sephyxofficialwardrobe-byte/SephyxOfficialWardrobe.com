// SEPHYX Product Database
// 
// HOW TO ADD NEW PRODUCTS EASILY:
// ================================
//
// 1. REGULAR PRODUCTS: Copy the template below and modify the values
// 2. BLINDBOX PRODUCTS: Copy the blindbox template and modify
// 3. Make sure to use unique IDs (use next available number)
// 4. Set isNewDrop: true for featured items
//
// REGULAR PRODUCT TEMPLATE:
// {
//     id: NEXT_UNIQUE_ID,
//     name: "PRODUCT NAME",
//     price: 29.99,
//     image: "MAIN_IMAGE_URL",
//     images: ["IMAGE1_URL", "IMAGE2_URL", "IMAGE3_URL"], // Optional: multiple images
//     slogan: "CATCHY SLOGAN",
//     description: "Detailed product description with features and benefits",
//     specifications: {
//         "Material": "Product material info",
//         "Weight": "Weight info",
//         "Fit": "Fit description",
//         "Features": "Key features",
//         "Care": "Care instructions",
//         "Origin": "Manufacturing origin"
//     },
//     category: "clothing", // clothing, accessories, shoes, mystery
//     type: "regular", // regular or blindbox
//     isNewDrop: true/false,
//     sizes: ["S", "M", "L", "XL"], // Optional
//     colors: ["Color1", "Color2", "Color3"] // Optional
// },
//
// BLINDBOX TEMPLATE:
// {
//     id: NEXT_UNIQUE_ID,
//     name: "MYSTERY BOX NAME",
//     price: 45.99,
//     image: "MYSTERY_BOX_IMAGE_URL",
//     images: ["IMAGE1_URL", "IMAGE2_URL"], // Optional
//     slogan: "MYSTERY SLOGAN",
//     description: "Description of what the mystery box contains",
//     specifications: {
//         "Contents": "Number of items",
//         "Rarity System": "Rarity levels available",
//         "Total Value": "Value range of contents",
//         "Packaging": "Package description",
//         "Origin": "Source location"
//     },
//     category: "mystery",
//     type: "blindbox",
//     isNewDrop: true/false,
//     blindboxData: {
//         totalItems: "X-Y items guaranteed",
//         possibleOutcomes: [
//             {
//                 name: "Item Name",
//                 rarity: "Common/Rare/Epic/Legendary",
//                 chance: 45, // Percentage chance
//                 image: "ITEM_IMAGE_URL",
//                 description: "What this item is"
//             },
//             // Add more possible outcomes here...
//         ]
//     }
// },
//
// RARITY LEVELS FOR BLINDBOXES:
// - Common: 30-50% chance, basic items
// - Rare: 20-30% chance, better items  
// - Epic: 10-20% chance, premium items
// - Legendary: 5-15% chance, ultra rare items
//
// QUICK START IDs:
// Regular products: Use IDs 6, 7, 8, 9, 10, etc.
// Blindbox products: Use IDs 103, 104, 105, etc.
//
// ================================

const products = [
    // Regular Clothing Items
    {
        id: 1,
        name: "Venom Web Hoodie 🕷️⚡",
        price: 99.99,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hhvqerft49mfhhzwbh2vv7%2F1752936047_img_0.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3nHK097X1KXqewJifsS%2Bdf7Hd5YQ%2BTJZKewqHSTIUpc%3D&az=oaivgprodscus",
        images: [
            "https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2F0497af4a8ed8ca3c237e73d38b63f1efa1f2922a%2Fmedia_01k0hhvka6e08a0ejdygbgc9ww.png?st=2025-08-23T06%3A53%3A05Z&se=2025-08-29T07%3A53%3A05Z&sks=b&skt=2025-08-23T06%3A53%3A05Z&ske=2025-08-29T07%3A53%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2Bi1qzqfPmZsqnXisb5%2BQ8uF0r6KOnqQjXAJJFQ%2BkG0g%3D&az=oaivgprodscus",
            "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hhvqerft49mfhhzwbh2vv7%2F1752936047_img_0.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3nHK097X1KXqewJifsS%2Bdf7Hd5YQ%2BTJZKewqHSTIUpc%3D&az=oaivgprodscus"
        ],
        slogan: "SYSTEM OVERLOAD",
        description: "The Venom Web Hoodie is forged for the chaos-coded elite. Crafted with adaptive fibers that vibe with your own energy, this piece shifts with every move—making you feel like you’re running on quantum upgrades. Sleek, dark, and untouchable, it blends cyberpunk aesthetics with comfort that hits different. This isn’t just streetwear, it’s combat software you can wear.",
        specifications: {
            "Material": "Quantum-Disruption Cotton Blend (65% Organic Cotton, 35% Synthetic Neural Fibers)",
            "Weight": "580g",
            "Fit": "Oversized / Streetwear Cut",
            "Care": "Machine Wash Cold, Neural Fiber Safe Detergent Recommended",
            "Origin": "Manufactured in Neo-Tokyo Orbital Facility"
        },
        category: "clothing",
        type: "regular",
        isNewDrop: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Bloodchain Tee ⛓️🩸",
        price: 59.99,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hg1w6rfhqtvzf1g6xryrjd%2F1752934149_img_0.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=8u2Zv4f%2F23SZtMPMKlDYcap%2FhZjofMxwYuLvW6gtLjw%3D&az=oaivgprodscus",
        images: [
            "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hg1w6rfhqtvzf1g6xryrjd%2F1752934149_img_0.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=8u2Zv4f%2F23SZtMPMKlDYcap%2FhZjofMxwYuLvW6gtLjw%3D&az=oaivgprodscus",
            "https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2F0497af4a8ed8ca3c237e73d38b63f1efa1f2922a%2Fmedia_01k0he2w35eyrtshct3749kvb6.png?st=2025-08-24T09%3A01%3A13Z&se=2025-08-30T10%3A01%3A13Z&sks=b&skt=2025-08-24T09%3A01%3A13Z&ske=2025-08-30T10%3A01%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=2VVg8MkvXaJEYwQ8Vw5FmwddqUI9ZWFUo4472Ya79UQ%3D&az=oaivgprodscus"
        ],
        slogan: "BREAK THE CODE",
        description: "Born from the underground, the Bloodchain Tee is a signal-jammer fit made for those who refuse to play by the rules. Dark, unshakable, and coded with rebellion—this piece moves like armor but feels like a second skin. Perfect for late-night raids, city storms, or simply pulling up looking untouchable..",
        specifications: {
            "Material": "Encrypted Poly-Carbon Weave with Kevlar Reinforcement",
            "Weight": "850g",
            "Fit": "Tactical / Military Inspired",
            "Care": "Dry Clean Only - Encryption Preservation Required",
            "Origin": "Assembled in Underground Resistance Labs"
        },
        category: "clothing",
        type: "regular",
        isNewDrop: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Spider Omen Hoodie🕸️",
        price: 119.99,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hf1r2nf22tva82p3mh43v5%2F1752933094_img_1.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=i1yleN4sQonZaXSQkWAqt69R4BC6jY6%2FweHcexi1rjc%3D&az=oaivgprodscus",
        images: [
            "https://videos.openai.com/vg-assets/assets%2Ftask_01k0hf1r2nf22tva82p3mh43v5%2F1752933094_img_1.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=i1yleN4sQonZaXSQkWAqt69R4BC6jY6%2FweHcexi1rjc%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2F0497af4a8ed8ca3c237e73d38b63f1efa1f2922a%2Fmedia_01k0hegcssfssa7hrqy7aq8eca.png?st=2025-08-24T08%3A58%3A54Z&se=2025-08-30T09%3A58%3A54Z&sks=b&skt=2025-08-24T08%3A58%3A54Z&ske=2025-08-30T09%3A58%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=IrJ4hfjRRO%2FF%2FOQoU1BlDFIKmOErwa3CkycCTUx7qSg%3D&az=oaivgprodscus"
        ],
        slogan: "DIGITAL DREAMS",
        description: "Woven in the shadows of the net, the Spider Omen Hoodie is a living canvas—its patterns shift under the light like coded illusions. Built for wanderers, night riders, and digital nomads who move between realities. Light on the body, heavy on the aura. Wherever you go, the hoodie adapts, reacts, and keeps you locked in the dream..",
        specifications: {
            "Material": "Photoreactive Cotton Blend",
            "Weight": "180g",
            "Fit": "Regular / Unisex",
            "Care": "Machine Wash Cold, Air Dry",
            "Origin": "Digital Printing Labs, Neo-Seoul"
        },
        category: "clothing",
        type: "regular",
        isNewDrop: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Electro Vite Tee⚡⛈️",
        price: 49.99,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0he1vebe3595tt1y1csp235%2F1752932034_img_1.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=KRGTtZG07Y3sj%2FA%2F5BxaBB9IkS0Qmh7s3lbidKDhllI%3D&az=oaivgprodscus",
        images: [
            "https://videos.openai.com/vg-assets/assets%2Ftask_01k0he1vebe3595tt1y1csp235%2F1752932034_img_1.webp?st=2025-08-23T06%3A01%3A17Z&se=2025-08-29T07%3A01%3A17Z&sks=b&skt=2025-08-23T06%3A01%3A17Z&ske=2025-08-29T07%3A01%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=KRGTtZG07Y3sj%2FA%2F5BxaBB9IkS0Qmh7s3lbidKDhllI%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2F0497af4a8ed8ca3c237e73d38b63f1efa1f2922a%2Fmedia_01k0he1qzyfh1sfgsg8gwkn67f.png?st=2025-08-24T08%3A58%3A39Z&se=2025-08-30T09%3A58%3A39Z&sks=b&skt=2025-08-24T08%3A58%3A39Z&ske=2025-08-30T09%3A58%3A39Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=LDWqd7whba%2BQldheUatOXAFFRm4W%2FeHM5yTM%2B6YkD3s%3D&az=oaivgprodscus"
        ],
        slogan: "GLITCH AESTHETIC",
        description: "Forged in static and neon storms, the Electro Vite Tee is your urban respawn uniform. Sleek, lightweight, and charged with glitch energy—made for city runs, digital quests, and those nights where the vibe is straight cyberpunk chaos. Moves with you, adapts with you, and always looks like a main character skin..",
        specifications: {
            "Material": "Tactical Ripstop with Elastane Blend",
            "Weight": "450g",
            "Fit": "Tapered / Athletic",
            "Care": "Machine Wash, Tumble Dry Low",
            "Origin": "Tactical Labs, Underground City"
        },
        category: "clothing",
        type: "regular",
        isNewDrop: false,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Carbon Decay Tee🥀💀",
        price: 89.99,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k3b10ny4facam6z4tz3n5qq3%2F1755938191_img_0.webp?st=2025-08-23T06%3A57%3A14Z&se=2025-08-29T07%3A57%3A14Z&sks=b&skt=2025-08-23T06%3A57%3A14Z&ske=2025-08-29T07%3A57%3A14Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=mveDHGrTuUXtAbhnqJA9Kn1xA4aZFh%2FiFbwfcr7mUo0%3D&az=oaivgprodscus",
        images: [
            "https://videos.openai.com/vg-assets/assets%2Ftask_01k3b10ny4facam6z4tz3n5qq3%2F1755938191_img_0.webp?st=2025-08-23T06%3A57%3A14Z&se=2025-08-29T07%3A57%3A14Z&sks=b&skt=2025-08-23T06%3A57%3A14Z&ske=2025-08-29T07%3A57%3A14Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=mveDHGrTuUXtAbhnqJA9Kn1xA4aZFh%2FiFbwfcr7mUo0%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Ftask_01k3dtzb3efj7abt6fxyhfpkrr%2F1756032511_img_1.webp?st=2025-08-24T09%3A00%3A51Z&se=2025-08-30T10%3A00%3A51Z&sks=b&skt=2025-08-24T09%3A00%3A51Z&ske=2025-08-30T10%3A00%3A51Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Ma4wB3Pfo0qDuRPdFI5mLSnDiMov2LbgW1PTyWWLqh0%3D&az=oaivgprodscus",
"https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2F0497af4a8ed8ca3c237e73d38b63f1efa1f2922a%2Fmedia_01k3dty3a0e44tj1azh2ee1xtr.png?st=2025-08-24T08%3A59%3A01Z&se=2025-08-30T09%3A59%3A01Z&sks=b&skt=2025-08-24T08%3A59%3A01Z&ske=2025-08-30T09%3A59%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=2RkUS%2BAgm1SJSptKE%2BtnUPb8L5f%2BM4v7%2FnDsVLkLgVA%3D&az=oaivgprodscus"
        ],
        slogan: "EXECUTE STYLE",
        description: "This isn’t just a tee—it’s a respawn fit. Crafted for midnight missions, rooftop vibes, and those marathon grind sessions where style = stamina. Light, breathable, and built for movement, it keeps you locked in while looking untouchable..",
        specifications: {
            "Material": "Performance Cotton Blend",
            "Weight": "120g",
            "Fit": "Athletic / Slim",
            "Care": "Machine Wash, Air Dry",
            "Origin": "Performance Labs, Digital District"
        },
        category: "clothing",
        type: "regular",
        isNewDrop: true,
        sizes: [ "S", "M", "L", "XL"]
    },
    // Blindbox Items
    {
        id: 101,
        name: "COMING SOON",
        price: 45.99,
        image: "https://i.pinimg.com/736x/d6/32/b9/d632b9a4a40272cae4fe5b08ec297522.jpg",
        images: [
            "https://i.pinimg.com/736x/d6/32/b9/d632b9a4a40272cae4fe5b08ec297522.jpg",
            "https://i.pinimg.com/736x/ae/5d/ab/ae5dab044f196d0ac30ea7c152bd6249.jpg"
        ],
        slogan: "UNKNOWN PAYLOAD",
        description: "A curated mystery box containing exclusive SEPHYX items. Each pack contains 3-5 items with varying rarity levels. Contents are randomly generated using quantum encryption algorithms.",
        specifications: {
            "Contents": "3-5 Random Items",
            "Rarity System": "Common, Rare, Epic, Legendary",
            "Total Value": "QAR 60-150 worth of items",
            "Packaging": "Secure Cryptographic Container",
            "Origin": "Randomized from Global Inventory"
        },
        category: "mystery",
        type: "blindbox",
        isNewDrop: true,
        blindboxData: {
            totalItems: "3-5 items guaranteed",
            possibleOutcomes: [
                {
                    name: "Exclusive SEPHYX Tee",
                    rarity: "Common",
                    chance: 45,
                    image: "https://i.pinimg.com/736x/f4/d9/eb/f4d9eb94251c69a629f61e3ab0ef4d29.jpg",
                    description: "Limited edition t-shirt with exclusive designs"
                },
                {
                    name: "Hacker Hoodie Variant",
                    rarity: "Rare",
                    chance: 25,
                    image: "https://i.pinimg.com/736x/75/e5/f5/75e5f5b89008b28d0ec6bce17edf71d9.jpg",
                    description: "Special colorway of our popular hoodie"
                },
                {
                    name: "Neural Interface Accessory",
                    rarity: "Epic",
                    chance: 15,
                    image: "https://i.pinimg.com/736x/ae/5d/ab/ae5dab044f196d0ac30ea7c152bd6249.jpg",
                    description: "High-tech wearable with LED integration"
                },
                {
                    name: "Quantum Jacket Proto",
                    rarity: "Legendary",
                    chance: 10,
                    image: "https://i.pinimg.com/736x/f0/41/dd/f041dd82941971fde595da3b1d51a7b4.jpg",
                    description: "Ultra-rare prototype jacket with smart features"
                },
                {
                    name: "Digital Artifact Pin",
                    rarity: "Common",
                    chance: 30,
                    image: "https://i.pinimg.com/736x/d6/32/b9/d632b9a4a40272cae4fe5b08ec297522.jpg",
                    description: "Collectible pins with NFC chips"
                },
                {
                    name: "Cyber Punk Sticker Pack",
                    rarity: "Common",
                    chance: 40,
                    image: "https://i.pinimg.com/736x/75/e5/f5/75e5f5b89008b28d0ec6bce17edf71d9.jpg",
                    description: "Holographic stickers for device customization"
                }
            ]
        }
    },
    {
        id: 102,
        name: "COMING SOON",
        price: 89.99,
        image: "https://i.pinimg.com/736x/f0/41/dd/f041dd82941971fde595da3b1d51a7b4.jpg",
        images: [
            "https://i.pinimg.com/736x/f0/41/dd/f041dd82941971fde595da3b1d51a7b4.jpg",
            "https://i.pinimg.com/736x/ae/5d/ab/ae5dab044f196d0ac30ea7c152bd6249.jpg",
            "https://i.pinimg.com/736x/f4/d9/eb/f4d9eb94251c69a629f61e3ab0ef4d29.jpg"
        ],
        slogan: "CLASSIFIED ACCESS",
        description: "Premium mystery collection featuring high-value items with guaranteed rare+ quality. Each collection contains 4-6 premium items including at least one Epic or Legendary piece.",
        specifications: {
            "Contents": "4-6 Premium Items",
            "Guaranteed": "Minimum 1 Epic+ Item",
            "Total Value": "QAR 120-300 worth of items",
            "Packaging": "Reinforced Vault Container",
            "Origin": "Classified Inventory Vault"
        },
        category: "mystery",
        type: "blindbox",
        isNewDrop: false,
        blindboxData: {
            totalItems: "4-6 premium items guaranteed",
            possibleOutcomes: [
                {
                    name: "Limited Matrix Jacket",
                    rarity: "Epic",
                    chance: 35,
                    image: "https://i.pinimg.com/736x/f0/41/dd/f041dd82941971fde595da3b1d51a7b4.jpg",
                    description: "Limited edition jacket with smart fabric technology"
                },
                {
                    name: "Quantum Neural Headpiece",
                    rarity: "Legendary",
                    chance: 15,
                    image: "https://i.pinimg.com/736x/ae/5d/ab/ae5dab044f196d0ac30ea7c152bd6249.jpg",
                    description: "Revolutionary wearable tech with AR capabilities"
                },
                {
                    name: "Cryptographic Boot Set",
                    rarity: "Epic",
                    chance: 25,
                    image: "https://i.pinimg.com/736x/75/e5/f5/75e5f5b89008b28d0ec6bce17edf71d9.jpg",
                    description: "High-tech footwear with embedded electronics"
                },
                {
                    name: "Holo-Display Gloves",
                    rarity: "Rare",
                    chance: 40,
                    image: "https://i.pinimg.com/736x/d6/32/b9/d632b9a4a40272cae4fe5b08ec297522.jpg",
                    description: "Interactive gloves with projection capabilities"
                },
                {
                    name: "Elite Member Badge",
                    rarity: "Epic",
                    chance: 20,
                    image: "https://i.pinimg.com/736x/f4/d9/eb/f4d9eb94251c69a629f61e3ab0ef4d29.jpg",
                    description: "Exclusive membership badge with special privileges"
                },
                {
                    name: "Signature Art Print",
                    rarity: "Rare",
                    chance: 30,
                    image: "https://i.pinimg.com/736x/75/e5/f5/75e5f5b89008b28d0ec6bce17edf71d9.jpg",
                    description: "Limited edition artwork by SEPHYX designers"
                }
            ]
        }
    }
];

// ============================================================================
// READY-TO-USE TEMPLATES - Just copy, paste, and modify!
// ============================================================================

// EXAMPLE: How to add a new regular product
// Copy this code block, change the values, and paste it before the ]; line above
/*
    {
        id: 6, // Use next available ID
        name: "CYBER GLOVES", // Your product name
        price: 24.99, // Your price
        image: "YOUR_IMAGE_URL_HERE", // Main product image
        images: [ // Optional: Add multiple images for gallery
            "YOUR_IMAGE_URL_HERE",
            "SECOND_IMAGE_URL",
            "THIRD_IMAGE_URL"
        ],
        slogan: "DIGITAL TOUCH", // Catchy phrase
        description: "High-tech gloves with haptic feedback and gesture recognition. Perfect for virtual reality experiences and digital interactions.",
        specifications: {
            "Material": "Smart Fabric with Conductive Threads",
            "Weight": "150g per pair",
            "Fit": "Adjustable / One Size",
            "Features": "Haptic Feedback, Gesture Recognition, Bluetooth Connectivity",
            "Care": "Hand Wash Only, Air Dry",
            "Origin": "Tech Labs, Silicon Valley"
        },
        category: "accessories", // clothing, accessories, shoes, mystery
        type: "regular",
        isNewDrop: true, // true = shows in NEW DROPS section
        sizes: ["S", "M", "L"], // Optional: remove if not needed
        colors: ["Black", "Silver", "Blue"] // Optional: remove if not needed
    },
*/

// EXAMPLE: How to add a new mystery blindbox
// Copy this code block, change the values, and paste it before the ]; line above
/*
    {
        id: 103, // Use next available ID (100+ for blindboxes)
        name: "HACKER'S SURPRISE BOX", // Mystery box name
        price: 35.99, // Box price
        image: "YOUR_MYSTERY_BOX_IMAGE", // Box image
        images: ["BOX_IMAGE_1", "BOX_IMAGE_2"], // Optional
        slogan: "UNKNOWN TREASURES", // Mystery slogan
        description: "A curated collection of hacker-themed items including clothing, accessories, and digital assets. Each box contains 2-4 items worth more than the box price.",
        specifications: {
            "Contents": "2-4 Random Items",
            "Rarity System": "Common, Rare, Epic",
            "Total Value": "QAR 40-90 worth of items",
            "Packaging": "Secure Black Box",
            "Origin": "Global Hacker Collective"
        },
        category: "mystery",
        type: "blindbox",
        isNewDrop: true,
        blindboxData: {
            totalItems: "2-4 items guaranteed",
            possibleOutcomes: [
                {
                    name: "Hacker Sticker Pack", // Item name
                    rarity: "Common", // Common/Rare/Epic/Legendary
                    chance: 60, // Percentage chance
                    image: "STICKER_IMAGE_URL",
                    description: "Collection of 10 premium hacker stickers"
                },
                {
                    name: "Code Ninja Tee",
                    rarity: "Rare",
                    chance: 25,
                    image: "TEE_IMAGE_URL",
                    description: "Exclusive t-shirt design"
                },
                {
                    name: "USB Hacking Tool",
                    rarity: "Epic",
                    chance: 15,
                    image: "USB_IMAGE_URL",
                    description: "Professional penetration testing USB device"
                }
                // Add more possible outcomes as needed
                // Remember: All chance percentages should add up to 100% or more
            ]
        }
    },
*/

// ============================================================================
// QUICK REFERENCE:
// ============================================================================
// 
// REGULAR PRODUCT FIELDS:
// - id: Unique number (next available: 6, 7, 8, 9...)
// - name: Product name in CAPS
// - price: Number with decimal (29.99)
// - image: Main image URL
// - images: Array of image URLs (optional)
// - slogan: Short catchy phrase
// - description: Detailed description
// - specifications: Object with product details
// - category: "clothing", "accessories", "shoes", "mystery"
// - type: "regular" or "blindbox"
// - isNewDrop: true/false (shows in NEW DROPS if true)
// - sizes: Array of size options (optional)
// - colors: Array of color options (optional)
//
// BLINDBOX ADDITIONAL FIELDS:
// - blindboxData: Object containing:
//   - totalItems: Description of item count
//   - possibleOutcomes: Array of possible items with:
//     - name: Item name
//     - rarity: "Common", "Rare", "Epic", "Legendary"
//     - chance: Percentage number
//     - image: Item image URL
//     - description: What the item is
//
// TIPS:
// 1. Always use unique IDs
// 2. Keep prices realistic (10-100 QAR range)
// 3. Use high-quality image URLs
// 4. Make sure blindbox chances add up to 100% or more
// 5. Test your new products by refreshing the website
//
// ============================================================================

// Export products for use in main script
window.SEPHYX_PRODUCTS = products;

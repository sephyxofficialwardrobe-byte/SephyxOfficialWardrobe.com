# How to Add New Products to SEPHYX

## Quick Start Guide

### Adding a Regular Product (Clothing, Accessories, etc.)

1. **Open `products.js`** 
2. **Find the line with `];`** (around line 349)
3. **Add a comma after the last product** (before the `];`)
4. **Copy and paste this template:**

```javascript
{
    id: 6, // CHANGE THIS: Use next available number (6, 7, 8, 9...)
    name: "YOUR PRODUCT NAME", // CHANGE THIS: Product name in CAPS
    price: 29.99, // CHANGE THIS: Your price
    image: "YOUR_IMAGE_URL", // CHANGE THIS: Main image URL
    images: [ // OPTIONAL: Multiple images for gallery
        "YOUR_IMAGE_URL",
        "SECOND_IMAGE_URL"
    ],
    slogan: "YOUR SLOGAN", // CHANGE THIS: Catchy phrase
    description: "Your product description here", // CHANGE THIS
    specifications: {
        "Material": "Product material",
        "Weight": "Weight info",
        "Fit": "Fit type",
        "Features": "Key features",
        "Care": "Care instructions",
        "Origin": "Made where"
    },
    category: "clothing", // clothing, accessories, shoes, mystery
    type: "regular",
    isNewDrop: true, // true = shows in NEW DROPS section
    sizes: ["S", "M", "L"], // OPTIONAL: Remove if not needed
    colors: ["Color1", "Color2"] // OPTIONAL: Remove if not needed
},
```

5. **Change all the values** to match your product
6. **Save the file** and refresh your website

### Adding a Mystery Blindbox

1. **Open `products.js`**
2. **Find the line with `];`** (around line 349)
3. **Add a comma after the last product** (before the `];`)
4. **Copy and paste this template:**

```javascript
{
    id: 103, // CHANGE THIS: Use 103, 104, 105... for blindboxes
    name: "YOUR MYSTERY BOX NAME", // CHANGE THIS
    price: 45.99, // CHANGE THIS: Box price
    image: "YOUR_BOX_IMAGE", // CHANGE THIS: Mystery box image
    slogan: "MYSTERY SLOGAN", // CHANGE THIS
    description: "Description of what's in the box", // CHANGE THIS
    specifications: {
        "Contents": "3-5 Random Items",
        "Rarity System": "Common, Rare, Epic, Legendary",
        "Total Value": "QAR 60-120 worth of items",
        "Packaging": "Secure Container",
        "Origin": "Mystery Vault"
    },
    category: "mystery",
    type: "blindbox",
    isNewDrop: true,
    blindboxData: {
        totalItems: "3-5 items guaranteed",
        possibleOutcomes: [
            {
                name: "Item Name 1", // CHANGE THIS
                rarity: "Common", // Common/Rare/Epic/Legendary
                chance: 50, // CHANGE THIS: Percentage
                image: "ITEM_IMAGE_URL", // CHANGE THIS
                description: "What this item is" // CHANGE THIS
            },
            {
                name: "Item Name 2",
                rarity: "Rare",
                chance: 30,
                image: "ITEM_IMAGE_URL",
                description: "What this item is"
            },
            {
                name: "Item Name 3",
                rarity: "Epic",
                chance: 20,
                image: "ITEM_IMAGE_URL",
                description: "What this item is"
            }
            // Add more items as needed
        ]
    }
},
```

5. **Customize all the values**
6. **Make sure chance percentages add up to 100% or more**
7. **Save and refresh**

## Important Rules

### IDs
- **Regular products:** Use 6, 7, 8, 9, 10... (next available number)
- **Blindbox products:** Use 103, 104, 105... (100+ range)
- **Never use the same ID twice**

### Rarity System for Blindboxes
- **Common:** 30-50% chance, basic items
- **Rare:** 20-30% chance, better items  
- **Epic:** 10-20% chance, premium items
- **Legendary:** 5-15% chance, ultra rare items

### Images
- Use high-quality image URLs
- For multiple images, put them in the `images` array
- The first image is the main one shown on product cards

### Categories
- **clothing:** T-shirts, hoodies, jackets, pants, etc.
- **accessories:** Gloves, bags, jewelry, etc.
- **shoes:** All footwear
- **mystery:** All blindboxes and mystery items

## Testing Your New Products

1. **Save `products.js`**
2. **Refresh your website**
3. **Check the Collection page** for your new regular products
4. **Check the New Drops page** if you set `isNewDrop: true`
5. **Click on your product** to test the preview page
6. **For blindboxes:** Make sure the outcomes and chances display correctly

## Common Mistakes to Avoid

❌ **Don't:** Use the same ID as an existing product
❌ **Don't:** Forget the comma between products
❌ **Don't:** Make blindbox chances add up to less than 90%
❌ **Don't:** Use broken image URLs

✅ **Do:** Test your products after adding them
✅ **Do:** Use unique, descriptive names
✅ **Do:** Keep prices reasonable (10-100 QAR range)
✅ **Do:** Write engaging descriptions and slogans

## Example: Adding a New Jacket

Here's a complete example of adding a new jacket:

```javascript
{
    id: 6,
    name: "NEON STORM JACKET",
    price: 67.99,
    image: "https://your-image-url.jpg",
    images: [
        "https://your-image-url.jpg",
        "https://second-view.jpg",
        "https://detail-shot.jpg"
    ],
    slogan: "WEATHER THE STORM",
    description: "Advanced weather-resistant jacket with built-in LED strips and temperature regulation. Perfect for the urban explorer who demands both style and functionality.",
    specifications: {
        "Material": "Nano-Tech Weather Shield Fabric",
        "Weight": "780g",
        "Fit": "Regular / Unisex",
        "Features": "LED Strips, Temperature Control, Water Resistant",
        "Care": "Machine Wash Cold, Hang Dry",
        "Origin": "Weather Labs, Iceland"
    },
    category: "clothing",
    type: "regular",
    isNewDrop: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Storm Black", "Electric Blue", "Thunder Gray"]
},
```

That's it! Your new products will appear on the website immediately after saving and refreshing.
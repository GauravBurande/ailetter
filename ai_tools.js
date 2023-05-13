const data = [
    {
        "name": "Kaedim",
        "link": "https://www.kaedim3d.com/",
        "description": "Stop losing hours to modeling tools. Generate stunning 3D art with nothing more than an image.",
        "free?": "❌",
        "category": "3d modelling"
    },
    {
        "name": "TextureLab",
        "link": "https://www.texturelab.xyz/",
        "description": "Generate 3D textures for your game in seconds thanks to AI.",
        "free?": "❔",
        "category": "3d modelling"
    },
    {
        "name": "lumalabs",
        "link": "https://captures.lumalabs.ai/imagine",
        "description": "An early experiment to prototype and create 3D with text Access to generation is gradually expanding to everyone on the waitlist.",
        "free?": "✅",
        "category": "3d modelling"
    },
    {
        "name": "plask",
        "link": "https://plask.ai/",
        "description": "Easily extract motion from video without expensive bodysuits or motions work.",
        "free?": "✅",
        "category": "3d modelling"
    },
    {
        "name": "AI Room Planner",
        "link": "https://airoomplanner.com/",
        "description": "Get hundreds of interior design ideas for your room - free with no limit.",
        "free?": "❔",
        "category": "architecture"
    },
    {
        "name": "AI TWO",
        "link": "https://aitwo.co/",
        "description": "To design interior of room, use this . To design exterior of homes/ buildings click exterior from bottom bar. To convert sketches to realistic images, click sketch2real from bottom bar",
        "free?": "❔",
        "category": "architecture"
    },
    {
        "name": "Dimensions",
        "link": "https://www.dimensions.ink/",
        "description": "Imagine being able to create beautiful interior designs with ease – that's what Dimensions offers.",
        "free?": "✅",
        "category": "architecture"
    },
    {
        "name": "Getfloorplan",
        "link": "https://getfloorplan.com/",
        "description": "Up to 30% calls increase reported by our clients using 2D, 3D floor plans and virtual tours.",
        "free?": "❔",
        "category": "architecture"
    },
    {
        "name": "Image Computer",
        "link": "https://image.computer/",
        "description": "Use our powerful AI technology to generate any type of image you can think of. In a matter of seconds.",
        "free?": "❌",
        "category": "architecture"
    },
    {
        "name": "Interior AI",
        "link": "https://interiorai.com/",
        "description": "Get interior design ideas using Artificial Intelligence and virtually stage interiors for real estate listings with different interior styles.",
        "free?": "✅",
        "category": "architecture"
    },
    {
        "name": "Makeit.ai",
        "link": "https://www.maket.ai/",
        "description": "Our generative design software enables architects, builders & developers to quickly generate thousands of architectural plans instantly.",
        "free?": "❔",
        "category": "architecture"
    },
    {
        "name": "AI Art Latitude",
        "link": "https://ai-art.latitude.io/",
        "description": "create stunning images, out of your mind.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "AI Background Generator by PhotoRoom",
        "link": "https://www.photoroom.com/",
        "description": "Create product and portrait pictures using only your phone. Remove background, change background and showcase products.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "AI Picasso",
        "link": "https://aipicasso.studio.site/",
        "description": "Create Amazing artwork with Powerful AI! It generates an image from the text you enter, just as you expect using an AI called Stable Diffusion. Let's enjoy making art with AI!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "AI Wall Decor",
        "link": "https://aiwalldecor.com/",
        "description": "Use Stable Diffusion to generate high quality framed art, without lifting a brush. Simply type what you want your painting to look like, generate your art, choose your favorite frame, and ship it.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "AI2image",
        "link": "https://www.ai2image.com/",
        "description": "Generate the best images online with Free AI Image Generator by AI2image. Use AI to generate high-quality images of any size and style you want!.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "AIGraphics",
        "link": "https://aigraphics.io/",
        "description": "Generate Graphics In Seconds Using AI.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "AIimages",
        "link": "https://aiimag.es/",
        "description": "Free&Easy Text2Image AI.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Accomplice",
        "link": "https://accomplice.ai/",
        "description": "Accomplice's AI-powered platform helps your team generate 100% royalty-free logos, photos and graphics while saving time, cutting costs, and simplifying your workflow.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Ai Art Generator",
        "link": "https://aiart.limited/",
        "description": "Ai Art Limited, creates images, videos, music, and article for you using artificial intelligence. With our app, you can become an artist using artificial intelligence.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Alter Ego AI",
        "link": "https://alterego-ai.com/",
        "description": "AI generated images of you in heaps of styles",
        "free?": "❌",
        "category": "art and image generation"
    },
    {
        "name": "Anime AI",
        "link": "https://animeai.app/",
        "description": "Create your perfect anime picture with AI. Choose between One Piece, Naruto, Webtoon styles and others!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Apeture",
        "link": "https://lexica.art/aperture",
        "description": "Create Images by Lexica.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Aragon",
        "link": "https://www.aragon.ai/",
        "description": "Create stunning art & images 10X faster with AI.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Article2Image",
        "link": "https://www.stockai.com/",
        "description": "Download AI-generated stock photos for free, with the click of a button. Use in any project without worry about attribution.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Artshop",
        "link": "https://artshops.xyz/",
        "description": "Artshop brings amazing AI artworks to wall arts in your home and create welcoming addition to your beautiful home.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Astria.ai",
        "link": "https://www.astria.ai/",
        "description": "Create custom images using AI.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Bg Eraser",
        "link": "https://bgeraser.com/",
        "description": "Powerful AI Inpainting and Picture Clean Up technology. Remove unwanted objects and clean up pictures in seconds.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "CLIP STUDIO PAINT",
        "link": "https://www.clipstudio.net/",
        "description": "は、リアルで自然な描き味と充実の機能、驚くほど便利な素材が多数。世界中のユーザーがアップロードした10万点以上の素材をダウンロードすれば、ラクしてもっとクオリティの高い作品に。.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Cartoonize",
        "link": "https://imagetocartoon.com/",
        "description": "Best AI cartoonizer online for free.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "DALL·E 2",
        "link": "https://openai.com/dall-e-2/",
        "description": "DALL·E 2 can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "DaVinciFace",
        "link": "https://www.davinciface.com/",
        "description": "DaVinci Face is a software – based on the most innovative Artificial Intelligence techniques, in particular on GAN (Generative Adversarial Network) to create Leonardesque-style portraits.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Deep Dream Generator",
        "link": "https://deepdreamgenerator.com/",
        "description": "Create inspiring visual content in a collaboration with our AI enabled tools.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Designify",
        "link": "https://www.designify.com/",
        "description": "Create exceptional product photos and more: Pick any image to start the magic ✨.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Dezgo",
        "link": "https://dezgo.com/",
        "description": "Generate high-quality images from any text prompt. Let the AI draw!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Diffusion Land",
        "link": "https://www.diffusion.land/",
        "description": "Generated images with 1-click, using any model of your choice.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Drawanything",
        "link": "https://www.drawanything.app/",
        "description": "Use AI to create novel images in minutes.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "DreamUp",
        "link": "https://www.dreamup.com/",
        "description": "The DeviantArt DreamUp™ AI-art generator lets you create AI-art safely and fairly.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Dreamspace.art",
        "link": "https://dreamspace.art/",
        "description": "The prompt diagramming tool.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "dreamweaverai",
        "link": "https://www.dreamweaverai.com/",
        "description": "build the tee of your dreams with ai.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Erase.bg",
        "link": "https://www.erase.bg/",
        "description": "Make the background transparent for images of humans, animals, or objects. Download images in high resolution for free for e-commerce and personal use. No credit card needed.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Eye for AI",
        "link": "https://eyeforai.xyz/",
        "description": "Create images from text in under a minute.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Facet 2.0",
        "link": "https://facet.ai/",
        "description": "Harness the power of AI to make the creative process fast, effective and accessible. Experiment with visual directions, automate selections, and collaborate--all on the web.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Flying Dog for Photoshop",
        "link": "https://www.flyingdog.de/sd/",
        "description": "Four powerful AI connectors: Three for Stable Diffusion and DALL-E 2. Use your own Stable Diffusion Server.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "For the Wall",
        "link": "https://forthewall.art/",
        "description": "Create your own unique and personalized art prints with forthewall.art! Our AI-powered platform lets you generate stunning works of art from scratch. Order your one-of-a-kind print today and transform your blank walls into something special. Try it out now at forthewall.art!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Getimg.ai",
        "link": "https://getimg.ai/",
        "description": "Magical AI art tools. Generate original images, modify existing ones, expand pictures beyond its original borders, and more.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Green Screen AI",
        "link": "https://greenscreenai.com/",
        "description": "Green Screen AI is a fun & easy way to transform your pics into generative AI art.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "IllostrationAI",
        "link": "https://www.illostration.com/",
        "description": "Create AI-generated illustrations. In seconds.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Imaginator",
        "link": "https://imaginator.developer-service.io/",
        "description": "Imagine being able to see your thoughts come alive in front of you. No longer just a thought, an image now becomes the reality.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Imagine Me",
        "link": "https://imagineme.app/",
        "description": "Imagine Me is the first online platform that lets you generate stunning AI art of yourself, with just a simple line of text.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Imajinn AI Children's Book",
        "link": "https://imajinn.ai/",
        "description": "Visualization re-imajinned with fine-tuned AI. Generate profile pictures, product images, brands and styles limited only by your imagination!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "iwear.art",
        "link": "https://iwear.art/",
        "description": "create unique art with ai, and wear it on your apparel.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Kiri.art",
        "link": "https://kiri.art/",
        "description": "Diffusion Image Generation.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Krea",
        "link": "https://updates.krea.ai/",
        "description": "Introducing the AI Canvas, by Krea.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Leonardo",
        "link": "https://leonardo.ai/",
        "description": "Generate production quality assets for your creative projects with AI-driven speed and style-consistency.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Neuralcanvas",
        "link": "https://neuralcanvas.io/",
        "description": "Express your creativity with the support of AI - Create AI Generated Illustrations for your comics, blogposts, e-book, graphic novels and more.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "NightCafe",
        "link": "https://creator.nightcafe.studio/",
        "description": "AI Art Generator App. ✅ Fast ✅ Free ✅ Easy. Create amazing artworks using artificial intelligence.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Not Me Netlify",
        "link": "https://not-me.netlify.app/",
        "description": "Browse millions of styles or create your own, generate AI autoportraits.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "OddVibe",
        "link": "https://www.oddvibe.com/",
        "description": "Get your fix of creepy AI-generated images. But be warned, you may never sleep again.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Partly",
        "link": "https://www.partly.ai/",
        "description": "Transform your photos into works of art with the help of AI magic!.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Photosonic AI",
        "link": "https://photosonic.writesonic.com/",
        "description": "Transform your imagination into stunning digital art with Photosonic - the AI art generator. With its creative suggestions, this Writesonic's AI image generator can help unleash your inner artist and share your creations with the world.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "PirateDiffusion",
        "link": "https://scum.co/",
        "description": "get realistic HD images, more styles, no restrictions.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Pixian",
        "link": "https://pixian.ai/",
        "description": "Remove Image Backgrounds, Free HD, No Signup.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "playground",
        "link": "https://playgroundai.com/",
        "description": "playground ai is a free-to-use online ai image creator. use it to create art, social media posts, presentations, posters, videos, logos and more.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "postedby",
        "link": "https://postedby.ai/",
        "description": "postedby.ai allows users to create personalized postcards using advanced ai technology.",
        "free?": "❌",
        "category": "art and image generation"
    },
    {
        "name": "Quasi",
        "link": "https://quasi.market/",
        "description": "Unlock with the power of AI and easily create stunning content of all types with a simple-to-use platform.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Re.Art AI Image Generator",
        "link": "https://reart.devvinay.in/",
        "description": "This AI Image Generator Built using Stable Diffusion. To Keep This Service Alive You can support Developer.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Removal.ai",
        "link": "https://removal.ai/",
        "description": "Remove background online from image using background remover. Create transparent background - Download high-resolution instantly & free.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Remove.bg",
        "link": "https://www.remove.bg/",
        "description": "Remove image backgrounds automatically in 5 seconds with just one click. Don't spend hours manually picking pixels. Upload your photo now & see the magic.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Renderflux",
        "link": "https://www.renderflux.com/",
        "description": "Start creating beautiful art in seconds. Don't worry about the technical stuff, we've got you covered.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Roll Art Die",
        "link": "https://www.roll-art-die.com/",
        "description": "Generate AI Artworks using only text. Make your dream artworks into reality. No cloud subscription required.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "RunDiffusion",
        "link": "https://rundiffusion.com/",
        "description": "No code to fiddle with, nothing to install. Get a private Stable Diffusion workspace in very little time. Start creating AI Generated art in a little as 3 minutes.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Seek art",
        "link": "https://seek.art/",
        "description": "Explore, collect, and share. No cost to start. Free credits every day.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "Short Description Image Generator",
        "link": "https://textgeneratedimagegenerate.streamlit.app/",
        "description": "From a short description and based on the database from MagicPrompt-Stable-Diffusion from HuggingFace + the API of StableDiffusion; images can be created based on few words.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Simulai",
        "link": "https://www.simulai.co/",
        "description": "The highest quality machine generated art and stock photos. You provide an idea for your image, our machines work as hard as they can to create your picture.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "SlashDreamer",
        "link": "https://slashdreamer.com/",
        "description": "Integration Stable Diffusion in Notion to ai generate images with a new slash command.",
        "free?": "❌",
        "category": "art and image generation"
    },
    {
        "name": "Slazzer 3.0",
        "link": "https://www.slazzer.com/",
        "description": "Remove background from image automatically in 5 seconds. Don't waste time manually selecting pixels. Just upload photo & get instant cutout.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "SnapshotAI",
        "link": "https://snapshotai.com/",
        "description": "Create your own AI-generated images.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Snowpixel",
        "link": "https://snowpixel.app/",
        "description": "You + AI = Art. Get 20+ AI generated images for each prompt, upload existing images for even more on-brand illustrations, and animate them.",
        "free?": "❌",
        "category": "art and image generation"
    },
    {
        "name": "Soreal.AI Studio",
        "link": "https://www.soreal.ai/",
        "description": "Type anything you want to see. Get custom AI images in seconds.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "StableCog",
        "link": "https://stablecog.com/",
        "description": "Free, easy to use, multilingual and open-source AI image generator using Stable Diffusion.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "StarByFace",
        "link": "https://starbyface.com/",
        "description": "What celebrity do i look like? Try to find out! Celebrity look alike face-recognition system. Find your doppelganger.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Starryai",
        "link": "https://starryai.com/",
        "description": "Simply enter a prompt and our AI transforms your words into works of art.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Stylized",
        "link": "https://www.stylized.ai/",
        "description": "From phone to catalog in 30 seconds.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "TattosAI",
        "link": "https://www.tattoosai.com/",
        "description": "If you have an idea for a tattoo but can't find the right design, let our AI generate one within seconds. It lets you create the perfect design based on what you like, and it will give you unlimited options so that there's something for everyone.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Vizcom AI",
        "link": "https://www.vizcom.ai/",
        "description": "See your drawings and ideas come to life in seconds, not hours.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Zazow",
        "link": "https://www.zazow.com/",
        "description": "Create your own artwork by using computer generated algorithms. Learn about generative or algorithmic art.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "Zoomscape",
        "link": "https://zoomscape.ai/",
        "description": "Create stunning Zoom backgrounds with AI.",
        "free?": "❔",
        "category": "art and image generation"
    },
    {
        "name": "artssy",
        "link": "https://www.artssy.co/",
        "description": "With Artssy AI, your creativity can flow. Create unlimited images in 1 click and discover a world of possibilities!.",
        "free?": "❌",
        "category": "art and image generation"
    },
    {
        "name": "parti",
        "link": "https://github.com/google-research/parti",
        "description": "parti treats text-to-image generation as a sequence-to-sequence modeling problem, analogous to machine translation",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "muse",
        "link": "https://muse-model.github.io/",
        "description": "muse is a fast, state-of-the-art text-to-image generation and editing model.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "artbreeder",
        "link": "https://www.artbreeder.com/",
        "description": "make a simple collage from shapes and images, describe it with a prompt, and watch as artbreeder brings it to life.",
        "free?": "✅",
        "category": "art and image generation"
    },
    {
        "name": "adobe podcast",
        "link": "https://podcast.adobe.com/",
        "description": "an audio tool for people with stories to tell.",
        "free?": "❔",
        "category": "audio-editing"
    },
    {
        "name": "assemblyai",
        "link": "https://www.assemblyai.com/",
        "description": "automatically convert audio and video files and live audio streams to text with assemblyai's speech-to-text apis. do more with audio intelligence - summarization, content moderation, topic detection.",
        "free?": "❔",
        "category": "audio-editing"
    },
    {
        "name": "cleanvoice ai",
        "link": "https://cleanvoice.ai/",
        "description": "cleanvoice is an artificial intelligence which removes filler sounds, stuttering and mouth sounds from your podcast or audio recording.",
        "free?": "❔",
        "category": "audio-editing"
    },
    {
        "name": "clip audio",
        "link": "https://www.clip.audio/",
        "description": "the audio search engine.",
        "free?": "❔",
        "category": "audio-editing"
    },
    {
        "name": "krisp",
        "link": "https://krisp.ai/",
        "description": "krisp’s ai removes background voices, noises and echo from all your calls, giving you peace of mind.",
        "free?": "✅",
        "category": "audio-editing"
    },
    {
        "name": "phind",
        "link": "https://phind.com/",
        "description": ".",
        "free?": "✅",
        "category": "audio-editing"
    },
    {
        "name": "AI Profile Pictures",
        "link": "https://www.aiprofilepictures.com/",
        "description": "Now available in beta.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "AIVatar",
        "link": "https://aivatarapp.com/",
        "description": "Generate magic avatar art from your photos.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "AIprofilepic",
        "link": "https://aiprofilepic.art/",
        "description": "Create your perfect avatars in just a few clicks with our easy-to-use AI technology.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "ARTI.PICS",
        "link": "https://www.arti.pics/",
        "description": "Arti.Pics allows you to upload a few photos of yourself and generates more than 200 cool-looking avatars in different styles.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "Autoportrait",
        "link": "https://autoportrait.co/",
        "description": "Browse millions of styles or create your own, generate AI autoportraits.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "AvatarAI",
        "link": "https://avatarai.me/",
        "description": "Choose from 112+ different styles to transform into.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "Avatarize.club",
        "link": "https://avatarize.club/",
        "description": "Professional Photos, Social Media DPs, Game Avatars, Dating Profile Photos, and more powered by Stable Diffusion 2.1.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "DreamPic",
        "link": "https://dreampic.ai/",
        "description": "AI Generated Pictures Starring You.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "EpicAvatar",
        "link": "https://epic-avatar.com/",
        "description": "Make your own state-of-the-art AI avatar profile pictures.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "Face Swapper",
        "link": "https://faceswapper.ai/",
        "description": "Swap face from photos and videos automatically. Free and unlimited photo swapping.",
        "free?": "✅",
        "category": "avatars"
    },
    {
        "name": "HairstyleAI",
        "link": "https://www.hairstyleai.com/?via=beth0",
        "description": "Ready for a new look? Upload you photos and let artificial intelligence technology generate new hairstyles for you. Try it out today!.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "HeroPack",
        "link": "https://www.heropack.me/",
        "description": "Become a Hero with AI generated avatars inspired by your favorite video games.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "Magic AI Avatars",
        "link": "https://magicaiavatars.com/",
        "description": "Get 200+ custom avatars made by artificial intelligence.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "MagicPic",
        "link": "https://www.magicpic.ai/",
        "description": "Your profile picture is the first thing people see when they look at your profile. We use artificial intelligence to generate an magical avatars of you.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "PIXELVIBE",
        "link": "https://www.pixelvibe.com/",
        "description": "Create Presentations, Designs, Stock Photos, Instagram Promos, Product Photography, Vector Art, Animated Avatars.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "PhotoAI",
        "link": "https://photoai.me/",
        "description": "Create AI-generated images of yourself.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "PhotoLeaf",
        "link": "https://photoleaf.ai/",
        "description": "Create your AI-generated social media pictures.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "Photoshot",
        "link": "https://photoshot.app/",
        "description": "Generate avatars that perfectly capture your unique style.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "Pictureperfect",
        "link": "https://pictureperfect.ai/",
        "description": "Get creative and design your own personalized avatar with the help of AI technology. Simply upload a photo and our system will generate a unique avatar that represents you. Share your picture perfect avatar with friends and family on social media and let your creativity shine!.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "Posed",
        "link": "https://posed.ai/",
        "description": "Upload your pictures and let our AI create stunning high-quality portraits in a wide range of styles that look just like you.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "ProfilePicture.ai",
        "link": "https://www.profilepicture.ai/",
        "description": "The #1 AI Profile Picture Maker and Generator Your profile picture is the first thing people see when they look at your profile. We use artificial intelligence to generate an magical avatars of you that looks perfect and captures who you are. You can be anything or anyone!.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "ReflectMe",
        "link": "https://reflectme.art/",
        "description": "See yourself in a way you never have before! Generate your AI avatars, AI photos, AI photographies, profile pictures, LinkedIn professional profile photos, using artificial intelligence! Built on Stable Diffusion and Dreambooth.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "Stableboost",
        "link": "https://stableboost.ai/",
        "description": "Upload a few photos of yourself, a loved one, a pet, a product, or a style you like, and we will automatically train an AI model to generate portraits of you in hundreds of different styles.",
        "free?": "❌",
        "category": "avatars"
    },
    {
        "name": "Theoasis",
        "link": "https://theoasis.com/",
        "description": "Create a photorealistic avatar that you can use on every video platform.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "Tryitonai",
        "link": "https://www.tryitonai.com/",
        "description": "Get professional studio quality headshots generated in less than 24hrs! Perfect for LinkedIn, social, team and dating photos.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "xpression camera 2.0",
        "link": "https://xpressioncamera.com/",
        "description": "Become anyone on Zoom, Twitch, or any streaming video.",
        "free?": "❔",
        "category": "avatars"
    },
    {
        "name": "pixificial",
        "link": "https://www.pixificial.com/",
        "description": "create your ai avatars, ai profiles for free.",
        "free?": "✅",
        "category": "avatars"
    },
    {
        "name": "Askrobi",
        "link": "https://www.askrobi.com/",
        "description": "Robi is a powerful AI companion that lives in your contact list and can be talked to through WhatsApp, he can help you write an essay or generate original images!.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "BLOONY",
        "link": "https://bloony.ai/",
        "description": "Hop on ChatTrip!.",
        "free?": "❔",
        "category": "chatbot"
    },
    {
        "name": "BotGPT",
        "link": "https://t.me/BotGPT_bot",
        "description": "Telegram bot that allows fast and intuitive access to GPT, Saves your history, and available from your phone or desktop. Cool features upcoming.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "Chai",
        "link": "https://chai.ml/",
        "description": "Chai is THE destination for compelling conversations with AI. On Chai, you can build and deploy AI chatbots to thousands of users.",
        "free?": "❔",
        "category": "chatbot"
    },
    {
        "name": "ChatGPT",
        "link": "https://chat.openai.com/",
        "description": ".",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "HUMATA",
        "link": "https://www.humata.ai/",
        "description": "Learn 100X Faster, Create Reports 100X Faster, Analyze Legal Documents 100X Faster, Understand Technical Papers 100X Faster. Ask Questions & Get Answers About Any File Instantly.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "Keepi",
        "link": "https://www.keepi.ai/",
        "description": "Access the most advanced AI available today on the go. Keepi will keep you smart and ready with relevant knowledge.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "NOLU",
        "link": "https://noluai.com/",
        "description": "Meet NOLU. A simple interface for interacting with the Open AI GPT-3 engine.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "Vacay",
        "link": "https://usevacay.com/chatbot",
        "description": "This AI-Assistant can design a custom trip, give you inspiration on where to go, and even generate local recommendations for hotels, restaurants, and attractions.",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "ChefGPT",
        "link": "https://www.chefgpt.xyz/",
        "description": "Say goodbye to boring meals, with AI-powered, recipe recommendations, meal plans creation and more...",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "MindMeld",
        "link": "https://www.mindmeld.com/",
        "description": "Conversational AI platform for deep-domain voice interfaces and chatbots",
        "free?": "✅",
        "category": "chatbot"
    },
    {
        "name": "AI Docstrings",
        "link": "https://trelent.com/",
        "description": "Trelent uses AI to write helpful docstrings for your functions instantly.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "Adrenaline",
        "link": "https://useadrenaline.com/",
        "description": "Adrenaline is a debugging assistant powered by the OpenAI Codex. It can fix and explain your broken code in seconds.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "Ask Command",
        "link": "https://askcommand.com/",
        "description": "A tiny app to remind you about those commands you always forget. Powered by AI.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Channel",
        "link": "https://www.usechannel.com/",
        "description": "Connect your database, ask a question, get an answer.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "CodeAssist",
        "link": "https://plugins.jetbrains.com/plugin/20085-codeassist",
        "description": "It generates, changes, completes the code and answers questions.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "CodeGPT",
        "link": "https://www.codegpt.co/",
        "description": "Improve your code with Code GPT AI.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "CodeWP",
        "link": "https://codewp.ai/?cwpref=9",
        "description": "CodeWP is a WordPress code generator that uses AI and specialized models for WordPress, Woo and others to help you build better & quicker.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "Codeball",
        "link": "https://codeball.ai/",
        "description": "Codeball finds bugs in your Pull Requests, lets you ship faster and with higher confidence.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Codecleaningbot",
        "link": "https://www.codecleaningbot.com/",
        "description": "Code Cleaning AI Bot fixes common code quality and security issues. Like: deleting unused and unreachable code, fix SQL injection, etc.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Codeium",
        "link": "https://www.codeium.com/",
        "description": "Fast AI-based code acceleration and free alternative to GitHub Copilot.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "Datamaker",
        "link": "https://www.datamaker.dev/",
        "description": "If you are a Webflow Designer or Webflow Developer then you need to see these tools. Use AI to create code and copy to solve your Webflow problems.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Decile",
        "link": "https://decile.app/",
        "description": "Build a data-led organisation with the power of AI.",
        "free?": "❌",
        "category": "code assistant"
    },
    {
        "name": "Explain An Error",
        "link": "https://explain.whybug.com/",
        "description": "Let AI explain to you why your code is buggy and how to fix it.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "ExplainDev",
        "link": "https://explain.dev/",
        "description": "ExplainDev helps you to be more confident and independent with others' code. Get code explanations and direct answers to your questions via Chrome and VS Code extensions powered by AI.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Ghostwriter",
        "link": "https://replit.com/",
        "description": "Run code live in your browser. Write and run code in 50+ languages online with Replit, a powerful IDE, compiler, & interpreter.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "GitHub Copilot",
        "link": "https://github.com/features/copilot",
        "description": "GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Mutable.ai",
        "link": "https://mutable.ai/",
        "description": "Build fast with production quality using AI.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Programminghelper",
        "link": "https://www.programming-helper.com/",
        "description": "Generate code with AI just by typing a text description. AI will create the code for you. A tool that helps you with a wide range of tasks. All in one place.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "QueryGenie",
        "link": "https://sqlgenie-co.web.app/",
        "description": "Generate database queries from plain-english description using AI.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "TLDR - Jetbrains IDE Plugin",
        "link": "https://tldrdev.ai/",
        "description": "TLDR is an IDE plugin that leverages AI to explain code in plain english.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Tabnine",
        "link": "https://www.tabnine.com/",
        "description": "Whether you're part of a team, or a developer working on your own, Tabnine will help you write code faster – all in your favorite IDE.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "Whatthediff",
        "link": "https://whatthediff.ai/",
        "description": "The AI powered GitHub app that explains the changes within your pull requests in plain english.",
        "free?": "❔",
        "category": "code assistant"
    },
    {
        "name": "aidev.codes",
        "link": "https://aidev.codes/",
        "description": "Create simple apps and demos just by entering specifications — a new type of AI prompt engineering.",
        "free?": "✅",
        "category": "code assistant"
    },
    {
        "name": "ArticleForge",
        "link": "https://www.articleforge.com/?ref=e99368",
        "description": "Using advanced artificial intelligence and deep learning, Article Forge writes completely unique, SEO optimized, high-quality, long form articles with the click of a button.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Content brief generator",
        "link": "https://www.dashword.com/?via=beth0",
        "description": "Dashword is the #1 content optimization software for SEO teams. Create relevant content for your readers and grow your organic traffic.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Contentedge",
        "link": "https://www.contentedge.com/",
        "description": "Skip the creative burnout and generate high-ranking content in as little as 15 seconds.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "CopyMonkey",
        "link": "https://copymonkey.ai/",
        "description": "CopyMonkey generates and optimizes Amazon listings in seconds. AI helps place all of the important keywords in your Amazon listing to get you ranking organically on the first page.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Creator AI",
        "link": "https://www.creaitor.ai/?ref=beth0",
        "description": "Creaitor will help you write content in a more powerful, emotionally expressive way.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Ctrify",
        "link": "https://www.ctrify.com/",
        "description": "Create websites that rank on Google by just giving one keyword to our Artificial Intelligence.",
        "free?": "❔",
        "category": "content and seo"
    },
    {
        "name": "Embolden",
        "link": "https://embolden.co/",
        "description": "Embolden uses AI to help you write everything from emails to product descriptions for your ecommerce business.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Enwrite",
        "link": "https://enwrite.co/",
        "description": "An AI helper specialized in SEO-optimized content creation. Enwrite helps you write better content faster.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Frase.io (first month - 60% discount)",
        "link": "https://www.frase.io/?via=beth0",
        "description": "Frase AI helps you research, write, and optimize high-quality SEO content in minutes instead of hours.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "H-supertools AI Writer",
        "link": "https://h-supertools.com/ai/ai-writer",
        "description": "Generate Blog Sections & Paragraphs in Seconds With This Powerful Free AI Writer.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Hypotenuse.ai",
        "link": "https://www.hypotenuse.ai/",
        "description": "Provide a few keywords, and we'll instantly turn them into full-length articles and marketing content, using our world-class AI with a vast knowledge of the world.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Intelligent paraphraser",
        "link": "https://aiseo.ai/?fpr=beth0",
        "description": "Get writing superpowers with artificial intelligence. We at AISEO will help you convert your thoughts to blogs and can write for you at the click of a button.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Jasper.ai",
        "link": "https://www.jasper.ai/",
        "description": "Jasper is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Kafkai",
        "link": "https://kafkai.com/",
        "description": "Kafkai is an AI Writer Assistant that helps you create unique SEO-friendly articles for cents instead of dollars.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Katteb",
        "link": "https://katteb.com/",
        "description": "Katteb AI makes it fast & easy to create content for your blog and online store.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "LAIKA",
        "link": "https://www.writewithlaika.com/",
        "description": "We make the boring parts of writing exciting. LAIKA is a creative partner that you train to write like you (or anyone you want). Made for creative writers, game writers, and all other fiction fabricators.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Lek",
        "link": "https://lek.ai/",
        "description": "Write Anything For Everything. The fastest and easiest way to create content and copy.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "LongShot AI",
        "link": "https://www.longshot.ai/?deal=beth0",
        "description": "LongShot is an AI writing assistant that helps you go from idea to SEO content in minutes. Use creative power of AI with features like real time content, fact check, semantic SEO, custom AI, & more!.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Neuraltext",
        "link": "https://neuraltext.com/?via=beth0",
        "description": "Automate your content operations. The all-in-one content marketing and SEO platform that saves you time and money.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Quattr",
        "link": "https://www.quattr.com/",
        "description": "The enterprise SEO platform built with powerful AI and GSC data as the foundation.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Summari",
        "link": "https://www.summari.com/",
        "description": "Upgrade links into short, informative previews using our world-class AI summarization technology.",
        "free?": "❔",
        "category": "content and seo"
    },
    {
        "name": "Taskade",
        "link": "https://www.taskade.com/?via=beth0",
        "description": "Taskade is the first collaborative AI writer and outliner for teams with built-in task management and video chat. Create mind maps, task lists, and take structured notes in real-time with your team.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Typli",
        "link": "https://typli.ai/",
        "description": "The most intuitive A.I Content tool which combines AI Writing and an SEO Assistant.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Wizishop",
        "link": "https://wizishop.com/",
        "description": "WiziShop makes SEO-powered ecommerce easier than ever before, bringing success within reach. Artificial Intelligence at the service of your ecommerce business!.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "WordAI",
        "link": "https://wordai.com/?ref=470a83",
        "description": "Use artificial intelligence to cut turnaround time, extend your budget, and create more high-quality content that Google and readers will love.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "WordHero",
        "link": "https://wordhero.co/?via=beth0",
        "description": "With WordHero's AI technology, you can create original blog posts, social media content, emails, and more - in just seconds.",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Wordkraft",
        "link": "https://wordkraft.ai/",
        "description": "Wordkraft AI content writer is a revolutionary tool Powered by GPT-3 the most advance artificial intelligence technology to generate well-written, keyword-optimized content for your blog, website or marketing needs.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Wordplay",
        "link": "https://wordplay.ai/",
        "description": "The #1 AI content generator built for SEO & content publishers.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Writesonic",
        "link": "https://writesonic.com/",
        "description": "Create SEO-optimized and plagiarism-free contentfor your blogs, ads, emails, and website 10X faster.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Writey AI",
        "link": "https://writey.ai/",
        "description": "First true free plagiarism A.I with original and researched content, check Writey A.I in action.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "unbound",
        "link": "https://www.unboundcontent.ai/auth?affiliate=aff_z0krz31",
        "description": "Leverage all the best AI generation tools in one place designed to automate content creation for small business, online shops and creators.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "vlog2blog",
        "link": "https://vlog2blog.uwu.ai/?ref=beth0",
        "description": "Boost your SEO and brand presence.",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "anyword",
        "link": "https://anyword.com/",
        "description": "copywriting ai with predictable results",
        "free?": "❌",
        "category": "content and seo"
    },
    {
        "name": "Copysmith",
        "link": "https://copysmith.ai/",
        "description": "Copysmith’s AI content generator makes product description writing fast, easy and fun – are you ready for your mind to be blown?",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "jounce",
        "link": "https://www.jounce.ai/",
        "description": "Free AI-powered copywriting and artwork for marketers",
        "free?": "✅",
        "category": "content and seo"
    },
    {
        "name": "Clipdrop",
        "link": "https://clipdrop.co/",
        "description": "The ultimate ecosystem of apps, plugins & resources for all creators, powered by artificial intelligence.",
        "free?": "✅",
        "category": "creators-toolkit"
    },
    {
        "name": "Cutout Pro",
        "link": "https://www.cutout.pro/",
        "description": "All-in-one visual design platform containing AI photo and video editing tools. Automatic process for background remove, image restoration, graphic design, and content generation.",
        "free?": "❔",
        "category": "creators-toolkit"
    },
    {
        "name": "Fermat",
        "link": "https://fermat.ws/",
        "description": "Unleash your creativity with AI on a collaborative canvas.",
        "free?": "❔",
        "category": "creators-toolkit"
    },
    {
        "name": "Hotpot",
        "link": "https://hotpot.ai/",
        "description": "Hotpot.ai helps you create amazing graphics, pictures, and text. AI tools like AI Art Generator spark creativity and automate drudgery while easy-to-edit templates empower anyone to create device mockups, social media posts, marketing images, app icons, and other work graphics.",
        "free?": "❔",
        "category": "creators-toolkit"
    },
    {
        "name": "Lightricks",
        "link": "https://www.lightricks.com/",
        "description": "Experience the magic of creating with the best tools and services for creators: Facetune 2, Videoleap, Linkinbio & Photoleap. Check it out now!.",
        "free?": "❔",
        "category": "creators-toolkit"
    },
    {
        "name": "Media.io",
        "link": "https://www.media.io/?ref=beth0",
        "description": "Simplicity. Diversity. Flexibility.",
        "free?": "✅",
        "category": "creators-toolkit"
    },
    {
        "name": "Runway",
        "link": "https://runwayml.com/",
        "description": "Discover advanced video editing capabilities to take your creations to the next level.",
        "free?": "✅",
        "category": "creators-toolkit"
    },
    {
        "name": "AI Answers by Cohere",
        "link": "https://cohere.io/",
        "description": "AI-powered support assistance that finds answers from previous tickets.",
        "free?": "❔",
        "category": "customer support"
    },
    {
        "name": "Bahasa",
        "link": "https://www.bahasa.ai/",
        "description": "Automation that helps your business serves millions of happy customers fastlyâ��powered by AI specially built for Bahasa Indonesia.",
        "free?": "❔",
        "category": "customer support"
    },
    {
        "name": "EddyAI",
        "link": "https://eddyai.com/",
        "description": "Increase Sales and Reduce Support Costs.",
        "free?": "✅",
        "category": "customer support"
    },
    {
        "name": "ResolveAI",
        "link": "https://resolveai.co/",
        "description": "Our AI chatbots are designed to understand customer issues and provide tailored, accurate responses in real-time.",
        "free?": "❔",
        "category": "customer support"
    },
    {
        "name": "Botta",
        "link": "https://askbotta.com/",
        "description": "Your free, personal teaching assistant. Ask questions, get answers. Botta makes online learning a breeze.",
        "free?": "✅",
        "category": "education and learning"
    },
    {
        "name": "Lorro",
        "link": "https://lorro.io/",
        "description": ".",
        "free?": "❌",
        "category": "education and learning"
    },
    {
        "name": "Replicate",
        "link": "https://replicate.com/",
        "description": "Run open-source models with a cloud API.",
        "free?": "✅",
        "category": "education and learning"
    },
    {
        "name": "Speakingclubai",
        "link": "https://speakingclubai.com/",
        "description": "Welcome to Speaking Club AI - the ultimate language learning tool for anyone looking to improve their speaking skills in a foreign language. With Speaking Club AI, you can practice    your conversation skills with a personalized AI language partner anytime, anywhere.",
        "free?": "❔",
        "category": "education and learning"
    },
    {
        "name": "seamless",
        "link": "https://www.seamless.ai/",
        "description": "connect directly with ideal customers so you can build pipeline, shorten your sales cycle, and close more deals.",
        "free?": "❔",
        "category": "education and learning"
    },
    {
        "name": "DraftLab",
        "link": "https://draftlab.ai/",
        "description": "Fight writer's block and achieve inbox zero. DraftLab is an AI-powered Gmail copilot that generates high-quality email replies for you.",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "Ellie",
        "link": "https://ellieai.com/",
        "description": "Ellie learns from your writing style and crafts replies as if they were written by you.",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "EmailTriager",
        "link": "https://emailtriager.com/",
        "description": "At EmailTriager, we build products that do work on your behalf.",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "Intellimail",
        "link": "https://www.intellimail.xyz/",
        "description": "IntelliMail is a chrome extension that generates your emails - so you'll never have to write one again.",
        "free?": "✅",
        "category": "email assistant"
    },
    {
        "name": "Quicklines",
        "link": "https://www.quicklines.ai/",
        "description": "Quicklines is your new AI powered cold outreach assistant. We help you scale your cold email campaigns with our in-depth social scraping and natural language first-line writing platform.",
        "free?": "❌",
        "category": "email assistant"
    },
    {
        "name": "Rapidreply",
        "link": "https://rapidreply.ai/",
        "description": "Save 30 minutes a day writing emails.",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "Recruiting Emails AI by Dover",
        "link": "https://recruitingemails.ai/",
        "description": ".",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "Remail",
        "link": "https://remail.ai/",
        "description": "Remail is a Chrome extension for gmail that uses artificial intelligence to draft high quality email replies in seconds.",
        "free?": "✅",
        "category": "email assistant"
    },
    {
        "name": "Smartwriter",
        "link": "https://www.smartwriter.ai/?via=beth0",
        "description": "Never waste time researching or writing 'personalised' emails again. Automate your entire outreach process. 40x faster and 6x cheaper than humans.",
        "free?": "✅",
        "category": "email assistant"
    },
    {
        "name": "Warmer.Ai",
        "link": "https://warmer.ai/",
        "description": "Warmer uses AI email personalization to write your email outreach. Increase replies, meetings and sales with dynamic personalization.",
        "free?": "❔",
        "category": "email assistant"
    },
    {
        "name": "superReply",
        "link": "https://superreply.co/",
        "description": "The Email Response Hack You've Been Waiting For - Easily send effective replies with tailored responses without writing from scratch.",
        "free?": "✅",
        "category": "email assistant"
    },
    {
        "name": "lavender",
        "link": "https://www.lavender.ai/",
        "description": "lavender email assistent helps you get more replies in less time.",
        "free?": "✅",
        "category": "email assistant"
    },
    {
        "name": "FashionAdvisorAI",
        "link": "https://www.fashionadvisorai.com/",
        "description": "Fashionadvisor.Ai - Ask Questions & Get Answer'S From Fashionadvisor.Ai.",
        "free?": "❔",
        "category": "fashion"
    },
    {
        "name": "Visualhound",
        "link": "https://www.fashionadvisorai.com/",
        "description": "Visualize your product designs before going to production. Create realistic-looking product images to feed your moodboards and boost your design process.",
        "free?": "❔",
        "category": "fashion"
    },
    {
        "name": "AI Pokemon generator",
        "link": "https://nokemon.eloie.tech/",
        "description": ".",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "Ask RBG",
        "link": "https://ask-rbg.ai/",
        "description": "An AI experiment: Ask Justice Ruth Bader Ginsburg to make a decision about any question your heart desires. The first AI Drop from AI21 Labs.",
        "free?": "✅",
        "category": "fun"
    },
    {
        "name": "Askmybook",
        "link": "https://askmybook.com/",
        "description": "This is an experiment in using AI to make my book's content more accessible. Ask a question and AI'll answer it in real-time:.",
        "free?": "✅",
        "category": "fun"
    },
    {
        "name": "Botify",
        "link": "https://botif.ai/",
        "description": "Fun chat with your favorite characters.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "CharacterAI",
        "link": "https://beta.character.ai/",
        "description": "Characters can be anything. Our breakthrough AI technology can bring all of your ideas to life.",
        "free?": "✅",
        "category": "fun"
    },
    {
        "name": "Excuses AI",
        "link": "https://excuses.ai/",
        "description": "Use AI to generate the perfect professional excuse.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "Jokelub",
        "link": "https://jokelub.com/",
        "description": "Bring humor everywhere.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "Kanye Tweet Generator",
        "link": "https://www.kanyegenerator.com/",
        "description": "Generate Kanye Tweets using AI. Built by Ryan Doyle.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "Podcast.ai",
        "link": "https://podcast.ai/",
        "description": "Welcome to podcast.ai, a podcast that is entirely generated by artificial intelligence. Every week, we explore a new topic in depth, and listeners can suggest topics or even guests and hosts for future episodes.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "Silly Times",
        "link": "https://www.elbo.ai/",
        "description": "Have a fun time drawing and see what silly thing we make from your drawing.  Magic is just button press away!.",
        "free?": "✅",
        "category": "fun"
    },
    {
        "name": "StoriesForKids",
        "link": "https://www.storiesforkids.ai/",
        "description": "Turn real-life situations into fun stories & illustrations in seconds.",
        "free?": "❔",
        "category": "fun"
    },
    {
        "name": "IRMO",
        "link": "https://www.irmoai.com/",
        "description": "Your Source for Mobile Entertainment & AI Art Creation.",
        "free?": "✅",
        "category": "gaming"
    },
    {
        "name": "Plailabs",
        "link": "https://plailabs.com/",
        "description": "(verb) – To engage in artificial intelligence for the purpose of enjoyment and recreation with the goal of growing an ever-expanding universe of gaming, entertainment, storytelling, and technology.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "Scenario",
        "link": "https://www.scenario.gg/",
        "description": "Unlock the power of AI-generated gaming assets with Scenario. Generate engaging content quickly and easily to save time and spark creativity.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "charisma",
        "link": "https://charisma.ai/",
        "description": "For Games • Metaverses • VR • Education • TV & Film • Publishing and beyond!.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "hidden door",
        "link": "https://www.hiddendoor.co/",
        "description": "A new kind of social roleplaying experience, powered by narrative AI.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "latitude",
        "link": "https://latitude.io/",
        "description": "We're making AI a tool of creativity and freedom for everyone.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "texturelab",
        "link": "https://www.texturelab.xyz/",
        "description": "generate 3d textures for your game in seconds thanks to ai.",
        "free?": "❔",
        "category": "gaming"
    },
    {
        "name": "AI Holiday Cards",
        "link": "https://aiholiday.cards/",
        "description": "AI engine to create AI Holiday photorealistic Cards for couples.",
        "free?": "❔",
        "category": "gift ideas"
    },
    {
        "name": "AIchristmascards",
        "link": "https://aichristmascards.com/",
        "description": "Personalized AI Art Greetings Cards.",
        "free?": "❌",
        "category": "gift ideas"
    },
    {
        "name": "Elf Help",
        "link": "https://www.elfhelp.ai/",
        "description": "Need some inspo for your holiday gifting? Elf help is your ultimate gift-giving assistant, offering creative and personalized suggestions for everyone on your list.",
        "free?": "❔",
        "category": "gift ideas"
    },
    {
        "name": "Fabled",
        "link": "https://fabled.ai/",
        "description": "Stories created by you, powered by AI. With a single sentence fabled.ai crafts personal illustrated stories, enriched by stunning images.",
        "free?": "✅",
        "category": "gift ideas"
    },
    {
        "name": "Gift Genie",
        "link": "https://www.giftgenie.ai/",
        "description": "Gift Genie AI is an AI-powered that allows you to find the perfect gift in seconds with AI for free. Jot down a brief description of your recipient, and get a list of gifts our AI genie believes will delight them.",
        "free?": "✅",
        "category": "gift ideas"
    },
    {
        "name": "GiftBot",
        "link": "https://www.getgift.help/",
        "description": "Struggling to figure out what to get someone for the holidays? GiftBot asks you questions to help recommend gift ideas!.",
        "free?": "✅",
        "category": "gift ideas"
    },
    {
        "name": "GiftWizard",
        "link": "https://www.giftwizard.ai/",
        "description": "GiftWizard is your friendly helper from the future, here to guide you through getting the most magical gift.",
        "free?": "✅",
        "category": "gift ideas"
    },
    {
        "name": "Giftastic AI",
        "link": "https://giftastic.ai/",
        "description": "Personalised gift ideas for every occasion!.",
        "free?": "❔",
        "category": "gift ideas"
    },
    {
        "name": "Lovelines",
        "link": "https://lovelines.xyz/?ref=ai-collection",
        "description": "Create custom keepsakes for a loved one using AI that are optimized for social media. AI-generated poems, stories, letters, and song lyrics.",
        "free?": "❌",
        "category": "gift ideas"
    },
    {
        "name": "Text2present",
        "link": "https://text2present.com/",
        "description": "Allows you to create creative customized presents using artificial intelligence for your friends, family and acquaintances without taking your precious time. Simply enter a text description of what you want to gift and let our artificial intelligence do the rest.",
        "free?": "❔",
        "category": "gift ideas"
    },
    {
        "name": "Replika",
        "link": "https://replika.com/",
        "description": "Always here to listen and talk. Always on your side. Join the millions growing with their AI friends now!.",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "Ubie AI Symptom Checker",
        "link": "https://ubiehealth.com/",
        "description": "Check Symptoms & Find Causes by AI - Answer quiz about your symptoms to find out possible causes, types, severity, and treatment for free by AI. Developed by doctors.",
        "free?": "✅",
        "category": "healthcare"
    },
    {
        "name": "ada",
        "link": "https://ada.com/",
        "description": "supporting better health outcomes and clinical excellence with intelligent technology.",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "tess by x2ai",
        "link": "https://www.x2ai.com/",
        "description": "affordable mental health access with proven results",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "slepp ai",
        "link": "https://sleep.ai/",
        "description": "diagnose snoring and tooth grinding with your phone.",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "aerial",
        "link": "https://aerial.ai/",
        "description": "home activity, movement and identity sensor",
        "free?": "❌",
        "category": "healthcare"
    },
    {
        "name": "nanit",
        "link": "https://www.nanit.com/",
        "description": "baby monitor that measures sleep and caregiver interactions",
        "free?": "❌",
        "category": "healthcare"
    },
    {
        "name": "Sleep.ai",
        "link": "https://sleep.ai/",
        "description": "Do I Snore or Grind, Diagnose snoring and tooth grinding with your phone. Our Anti-Snore Wearable helps you to stop snoring.",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "Qure.ai",
        "link": "https://qure.ai/",
        "description": "Qure.ai taps deep learning technology to provide automated interpretation of radiology exams like X-rays, CTs and Ultrasounds scans for time and resource-strapped medical imaging professionals—enabling faster diagnosis and speed to treatment.",
        "free?": "❔",
        "category": "healthcare"
    },
    {
        "name": "Hire Hoc",
        "link": "https://hirehoc.com/",
        "description": "Transform Your Organization with the Power of AI-Assisted Recruiting.",
        "free?": "❔",
        "category": "hr and resume"
    },
    {
        "name": "HireYaY",
        "link": "https://hireyay.com/",
        "description": "92% of job seekers do not finish their online application. With HireYaY, you will never miss a qualified candidate again.",
        "free?": "❔",
        "category": "hr and resume"
    },
    {
        "name": "Hirex.ai",
        "link": "https://www.hirex.ai/",
        "description": "Welcome to hirex.ai, a no-code AI platform to build voice-based bots that conduct and score interviews at scale. Get the complete suite of assessments tools like coding interviews, MCQ tests, hackathons, video interviews, and WhatsApp chatbots all under single dashboard.",
        "free?": "❔",
        "category": "hr and resume"
    },
    {
        "name": "JD Generator",
        "link": "https://hirequotient.com/",
        "description": "HireQuotient's Skill Assessment Platform helps you hire the top 10% of the talent pool in half the time.",
        "free?": "❔",
        "category": "hr and resume"
    },
    {
        "name": "LazyApply",
        "link": "https://lazyapply.com/",
        "description": "We automatically apply to all the jobs on platforms like Linkedin, Indeed and Ziprecruiter.",
        "free?": "❌",
        "category": "hr and resume"
    },
    {
        "name": "Resume Worded",
        "link": "https://resumeworded.com/",
        "description": "Designed by top recruiters, our AI-powered platform instantly gives you tailored feedback on your resume and LinkedIn profile. Land 5x more interviews, opportunities and job offers.",
        "free?": "✅",
        "category": "hr and resume"
    },
    {
        "name": "rankode",
        "link": "https://www.rankode.ai/",
        "description": "Recruiters, everything you need to know about a candidate's programming skills is in their GitHub. Evaluate them automatically with Rankode to avoid expensive hiring mistakes and superboost your retention.",
        "free?": "❔",
        "category": "hr and resume"
    },
    {
        "name": "springworks",
        "link": "https://www.springworks.in/",
        "description": "Springworks builds human resources software solutions to solve challenges in recruitment, background verification & employee engagement with Blockchain and AI.",
        "free?": "✅",
        "category": "hr and resume"
    },
    {
        "name": "DoNotPay",
        "link": "https://donotpay.com/",
        "description": "Use AI to make legal information accessible to everyone.",
        "free?": "❔",
        "category": "legal"
    },
    {
        "name": "Paralegal AI",
        "link": "https://www.legalquestions.help/",
        "description": "AI Powered Legal Research and Summaries.",
        "free?": "✅",
        "category": "legal"
    },
    {
        "name": "PatentPal",
        "link": "https://patentpal.com/",
        "description": "Automate mechanical writing in your patent applications.",
        "free?": "✅",
        "category": "legal"
    },
    {
        "name": "Spellbook",
        "link": "https://www.spellbook.legal/",
        "description": "Spellbook uses GPT-3 to review and suggest language for your contracts, right in Microsoft Word.",
        "free?": "❔",
        "category": "legal"
    },
    {
        "name": "AI Lawyer",
        "link": "https://ailawyer.pro/",
        "description": "Personal AI lawyer at your fingertips",
        "free?": "❌",
        "category": "legal"
    },
    {
        "name": "Logo Rank",
        "link": "https://brandmark.io/",
        "description": ".",
        "free?": "❔",
        "category": "logo generator"
    },
    {
        "name": "Looka",
        "link": "https://looka.grsm.io/jscfk35v34tn",
        "description": "Make a logo and build a brand you love with Looka.",
        "free?": "✅",
        "category": "logo generator"
    },
    {
        "name": "Make Logo AI",
        "link": "https://makelogo.ai/",
        "description": "Generate beautiful and unique logos for your startup, powered by Artifical Intelligence.",
        "free?": "❌",
        "category": "logo generator"
    },
    {
        "name": "Text To Book Cover",
        "link": "https://stockimg.ai/",
        "description": "AI image generation for teams - You can easily generate AI logo, AI book covers, AI posters and more - Stockimg AI.",
        "free?": "❔",
        "category": "logo generator"
    },
    {
        "name": "Adobe Podcast",
        "link": "https://podcast.adobe.com/",
        "description": "An audio tool for people with stories to tell.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Assemblyai",
        "link": "https://www.assemblyai.com/",
        "description": "Automatically convert audio and video files and live audio streams to text with AssemblyAI's Speech-to-Text APIs. Do more with Audio Intelligence - summarization, content moderation, topic detection.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Cleanvoice AI",
        "link": "https://cleanvoice.ai/",
        "description": "Cleanvoice is an artificial intelligence which removes filler sounds, stuttering and mouth sounds from your podcast or audio recording.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Clip audio",
        "link": "https://www.clip.audio/",
        "description": "The audio search engine.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Emergent Drums",
        "link": "https://audialab.com/?ref=beth0",
        "description": "Use our breakthrough plugin to generate endless drum samples, all royalty-free.",
        "free?": "❌",
        "category": "audio & music"
    },
    {
        "name": "Krisp",
        "link": "https://krisp.ai/",
        "description": "Krisp's AI removes background voices, noises and echo from all your calls, giving you peace of mind.",
        "free?": "✅",
        "category": "audio & music"
    },
    {
        "name": "LALAL.AI Voice Cleaner",
        "link": "https://www.lalal.ai/?fp_ref=beth0",
        "description": "High-quality stem splitting based on the world's #1 AI-powered technology.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Musico",
        "link": "https://www.musi-co.com/",
        "description": "Musico is an AI-driven software engine that generates music. It can react to gesture, movement, code or other sound.",
        "free?": "❔",
        "category": "audio & music"
    },
    {
        "name": "Quasi Music",
        "link": "https://quasi.market/radio/",
        "description": "Unleash your inner musician with Quasi's AI-powered music creation tool. Create never-before-heard sounds and remix classic artists with ease.",
        "free?": "✅",
        "category": "audio & music"
    },
    {
        "name": "Riffusion",
        "link": "https://www.riffusion.com/",
        "description": "Stable diffusion for real-time music generation.",
        "free?": "✅",
        "category": "audio & music"
    },
    {
        "name": "Soundraw",
        "link": "https://soundraw.io/",
        "description": "Royalty-free music, AI generated for you.",
        "free?": "✅",
        "category": "audio & music"
    },
    {
        "name": "Descript",
        "link": "https://www.descript.com/",
        "description": "Descript is the only tool you need to write, record, transcribe, edit, collaborate, and share your videos and podcasts.",
        "free?": "✅",
        "category": "audio & music"
    },
    {
        "name": "BuildAI",
        "link": "https://www.buildai.space/",
        "description": "Enter the description of an app that outputs text based on user text input, and we will BUILD IT FOR YOU!.",
        "free?": "❔",
        "category": "build, organise, automate"
    },
    {
        "name": "Hexowatch",
        "link": "https://hexact.pxf.io/beth0",
        "description": "Hexowatch is your AI sidekick to monitor any website for visual, content, source code, technology, availability, or price changes.",
        "free?": "❌",
        "category": "build, organise, automate"
    },
    {
        "name": "KUBIYA",
        "link": "https://kubiya.ai/",
        "description": "Provide developers secure, self-serve access to operational workflows, cloud resources and organizational knowledge with conversational AI.",
        "free?": "❔",
        "category": "build, organise, automate"
    },
    {
        "name": "Product Launch AI",
        "link": "https://shapenship.com/productlaunchai",
        "description": "Blast off to a great launch without worrying about launch copy!.",
        "free?": "❔",
        "category": "build, organise, automate"
    },
    {
        "name": "bardeen",
        "link": "https://www.bardeen.ai/ai",
        "description": "Coming in 2023 – Bardeen is introducing breakthrough AI to automate manual workflows, save you time, and empower your creativity.",
        "free?": "❔",
        "category": "build, organise, automate"
    },
    {
        "name": "mem",
        "link": "https://get.mem.ai/",
        "description": "Mem is the world's first AI-powered workspace that's personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.",
        "free?": "✅",
        "category": "build, organise, automate"
    },
    {
        "name": "Evidently AI",
        "link": "https://www.evidentlyai.com/",
        "description": "We build tools to evaluate, test and monitor machine learning models, so you don't have to.",
        "free?": "✅",
        "category": "build, organise, automate"
    },
    {
        "name": "Kaiber",
        "link": "https://www.kaiber.ai/",
        "description": "Transform your ideas into the visual stories of your dreams with our state-of-the-art AI generation engine.",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "Claid.ai",
        "link": "https://claid.ai/",
        "description": "AI software to enlarge images with no quality loss, correct colors, increase resolution, retouch product photos and edit UGC automatically.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "ExtendImage",
        "link": "https://www.extendimage.ai/",
        "description": "ExtendImageAI is a tool that allows you to extend your images with generative AI.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Hama",
        "link": "https://www.hama.app/",
        "description": "Amazing photo eraser.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Random Face Generator",
        "link": "https://adityar224.github.io/Random-Face-Generator/#/",
        "description": "Generate face",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "ImgCreator",
        "link": "https://www.imgcreator.ai/",
        "description": "Creating images with text. Generate text-based images to help you think and create",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "Imgupscaler",
        "link": "https://imgupscaler.com/",
        "description": "Upscale and enhance your image by using the latest AI technology.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Magic Eraser",
        "link": "https://magicstudio.com/",
        "description": "Magic Studio helps you automatically edit and create images, using AI.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Palette",
        "link": "https://palette.fm/",
        "description": "A new AI colorizer. Colorize anything from old black and white photos ð��¸, style your artworks ð��¨, or give modern images a fresh look ð��¶. It's as simple as instagram.",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "ImageColorizer",
        "link": "https://imagecolorizer.com/",
        "description": "We use AI technology to restore old photos automatically",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "SceneryAI",
        "link": "https://sceneryai.com/",
        "description": "Generate or update existing images with our AI image editing tool.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Stillgram",
        "link": "https://stillgram.io/",
        "description": "Stillgram is an A.I. point & shoot camera app that magically removes background crowds from your urban/travel photos.",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "Topaz Photo AI",
        "link": "https://www.topazlabs.com/",
        "description": "Photo and video enhancement software powered by deep learning gets you the best image quality available for noise reduction, sharpening, upscaling, and more.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "Unfake",
        "link": "https://unfakepng.com/",
        "description": "Don't you hate it when you find that perfect, supposedly background-less Image, and download it, but when you go to use it, the dreaded checkerboard appears?.",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "jpgRM",
        "link": "https://jpgrm.com/",
        "description": "Using 2022 cutting edged AI model to remove any unwanted objects from your images, automatically fill the background.",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "jpghd",
        "link": "https://jpghd.com/",
        "description": "Using 2022 cutting-edge AI models for lossless restoration of old photos (supports old, scratched photo restoration, colorization, and Magic Photo).",
        "free?": "❔",
        "category": "image editing"
    },
    {
        "name": "paintbytext",
        "link": "https://paintbytext.chat/",
        "description": "paintbytext - Edit your photos using written instructions, with the help of an AI.",
        "free?": "✅",
        "category": "image editing"
    },
    {
        "name": "AIduh",
        "link": "https://aiduh.com/",
        "description": "Chrome extension that cuts your writing time by 98% with AI-powered responses. Built by Hosts for Hosts.",
        "free?": "✅",
        "category": "extensions"
    },
    {
        "name": "Autoname",
        "link": "https://www.autoname.org/",
        "description": "Rename Figma frames in one click, that's pretty much it.",
        "free?": "❔",
        "category": "extensions"
    },
    {
        "name": "Merlin",
        "link": "https://merlin.foyer.work/",
        "description": "Free Open AI's ChatGPT powered extension to use anywhere!.",
        "free?": "✅",
        "category": "extensions"
    },
    {
        "name": "SplashAI",
        "link": "https://www.splashai.art/",
        "description": ".",
        "free?": "❔",
        "category": "extensions"
    },
    {
        "name": "AI Review Reply Assistant",
        "link": "https://www.mara-solutions.com/",
        "description": "AI review reply generator: Reply 3x faster to every customer review with individual responses written by your personal AI assistant. No templates are needed.",
        "free?": "❔",
        "category": "reviews"
    },
    {
        "name": "Artreviewgenerator",
        "link": "https://artreviewgenerator.com/",
        "description": "A natural language processing tool and text generator. It takes a set of words as a prompt and then generates a medium length set of sentences that approximate the training data.",
        "free?": "❔",
        "category": "reviews"
    },
    {
        "name": "Geniusreview",
        "link": "https://geniusreview.xyz/",
        "description": "Save tons of hours by using GeniusReview to get tailored answers to your performance review questions.",
        "free?": "❔",
        "category": "reviews"
    },
    {
        "name": "Reviewz",
        "link": "https://www.reviewz.ai/",
        "description": ".",
        "free?": "❔",
        "category": "reviews"
    },
    {
        "name": "Sona",
        "link": "https://www.readthistwice.com/",
        "description": "We spend countless hours scouring the internet for the best book recommendations from people you admire. Our database is constantly growing, and every single recommendation has been verified for authenticity and includes a link to the source. Enjoy!.",
        "free?": "❔",
        "category": "reviews"
    },
    {
        "name": "Altera AI",
        "link": "https://www.altera.ai/",
        "description": "Get more leads and close more deals with Altera, the AI sales assistant that generates hyper personalised comments, inmails and posts on LinkedIn.",
        "free?": "✅",
        "category": "sales & marketing"
    },
    {
        "name": "Briefly",
        "link": "https://www.trybriefly.com/",
        "description": "Marketing briefs that get to the best creative work. Improve your marketing effectiveness and reduce the cost of badly written briefs.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "Clickable",
        "link": "https://www.clickable.so/",
        "description": "Beautiful, brand-consistent, and highly converting ads for all marketing channels. No design experience needed.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "Copy.ai",
        "link": "https://www.copy.ai/?via=beth0",
        "description": "Say goodbye' to the blank page for good.",
        "free?": "✅",
        "category": "sales & marketing"
    },
    {
        "name": "Cuetap.com",
        "link": "https://cuetap.com/",
        "description": "AI-powered platform provides automagical Battlecards and actionable Competitive Intelligence.",
        "free?": "✅",
        "category": "sales & marketing"
    },
    {
        "name": "GetResponse",
        "link": "https://www.getresponse.com/",
        "description": "Powerful, simplified tool to send emails, create pages, and automate your marketing.",
        "free?": "✅",
        "category": "sales & marketing"
    },
    {
        "name": "Hoppy Copy",
        "link": "https://www.hoppycopy.co/",
        "description": "Save countless hours writing. Use AI to generate powerful copy for hundreds of different email marketing campaigns, drips, newsletters and more—in seconds ⚡.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "MarketingBlocks AI",
        "link": "https://marketingblocks.ai/",
        "description": "Human-like all-in-one AI marketing assistant that creates landing pages, promo videos, ads, marketing copy, graphics, emails, voiceovers, blog posts, art & more.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "Octie.ai",
        "link": "https://octie.ai/",
        "description": "Write emails, product descriptions, and more, with A.I. Created by Octane AI.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "SaleWhale",
        "link": "https://salewhale.chat/",
        "description": "We provide impossibly good Sales Rep and Customer Support Chatbots, using the world's best available AI models. Learn how it will improve your business.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "Speaq.ai",
        "link": "https://www.speaq.ai/",
        "description": "Our mission is to revolutionize B2B marketing and customer support with artificial intelligence. Effortlessly schedule meetings and verify attendance with AI. Streamline your survey process with AI conversational calls.",
        "free?": "❔",
        "category": "sales & marketing"
    },
    {
        "name": "unbounce",
        "link": "https://unbounce.com/",
        "description": "Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart features that let you create beautiful, high-performing marketing campaigns in just a few minutes.",
        "free?": "❌",
        "category": "sales & marketing"
    },
    {
        "name": "Akkio",
        "link": "https://www.akkio.com/",
        "description": "Use your data to predict the future. Akkio is an easy-to-use, scalable, and affordable no-code AI platform for real-time decision making.",
        "free?": "❌",
        "category": "sales & marketing"
    },
    {
        "name": "Reply",
        "link": "https://reply.io/",
        "description": "Reply is your all-in-one sales engagement platform to create new opportunities at scale while keeping every touchpoint personal",
        "free?": "❌",
        "category": "sales & marketing"
    },
    {
        "name": "Filtpod",
        "link": "https://filtpod.com/engage-ai/",
        "description": "Empower Introverts, SMB Owners, and BDMs with AI in building relationships on LinkedIn",
        "free?": "✅",
        "category": "sales & marketing"
    },
    {
        "name": "Howler",
        "link": "https://www.howler.media/",
        "description": "Use Howler to run automated PR campaigns to relevant journalists in your niche",
        "free?": "❌",
        "category": "sales & marketing"
    },
    {
        "name": "Anypod",
        "link": "https://www.anypod.ai/",
        "description": "We make your content searchable.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "Lexii.ai",
        "link": "https://lexii.ai/",
        "description": "Lexii.ai is an AI search assistant that answers questions and cites sources.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "OpenArt Photo Booth",
        "link": "https://openart.ai/",
        "description": "Search 10M+ prompts, and generate AI Art via Stable Diffusion, DALL·E 2.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "Perplexity AI",
        "link": "https://www.perplexity.ai/",
        "description": "Ask is powered by large language models and search engines. Accuracy is limited by search results and AI capabilities.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "Smarty Names",
        "link": "https://smartynames.com/",
        "description": "Finding a creative and unique domain that is still available is easy with SmartyNames.com - Tell us what you do, and our robots will find the domain that is just right for you. Company name generator in one click.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "StockGPT",
        "link": "https://www.askstockgpt.com/",
        "description": "StockGPT is an AI-powered search engine that was trained on all of Tesla's quarterly earnings call transcripts dating back to Q2 2011.",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "You",
        "link": "https://you.com/",
        "description": ".",
        "free?": "✅",
        "category": "search engines"
    },
    {
        "name": "ChatBA",
        "link": "https://www.chatba.com/",
        "description": "Instantly create slide decks using ChatBCG.",
        "free?": "❔",
        "category": "design"
    },
    {
        "name": "Durable",
        "link": "https://durable.co/",
        "description": ".",
        "free?": "❔",
        "category": "design"
    },
    {
        "name": "Magician",
        "link": "https://magician.design/",
        "description": "A magical design tool for Figma powered by AI.",
        "free?": "❔",
        "category": "design"
    },
    {
        "name": "Piggy",
        "link": "https://piggy.to/magic",
        "description": "Creating stunning content on your phone just got easy.",
        "free?": "✅",
        "category": "design"
    },
    {
        "name": "SlidesAI",
        "link": "https://www.slidesai.io/",
        "description": "Say goodbye to tedious, manual slides creation. Let the AI write the outline and presentation content for you. With our tool, you can easily create professional, engaging slides from any text in no time.",
        "free?": "✅",
        "category": "design"
    },
    {
        "name": "Tome",
        "link": "https://beta.tome.app/",
        "description": "Unlock your best work with Tome's AI-powered storytelling format.",
        "free?": "✅",
        "category": "design"
    },
    {
        "name": "GPT for Slides",
        "link": "https://www.gptforslides.app/",
        "description": "GPT for Slides is a Google Slide add-on is AI-Powered Text To Presentation Tool that summarizes and creates presentation slides from any piece of text.",
        "free?": "✅",
        "category": "design"
    },
    {
        "name": "Makemytale",
        "link": "https://makemytale.com/",
        "description": "The AI-generated kids books on this website are intended for entertainment and creative inspiration only.",
        "free?": "❔",
        "category": "design"
    },
    {
        "name": "AI movie Club",
        "link": "https://www.ai-movie.club/",
        "description": "AI-MOVIE CLUB is a social network that create movies with artificial intelligence!.",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "Elektrif",
        "link": "https://www.elektrif.ai/",
        "description": "The first suite of AI-powered tools to supercharge your dating life ⚡️.",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "LoveGenius",
        "link": "https://www.lovegenius.io/",
        "description": "LoveGenius is an AI dating assistant that helps attract better matches by crafting an outstanding dating profile. It uses a combination of machine learning algorithms, data from successful dating profiles, and human insights based on interviews with dating coaches and experts.",
        "free?": "✅",
        "category": "socials and dating"
    },
    {
        "name": "Postwise",
        "link": "https://postwise.ai/",
        "description": "Write, schedule and grow with the world's smartest AI Twitter tool.",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "Roast",
        "link": "https://roast.dating/",
        "description": "ROAST helps people 10x their matches on dating apps like Tinder, Bumble, and Hinge. Powered by AI, it provides offers data-driven dating insights and expert advice to increase the quantity and quality of their matches.",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "Tweethunter",
        "link": "https://tweethunter.io/",
        "description": "Get sales, growth and new networks. Faster than what you're currently trying.",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "Tweetspear",
        "link": "https://www.tweetspear.com/",
        "description": "Revolutionize Your Twitter Engagement with  AI-Powered Suggested Replies .",
        "free?": "❔",
        "category": "socials and dating"
    },
    {
        "name": "Adobe speech enhancer",
        "link": "https://podcast.adobe.com/enhance",
        "description": "Speech enhancement makes voice recordings sound as if they were recorded in a professional studio.",
        "free?": "✅",
        "category": "speech"
    },
    {
        "name": "Lingostar",
        "link": "https://www.lingostar.ai/",
        "description": "Lingostar is the AI who language learners can speak to in English, Spanish, or French. Reach fluency with REAL spoken conversations for free. No more tutors - chat with the Lingostar A.I. to improve your pronunciation, vocabulary, and comprehension.",
        "free?": "✅",
        "category": "speech"
    },
    {
        "name": "eContext",
        "link": "https://www.econtext.ai/",
        "description": "eContext, the world's largest semantic text classification engine, classifies content instantly. Find out how to structure data from any text source.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Lore Ai",
        "link": "https://www.lore.ai/",
        "description": "Automate collection of company documents, news & unstructured data · Interactive dashboards & visualizations expose relationships & trends ·",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Valideo",
        "link": "https://www.valideo.xyz/",
        "description": "Get the best Amazon Product review with ChatGPT",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "cover letter kit",
        "link": "https://coverletterkit.com/",
        "description": "write your cover letter and prepare for your interview with help from ai! land your dream job with a professional, custom-made, and effective cover letter kit.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Childbook",
        "link": "https://www.childbook.ai/",
        "description": "Your book will be personalized with characters, pictures and story. The story and illustrations also have a text-to-speech feature and can be listened to.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Cover Letter AI",
        "link": "https://coverletter-ai.com/",
        "description": "The ultimate tool for crafting the perfect cover letter.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Coverletterwrite",
        "link": "https://coverletterwrite.com/",
        "description": "Ask AI to write a personalized cover letter.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Digital Dogs",
        "link": "https://digitaldogs.ai/",
        "description": "Cross-app, AI Digital Dogs NFTs for Virtual worlds, VR, AR, social apps, games and more.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Excelformulabot",
        "link": "https://excelformulabot.com/",
        "description": "Transform your text instructions into Excel & Google Sheets formulas in seconds with the help of AI.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Filechat",
        "link": "https://www.filechat.io/",
        "description": "Filechat is the perfect tool to explore documents using artificial intelligence. Simply upload your PDF and start asking questions to your personalized chatbot.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Formula Dog",
        "link": "https://formula.dog/",
        "description": "Transform your text instructions into Excel formulas, VBA, Regex etc. in seconds with the help of AI.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Formulagod",
        "link": "https://www.formulagod.ai/",
        "description": "Talk to sheets with built-in artificial intelligence.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "GPT Hotline",
        "link": "https://www.gpthotline.com/",
        "description": "Connect with the world's smartest AI on WhatsApp.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Gandhiji",
        "link": "https://www.messengerx.io/",
        "description": "AI Powered Chat Apps for Everyone.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "GoalsGPT",
        "link": "https://www.tability.io/",
        "description": "The easiest way to keep track of your OKRs and team goals. Align your team around outcomes â�� without feeling like a chore.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Goatchat",
        "link": "https://goatchat.ai/",
        "description": "Did you ever want to ask Napoleon or Einstein a few questions? Well, now you have a chance.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Hello History",
        "link": "https://www.hellohistory.ai/",
        "description": "With the help of modern AI & machine learning weâ��ve brought historical figures back to life. Now is your chance to ask the questions youâ��ve always wanted to ask.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Infiniteconversation",
        "link": "https://infiniteconversation.com/",
        "description": "An AI generated, never-ending discussion between Werner Herzog and Slavoj Žižek.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Jot",
        "link": "https://www.jotapp.tech/",
        "description": "Jot automagically generates infinite ad copy variations for you using AI. Streamline your team's copywriting processes with artificial intelligence. Powered by OpenAI GPT-3.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Justlearn",
        "link": "https://www.justlearn.com/",
        "description": "AI Friend, Chat & Call app designed to teach you anything. Voice. Diary. Music. Workout.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Kidotail",
        "link": "https://www.kidotail.com/",
        "description": "A New Way to Ignite Your Child's Imagination. Endless Storytelling Possibilities.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Langame card game",
        "link": "https://cards.langa.me/",
        "description": "Create your personalized deck of cards and play with your friends. Select which cards should be part of your own deck by swiping 💅.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Myess",
        "link": "https://myess.ai/",
        "description": "Supercharge your writing with instant, highly detailed feedback from our AI tutor. Real, actionable feedback - not just another Grammarly.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Namewizard",
        "link": "https://namewizard.ai/",
        "description": "namewizard is the generator that uses AI to find the perfect business and domain name for your next project.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Oracle",
        "link": "https://askoracle.app/",
        "description": "Get instant answers to all your burning questions with Oracle. Simply ask on Slack and let our AI generate an answer for you. Connect Oracle to Slack, Google Docs, and Confluence with just one click and maximize your productivity.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Politepost",
        "link": "https://www.politepost.net/",
        "description": "Make sure your emails are professional and suitable for the workplace. Write your draft with all your slang and expletives, and our AI bot will rewrite and clean up the text.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Proposalgenie",
        "link": "https://www.proposalgenie.ai/",
        "description": "Write the Perfect Upwork proposal in seconds.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Scarlettpanda",
        "link": "https://www.scarlettpanda.com/",
        "description": "Scarlett Panda - use our magic to generate customized bedtime stories featuring your friends and family.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Scholarcy",
        "link": "https://www.scholarcy.com/",
        "description": "Scholarcy™ is an online summarizing tool that generates and converts long articles into summary flashcards. Sign up free & start summarizing.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Sheet AI",
        "link": "https://www.sheetai.app/",
        "description": "SheetAI is a Google Sheets add-on that helps you unlock the power of AI in your spreadsheets.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Spellbox",
        "link": "https://spellbox.app/",
        "description": "SpellBox uses artificial intelligence to create the code you need from simple prompts. Solve your toughest programming problems with AI in seconds!.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Splitjoin",
        "link": "https://www.splitjoin.com/",
        "description": "AI assistant to help you write commit messages faster.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "SpeedWrite",
        "link": "https://speedwrite.com/",
        "description": "The automatic text generator. That writes unique text every time.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Startup Pitch Generator",
        "link": "https://tally.so/?ref=beth0",
        "description": "Create forms for all purposes in seconds.Without knowing how to code.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Storywizard",
        "link": "https://www.storywizard.ai/",
        "description": "Storywizard uses AI to help you generate astonishing stories for children with vivid images and beautiful plots.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Sudowrite",
        "link": "https://www.sudowrite.com/",
        "description": "Write your novel or screenplay faster with best AI writing tool according to The New Yorker, NY Times, The Verge, and many more.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Upword",
        "link": "https://www.upword.ai/",
        "description": "Capture key ideas from content with Upword's AI. Create online summary docs. Grow your knowledge.",
        "free?": "✅",
        "category": "text"
    },
    {
        "name": "Writemeacoverletter",
        "link": "https://writemeacoverletter.com/",
        "description": "Generate a cover letter in seconds using AI. Just upload your CV, share a link to the job you want, and we'll do the rest.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Your Cover Letter",
        "link": "https://yourcoverletter.com/",
        "description": "Apply for your dream jobs using our AI Cover Letter builder. Add your Resume and the Job Description to generate a Cover Letter in seconds.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "coverletter.app",
        "link": "https://coverletter.app/",
        "description": "Stand out from the competition and increase your chances of getting hired with personalized cover letters from our advanced AI technology.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "speakingclubai",
        "link": "https://speakingclubai.com/",
        "description": "welcome to speaking club ai - the ultimate language learning tool for anyone looking to    improve their speaking skills in a foreign language. with speaking club ai, you can practice    your conversation skills with a personalized ai language partner anytime, anywhere.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Snazzy AI",
        "link": "https://subtxt.app/",
        "description": "Subtxt is the always ready, massively intelligent writing partner you've always dreamed of. With its predictive narrative framework & cutting-edge AI technology, Subtxt helps you finish those stories that matter most to you.",
        "free?": "❔",
        "category": "text"
    },
    {
        "name": "Article.Audio",
        "link": "https://article.audio/",
        "description": "too lazy to read an article? no problem, listen to it! Powered by Thundercontent.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "ElevenLabs",
        "link": "https://beta.elevenlabs.io/",
        "description": "The most realistic and versatile AI speech software, ever. Eleven brings the most compelling, rich and lifelike voices to creators and publishers seeking the ultimate tools for storytelling.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "Listnr 2.0",
        "link": "https://www.listnr.tech/?gr_pk=V71a&gr_uid=YVDO",
        "description": "Generate realistic Text to Speech (TTS) audio using our AI Voice Generator with the best synthetic voices. Instantly convert text in to natural-sounding speech and download in MP3 and WAV formats.",
        "free?": "❌",
        "category": "text to speech"
    },
    {
        "name": "Murf.ai",
        "link": "https://murf.ai/",
        "description": "AI enabled, real people's voices. Make studio-quality voice overs in minutes. Use Murf's lifelike AI voices for podcasts, videos, and all your professional presentations.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "Play.ht",
        "link": "https://play.ht/",
        "description": "Generate realistic Text to Speech (TTS) audio using our online AI Voice Generator and the best synthetic voices. Instantly convert text in to natural-sounding speech and download as MP3 and WAV audio files.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "Speech-to-Speech",
        "link": "https://www.resemble.ai/",
        "description": "Resemble's AI voice generator lets you create human–like voice overs in seconds.",
        "free?": "❌",
        "category": "text to speech"
    },
    {
        "name": "Speechelo",
        "link": "https://speechelo.com/",
        "description": "We GUARANTEE no one will tell your voiceover is A.I. generated with a text to voice tool.",
        "free?": "❔",
        "category": "text to speech"
    },
    {
        "name": "Speechify",
        "link": "https://speechify.com/",
        "description": "Power through docs, articles, PDFs, email — anything you read — by listening with our leading text-to-speech reader.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "Unreal Speech",
        "link": "https://unrealspeech.up.railway.app/",
        "description": "More natural-sounding and up to 4x cheaper than Amazon, Google and Microsoft.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "VERBATIK",
        "link": "https://verbatik.com/",
        "description": "Generate Realistic Text to Speech (TTS) audio using online AI Voice Generator and best synthetic voices. Instantly convert text in to natural-sounding speech and download as MP3 and WAV audio files.",
        "free?": "❌",
        "category": "text to speech"
    },
    {
        "name": "Wellsaid",
        "link": "https://wellsaidlabs.com/",
        "description": "With WellSaid, you and your team can create a compelling realistic AI voice over for all your digital content.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "TTsmaker",
        "link": "https://ttsmaker.com/",
        "description": "TTSMaker is an online text-to-speech tool that can convert text to audio, and you can play or download audio files.",
        "free?": "✅",
        "category": "text to speech"
    },
    {
        "name": "Deciphr AI",
        "link": "https://www.deciphr.ai/",
        "description": "Powered by deep AI, Deciphr timestamps and summarizes your entire podcast transcript for you. In less time than it takes to make coffee.",
        "free?": "✅",
        "category": "translation and transcript"
    },
    {
        "name": "Graphic AI",
        "link": "https://www.stork.ai/",
        "description": "Stork helps teams improve communications and productivity. It is a Business Messenger for Hybrid & Remote Teams that Records and Transcribes All Meetings and Calls automatically. Made for asynchronous post pandemic world and assisted by artificial intelligence.",
        "free?": "❔",
        "category": "translation and transcript"
    },
    {
        "name": "Rephrasely",
        "link": "https://rephrasely.com/?via=beth0",
        "description": "Rephrasely uses state-of-the-art AI to produce variations of your text in more than 100+ languages for each of the eighteen (12 free and 6 premium) styles that we offer. By doing this, we are able to offer more value and variety than any other service.",
        "free?": "✅",
        "category": "translation and transcript"
    },
    {
        "name": "Rythmex",
        "link": "https://rythmex.com/?partner=641&uuid=49feba69-adf4-456c-a90e-a9f4f14372cb&page=home",
        "description": "Transcribe audio to text easily, quickly, and effectively.",
        "free?": "✅",
        "category": "translation and transcript"
    },
    {
        "name": "Scribebuddy",
        "link": "https://secure.scribebuddy.com/",
        "description": "Automatically Transcribe Any Audio, Video, Zoom Call, Google Meet, Podcast, Live Speech & More in Minutes.",
        "free?": "❌",
        "category": "translation and transcript"
    },
    {
        "name": "Supertranslate",
        "link": "https://www.supertranslate.ai/",
        "description": "Powered by OpenAI's Whisper, the world's most accurate speech-to-text engine!.",
        "free?": "❔",
        "category": "translation and transcript"
    },
    {
        "name": "Voicetapp",
        "link": "https://voicetapp.com/",
        "description": "Get accurate transcriptions for your AUDIO & VIDEO with the latest speech rocognition technology.",
        "free?": "❔",
        "category": "translation and transcript"
    },
    {
        "name": "Deepgram",
        "link": "https://deepgram.com/",
        "description": "Unlock conversational intelligence with transcription and context on the world’s best speech AI platform. Easy to integrate, simple to scale.",
        "free?": "✅",
        "category": "translation and transcript"
    },
    {
        "name": "AI Host",
        "link": "https://livereacting.sjv.io/beth0",
        "description": "LiveReacting helps you get more followers and engagement by adding pre-recorded videos, games, countdowns, and polls to your stream.",
        "free?": "❌",
        "category": "video"
    },
    {
        "name": "Boolpic",
        "link": "https://boolv.tech/",
        "description": "Generate on-brand videos 10X faster with AI to boost marketing performance.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "D-ID's Creative Reality Studio",
        "link": "https://www.d-id.com/",
        "description": "Produce customized videos featuring talking avatars at a touch of a button, giving businesses and creators superpowers.",
        "free?": "✅",
        "category": "video"
    },
    {
        "name": "Deepfakesweb",
        "link": "https://deepfakesweb.com/",
        "description": "Our easy to use deepfake app uses AI and Deep Learning to generate amazing face swap videos. Make your own deepfake video today.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Elai",
        "link": "https://elai.io/",
        "description": "Build customized AI videos with a presenter in minutes without using a camera, studio and a greenscreen.",
        "free?": "✅",
        "category": "video"
    },
    {
        "name": "FilmForge",
        "link": "https://filmforge.uwu.ai/",
        "description": "Instantly generate engaging videos. Captions, voiceover, transcript, and graphics included.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Fliki",
        "link": "https://fliki.ai/?via=beth0",
        "description": "Create videos from scripts or blog posts using realistic voices in 2 minutes!.",
        "free?": "✅",
        "category": "video"
    },
    {
        "name": "Gling",
        "link": "https://www.gling.ai/",
        "description": "Our AI will cut silences and bad takes for you so you can focus on your YouTube videos.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Move",
        "link": "https://www.move.ai/",
        "description": "Capture high quality motion data from video in any environment using mobile phones.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Pictory",
        "link": "https://pictory.ai/?ref=milana31",
        "description": "Automatically create short, highly-sharable branded videos from your long form content.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Waymark",
        "link": "https://waymark.com/",
        "description": "When TV, CTV, and digital ads are this effortless, the possibilities are limitless. High-impact ads are now open to everyone, with Waymark.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Wzrd.ai",
        "link": "https://wzrd.ai/",
        "description": "WZRD augments your audio with immersive video powered by artificial intelligence.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "adobe sensei",
        "link": "https://www.adobe.com/sensei/creative-cloud-artificial-intelligence.html",
        "description": "you were hired to create, not to spend hours on end searching for stock photos or tagging videos. with adobe sensei taking care of everything from organizing, editing, and producing, you can focus your energy on what you actually love — ideating, experimenting, and creating.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "nvidia ai demos",
        "link": "https://www.nvidia.com/en-us/research/ai-demos/",
        "description": "experience ai in action from nvidia research",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Gen-1",
        "link": "https://research.runwayml.com/gen1",
        "description": "Use words and images to generate new videos out of existing ones.",
        "free?": "❔",
        "category": "video"
    },
    {
        "name": "Shuffll",
        "link": "https://shuffll.com/",
        "description": "Taking you from zero to fully produced videos",
        "free?": "❌",
        "category": "video"
    },
    {
        "name": "AI Lyrics Generator",
        "link": "https://theselyricsdonotexist.com/",
        "description": "Generate your own song lyrics for any topic, also choose lyrics genre and lyrics mood.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "AI-Writer",
        "link": "https://ai-writer.com/",
        "description": "AI-Writer is the most accurate content generation platform, using state-of-the-art AI writing models to generate articles from just a headline.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "BlogNLP",
        "link": "https://www.blognlp.com/",
        "description": "An AI-based blog writing tool that can help you craft captivating content quickly and easily, eliminating writer's block and saving you time.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "Easy-Peasy.AI",
        "link": "https://easy-peasy.ai/",
        "description": "Easy-Peasy.AI believes that everyone has a story to tell. With our AI copywriting tools, we help you tell your story in the most engaging way possible.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "Elephas",
        "link": "https://gumroad.com/a/411783379/ntmtp",
        "description": "Save hours every day. The world's first AI writer that works across your Mac, iPhone, and iPad.",
        "free?": "✅",
        "category": "writing assistant"
    },
    {
        "name": "Rizz!",
        "link": "https://rizzai.com/",
        "description": "The world's most powerful text AI, built into your keyboard.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "SmartScribe",
        "link": "https://www.smartscribe.app/",
        "description": "SmartScribe helps solve the complexities of writing through the use of Artificial Intelligence.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "Thundercontent",
        "link": "https://thundercontent.com/",
        "description": "Thundercontent uses artificial intelligence to help you write unique articles on any topic at the speed of light. Scale your content strategy. Overcome writer's block.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "Typly",
        "link": "https://typly.app/",
        "description": "Typly is the ultimate cutting edge AI keyboard that helps you to answer all your messages with a single click!🚀.",
        "free?": "❔",
        "category": "writing assistant"
    },
    {
        "name": "WebCopilot",
        "link": "https://www.webcopilot.co/",
        "description": "Write your Notion pages with AI. Speed up your writing process and focus on what matters. Free Forever.",
        "free?": "✅",
        "category": "writing assistant"
    },
    {
        "name": "Whiskey AI",
        "link": "https://beta.whiskeyai.xyz/",
        "description": "Whiskey has been designed for students, journalists and professionals to be able to express their thoughts into well-written text formats with minimal effort and time.",
        "free?": "✅",
        "category": "writing assistant"
    },
    {
        "name": "1Case",
        "link": "https://1case.io/",
        "description": "Find your 1 of a kind case in seconds.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AI Car Diagnosis",
        "link": "https://cardiagnosis.softr.app/",
        "description": "Get real-time diagnostics and insights into your car's performance with our cutting-edge tool.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "gitguardian",
        "link": "https://www.gitguardian.com/",
        "description": "tool that monitors public and private repositories for leaked api keys, database credentials, certificates and other security issues",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "ai lyrics generator",
        "link": "https://theselyricsdonotexist.com/",
        "description": "generate your own song lyrics for any topic, also choose lyrics genre and lyrics mood.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ai profile pictures",
        "link": "https://www.aiprofilepictures.com/",
        "description": "now available in beta.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "josh",
        "link": "https://www.josh.ai/",
        "description": "josh is a home’s best friend. and like a dog, josh is intelligent, responsive, and learns his owner’s commands. while other smart home control systems only know one trick, josh combines all aspects of smart homes into one friendly, well-trained responder. josh is your companion, and always happy to see you come home.",
        "free?": "❌",
        "category": "other"
    },
    {
        "name": "ACT-1",
        "link": "https://www.adept.ai/act",
        "description": "ACT-1 is a large-scale Transformer trained to use digital tools — among other things, we recently taught it how to use a web browser.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ai movie club",
        "link": "https://www.ai-movie.club/",
        "description": "ai-movie club is a social network that create movies with artificial intelligence!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "briefly",
        "link": "https://www.trybriefly.com/",
        "description": "marketing briefs that get to the best creative work. improve your marketing effectiveness and reduce the cost of badly written briefs.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "elektrif",
        "link": "https://www.elektrif.ai/",
        "description": "the first suite of ai-powered tools to supercharge your dating life ⚡️.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AI Image Upscaler",
        "link": "https://www.upscale.media/",
        "description": "Upscale your image to 2x or 4x without losing any textures or details with our AI tool. Use our super-resolution tool and bring new life to your images.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "AI Query",
        "link": "https://www.aiquery.co/",
        "description": "Use simple English and let AI do the heavy lifting for you. With AI Query anyone can create efficient SQL queries, without even knowing a thing about it.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AI Rental Cover Letter",
        "link": "https://sharehouse.app/",
        "description": "Connect with Sharehouses, Housemates Or Flatmates. Freely List & Advertise Your Room, House, or Flat.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AI Social Media Post Writerby Socialblu",
        "link": "https://socialbu.com/",
        "description": "SocialBu is the perfect solution to improve your social media presence and maximize your results. Publish, Respond, Analyze, and Automate - all from within SocialBu.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AI Writer by Picsart",
        "link": "https://tools.picsart.com/",
        "description": "Creating transparent backgrounds for your images, trimming videos, and converting file types - do it all with Quicktools.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Adobe Mic Check",
        "link": "https://podcast.adobe.com/miccheck",
        "description": "Get advice on how to improve your microphone setup. We'll make sure you sound podcast-ready.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Aida",
        "link": "https://www.bookmark.com/",
        "description": "Let our Ai powered website builder get your business online in minutes.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Albus",
        "link": "https://www.springworks.in/albus/",
        "description": "Albus uses natural language processing technology to help you find answers to all your questions without leaving Slack. Have the power of ChatGPT now right inside your Workspace!.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Amadeus Code",
        "link": "https://amadeuscode.com/",
        "description": "企業情報、採用情報、投資家情報、ニュースなど、Amadeus Codeの企業情報全般を提供する公式企業サイトです。.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Amper AI",
        "link": "https://www.ampermusic.com/",
        "description": "Amper is an AI music composition company that develops tools for content creators of all kinds. Learn about our new enterprise platform, Score, as well as our creator API.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Ansy",
        "link": "https://ansy.ai/",
        "description": "GPT-3 powered Discord bot that answers questions from your Discord community members based on chat history.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Ask Poppy",
        "link": "https://www.poppylist.com/",
        "description": "You know your lifestyle. We know the products. Let's build your baby registry together.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Auto Draw",
        "link": "https://www.autodraw.com/",
        "description": "Fast drawing for everyone. AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "AutoPredict",
        "link": "https://autopredict.co.uk/",
        "description": "AutoPredict uses state of the art AI to predict how long a UK car is likely to last.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "B^ DISCOVER",
        "link": "https://bdiscover.kakaobrain.com/",
        "description": "You will have a new experience of discovering your story in images.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Baseten",
        "link": "https://app.baseten.co/",
        "description": "Baseten is a serverless backend for building ML-powered applications. Build apps with auto-scaling, GPU access, CRON jobs, and serverless functions.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Beb AI",
        "link": "https://beb.ai/",
        "description": "The possibilities are limitless, beb.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "BigJpg",
        "link": "https://bigjpg.com/",
        "description": "Bigjpg - Image Super-Resolution for Anime-style artworks using the Deep Convolutional Neural Networks without quality loss. Photos are also supported.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Bito AI",
        "link": "https://bito.co/",
        "description": "A Swiss Army knife in your IDE that can 10x your dev",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Blackink",
        "link": "https://blackink.ai/",
        "description": "Stop spending months searching Pinterest for your next tattoo. Generate custom, unique tattoos in seconds with BlackInk's AI, designed to create tattoo-like designs just for you.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Blimey",
        "link": "https://blimeycreate.com/",
        "description": "Blimey is an ai image generator where you can go from idea to reality in a minute. With full control over composition, colors and style.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Bloomoon",
        "link": "https://www.bloomoon.art/",
        "description": "Discover unique AI-generated paintings at bloomoon.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "BrameWork",
        "link": "https://www.bramework.com/",
        "description": "Bramework is an easy-to-use AI writer that helps bloggers, freelancers, and agencies save hours per blog post.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Cogram",
        "link": "https://www.cogram.com/",
        "description": "Cogram uses artificial intelligence to create high-quality meeting minutes and propose action items.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Colossyan",
        "link": "https://www.colossyan.com/",
        "description": "Colossyan Creator makes video creation simple and stress-free. Discover our AI video creator with real actors. Create videos in less than 5 minutes.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Coolaiid",
        "link": "https://coolaiid.com/",
        "description": "Whether you're looking to decorate or just need a little inspiration, we'll generate unique ideas using AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "CopyScouts",
        "link": "https://copyscouts.com/",
        "description": "Use unlimited GPT-3 based AI writing for a fixed monthly price.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Coqui",
        "link": "https://coqui.ai/",
        "description": "Direct emotive, generative AI voices for video games, post-production, dubbing and much more….",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Coverquick",
        "link": "https://www.coverquick.co/",
        "description": "Apply with confidence.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Craiyon",
        "link": "https://www.craiyon.com/",
        "description": "Craiyon is an AI model that can draw images from any text prompt!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Daft Art",
        "link": "https://www.daftart.ai/",
        "description": "Daft allows you to create an amazing, high quality artwork for your album cover within a few minutes, powered by AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Daydrm",
        "link": "https://www.daydrm.ai/",
        "description": "The future of advertising is using machine learning to perform creative thinking.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Designs AI",
        "link": "https://designs.ai/",
        "description": "Create anything online in 2 minutes! Make a logo, video, social media banner, business card, flyer, mockup and more with AI.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Diffusion Bee",
        "link": "https://diffusionbee.com/",
        "description": "DiffusionBee is the easiest way to generate AI art on your computer with Stable Diffusion.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Ebsynth",
        "link": "https://ebsynth.com/",
        "description": "You paint one frame and EbSynth propagates it to the rest of the footage.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Elicit",
        "link": "https://elicit.org/",
        "description": "Elicit uses machine learning to help you with your research: find papers, extract key claims, summarize, brainstorm ideas, and more.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Equally.ai",
        "link": "https://equally.ai/",
        "description": "Achieve ADA & WCAG compliance easily.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Fireflies",
        "link": "https://fireflies.ai/",
        "description": "Fireflies.ai helps your team record, transcribe, search, and analyze voice conversations.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Flexberry AI Assistant",
        "link": "https://ai.flexberry.net/",
        "description": "This helps to reduce 30% of the time business analyst uses for processing requirements  and also to generate artifacts.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "GPTKey",
        "link": "https://gptkey.com/",
        "description": "Write with AI in any app using the GPT custom keyboard extension.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Genius Sheets",
        "link": "https://www.geniussheets.com/",
        "description": "Genius Sheets AI Text To Reports solutions help you analyze financial data faster - empowering teams to make better decisions. Stay in Excel and Google Sheets and automate your financial reporting process with live data connections.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "GetSound",
        "link": "https://www.getsound.ai/",
        "description": "Relaxing soundscapes for saunas, showers, and massage areas. Pools, Beaches, Gardens, or Rooftops will get the perfect soundscape. Make your Lobby, Hallways, or Elevators unique again. Get more done with a natural soundscape for better focus and harmony.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Glasp",
        "link": "https://glasp.co/",
        "description": "Highlight & add notes as you read.Create a library of your learning â�¤ï¸�.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "hire hoc",
        "link": "https://hirehoc.com/",
        "description": "transform your organization with the power of ai-assisted recruiting.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "hireyay",
        "link": "https://hireyay.com/",
        "description": "92% of job seekers do not finish their online application. with hireyay, you will never miss a qualified candidate again.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "hirex.ai",
        "link": "https://www.hirex.ai/",
        "description": "welcome to hirex.ai, a no-code ai platform to build voice-based bots that conduct and score interviews at scale. get the complete suite of assessments tools like coding interviews, mcq tests, hackathons, video interviews, and whatsapp chatbots all under single dashboard.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "jd generator",
        "link": "https://hirequotient.com/",
        "description": "hirequotient’s skill assessment platform helps you hire the top 10% of the talent pool in half the time.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "jokelub",
        "link": "https://jokelub.com/",
        "description": "bring humor everywhere.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "kanye tweet generator",
        "link": "https://www.kanyegenerator.com/",
        "description": "generate kanye tweets using ai. built by ryan doyle.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ferret.ai",
        "link": "https://www.ferret.ai/",
        "description": "helps you research by summarising articles and search ability",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "galactica",
        "link": "https://galactica.org/",
        "description": "a large language model for science. can summarize academic literature, solve math problems, generate wiki articles, write scientific code, annotate molecules and proteins, and more.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Hubble",
        "link": "https://www.hubble.team/",
        "description": "Create world class products by gathering high quality feedback from users on prototypes, betas and live features.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ICONS8",
        "link": "https://icons8.com/",
        "description": "Change faces of stock photos, Smart Upscaler, Update your website right from Lunacy and more.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Inworld",
        "link": "https://www.inworld.ai/",
        "description": "Create AI characters and NPCs for games, metaverse, and business applications – or just for fun. You can talk to AI characters about anything. It's easy, free, and full of possibilities.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Jamie",
        "link": "https://www.meetjamie.ai/",
        "description": "jamie is an AI assistant that creates summaries of meetings in business-writing quality within seconds. Try now and convince yourself of the magic experience.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Kive",
        "link": "https://www.kive.ai/",
        "description": "all your inspiration in one place.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Kore.ai",
        "link": "https://kore.ai/",
        "description": "Kore.ai automates front-office and back-office interactions for every industry by deploying conversational AI-first virtual assistants and process assistants.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Langotalk",
        "link": "https://www.langotalk.org/",
        "description": "Have confident conversations in weeks instead of years.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Letsenhance",
        "link": "https://letsenhance.io/",
        "description": "AI software to enhance and upscale pictures. Increase resolution and quality. Fix blurry, pixelated and bad images. Make every photo sharp and clear.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Linkedin Posts Generator",
        "link": "https://sid.black/",
        "description": "Hi, I am Siddharth Verma. A start-up enthusiast with 6+ years of experience. I have worked with over 50+ SAAS companies helping them build robust scalable solutions, product and engineering problems.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "LuciaAI",
        "link": "https://luciaai.com/",
        "description": "Lucia uses the latest and most advanced artificial intelligence technology. With Lucia you can write faster and better than ever before.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "MagicStock",
        "link": "https://aimages.ai/",
        "description": "Upscale and Enhance videos and images online using AI.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Mapwith.ai",
        "link": "https://mapwith.ai/",
        "description": "In conjunction with OpenStreetMap, we are creating tools that we hope will enable the mapping community to enjoy a faster & more accurate mapping experience.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Midjourney",
        "link": "https://www.midjourney.com/",
        "description": "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Mokker",
        "link": "https://mokker.ai/",
        "description": "AI-Powered Photo Generation for E-Commerce.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Neural Studio",
        "link": "https://neural.cam/",
        "description": "with AI powered image processing.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Neural.Love",
        "link": "https://neural.love/",
        "description": "Use AI Image Generator for free or AI enhance, or access Millions Of Public Domain images - AI Enhance & Easy-to-use Online AI tools.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Nyx Gallery",
        "link": "https://nyx.gallery/",
        "description": "Images on this website have been generated with AI and are therefore “not real”.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Oda Studio",
        "link": "https://stager.odastudio.ai/",
        "description": "Pick your style and color to customize your home in seconds with AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Olli",
        "link": "https://www.olli.ai/",
        "description": "Olli is the AI platform for creating data visualizations 10x faster - it's like having an assistant that deals with the annoying parts of finding data, creating visualizations, and getting them ready for presentations.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Once Upon A Bot",
        "link": "https://onceuponabot.com/",
        "description": "Tell OnceUponABot your story idea, and the robot will write a story from scratch using AI. Then you can read, edit, export, and share your creations.",
        "free?": "❌",
        "category": "other"
    },
    {
        "name": "Paperade",
        "link": "https://www.paperade.co/",
        "description": "Paperade is the first AI-powered tool that generates commercial use cases and company ideas from over 100 million academic papers and research studies.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pattern Maker AI",
        "link": "https://patternmakerai.com/",
        "description": "Generate seamless vector patterns using artificial intelligence.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Peppertype.ai",
        "link": "https://www.peppertype.ai/",
        "description": "Generate content that converts in seconds.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "PersonaCardAI",
        "link": "https://www.personacardai.com/",
        "description": "Stop spending hours in workshops to try to find your personas. Our AI reveals your top 3 personas profiles within your CRM with 20+ attributes.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Petpic",
        "link": "https://www.petpic.ai/",
        "description": "Your favorite animal can now be anything, anywhere, even anyone. Just upload some pics and let AI do its creative magic ð��«.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Petportrait",
        "link": "https://petportrait.ai/",
        "description": "Looking for a thoughtful pet gift? Pet Portrait AI generates unique, custom-made portraits of your cats, dogs, and other pets in a variety of styles. Our AI technology ensures that each portrait is one-of-a-kind, just like your pet.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pfpmaker",
        "link": "https://pfpmaker.com/",
        "description": "Upload your photo to create a professional-looking profile picture and a matching background cover.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Photoleap",
        "link": "https://www.photoleapapp.com/",
        "description": "Use all-in-one photo editor Photoleap for amazing creations on your iPhone: Change backgrounds, remove objects, create collages, apply filters & effects.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Phraser",
        "link": "https://phraser.tech/",
        "description": "Phraser is an app that helps you create images using generative AI (Midjourney, Stable Diffusion, and DALLE 2), collaborate, and get inspired.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "pic2prompt",
        "link": "https://magicstudio.com/",
        "description": "magic studio helps you automatically edit and create images, using ai.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "replika",
        "link": "https://replika.com/",
        "description": "always here to listen and talk. always on your side. join the millions growing with their ai friends now!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "starryai",
        "link": "https://www.starryai.com/",
        "description": "simply enter a prompt and our ai transforms your words into works of art.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "stock ai",
        "link": "https://www.stockai.com/",
        "description": "download ai-generated stock photos for free, with the click of a button. use in any project without worry about attribution.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "supertranslate",
        "link": "https://www.supertranslate.ai/",
        "description": "powered by openai's whisper, the world's most accurate speech-to-text engine!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "thundercontent",
        "link": "https://thundercontent.com/",
        "description": "thundercontent uses artificial intelligence to help you write unique articles on any topic at the speed of light. scale your content strategy. overcome writer's block.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "PicSo",
        "link": "https://picso.ai/",
        "description": "PicSo is a text-to-image AI Art Generator app & online platform for creative digital art. FREE try and turn your ideas to NFT art, oil painting and more.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "PictoDream",
        "link": "https://pictodream.com/",
        "description": "Generate any images of yourself (or another person) in any style or setting using a simple text description.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pictorial",
        "link": "https://www.pictorial.ai/",
        "description": "Inspiration is hard to come by. Get your message across hustle-free by leveraging an AI able to generate reliable, ready-to-use visual masterpieces.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pinegraph",
        "link": "https://pinegraph.com/",
        "description": "Pinegraph is all you need to bring your creativity to life. Generate AI art for free with Pinecasso for styles like anime, abstract art, and more. Create your own concept characters including waifus and husbandos, game art, and more.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Pitchgrade",
        "link": "https://pitchgrade.com/",
        "description": "A pitch deck is a presentation that a company uses to pitch to investors. It goes over the company's business model, financial projections, and other key metrics that investors would want to see.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pixelmind",
        "link": "https://beta.pixelmind.ai/",
        "description": "Your journey into AI-powered art. Create and collect NFTs through the Pixelmind portal. Evolve your style. Raise your game.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Pixelz AI",
        "link": "https://pixelz.ai/",
        "description": "Create unique AI artwork using text, phrases, images & presets, share, download, print & mint as NFTs.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Polymath Robotics",
        "link": "https://www.polymathrobotics.com/",
        "description": "Magically simplified autonomy for industrial vehicles.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Ponzu.gg",
        "link": "https://www.ponzu.gg/",
        "description": "AI generated PBR texture maps for any idea, within seconds.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Portrait by Vana",
        "link": "https://portrait.vana.com/",
        "description": "“Portrait” by Vana is a generative art studio that can create self-portraits of you in infinite styles.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Prodigy AI",
        "link": "https://ai.prodi.gg/",
        "description": "Are you an engineer wondering about your next gig? Tell HAL what you're looking for and get personalized career advice sent directly to your inbox.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Project Blink",
        "link": "https://labs.adobe.com/",
        "description": "A place for us to share some of our explorations into the future of creativity, expression, and communication.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Prompthunt",
        "link": "https://www.prompthunt.com/",
        "description": "Create, explore, and share AI art using DALL·E, Stable Diffusion, and Midjourney.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Question Base",
        "link": "https://www.questionbase.com/",
        "description": "Question Base is a new kind of knowledge base. Powered by AI it answers your teamâ��s questions inside Slack. Automatically.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Quizwhiz",
        "link": "https://www.quizwhiz.ai/",
        "description": "Provide a body of text and get AI-generated Questions and Answers, along with their Multiple-Choice options.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Raplyrics",
        "link": "https://raplyrics.eu/",
        "description": "Write a few words in the prompt below and generate a unique rap music punchline using Artificial Intelligence !.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Rayst Gradients",
        "link": "https://gradients.ray.st/",
        "description": "A Collection of 64 Beautiful Gradients Generated by AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Reface",
        "link": "https://hey.reface.ai/",
        "description": "Create realistic face swap videos, GIFs and memes with just one selfie.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Replica",
        "link": "https://replicastudios.com/",
        "description": "Try today with 30 minutes of free voice credit.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "RestorePhotos.io",
        "link": "https://www.restorephotos.io/",
        "description": "Have old and blurry face photos? Let our AI restore them so those memories can live on. 100% free – restore your photos today.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "ResumAI",
        "link": "https://www.wonsulting.com/",
        "description": "Weâ��ve helped over 100,000 people land their dream jobs. Let our job search strategies take you from resumes to better days.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "SUPERMACHINE",
        "link": "https://supermachine.art/",
        "description": "SUPERMACHINE enables you to generate images with the latest in artificial intelligence technology.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Scale Catalog Forge",
        "link": "https://scale.com/",
        "description": "Trusted by world class companies, Scale delivers high quality training data for AI applications such as self-driving cars, mapping, AR/VR, robotics, and more.",
        "free?": "❌",
        "category": "other"
    },
    {
        "name": "Scene One",
        "link": "https://sceneone.app/",
        "description": "Write more stories with our intuitive writing app and spend less time learning complicated features.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Scispace",
        "link": "https://typeset.io/",
        "description": "Your platform to explore and explain papers. Search for 270M+ papers, understand them in simple language, and find connected papers, authors, topics.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Simplified",
        "link": "https://simplified.com/",
        "description": "Design, Write, Edit videos, and Publish Content. Built For Teams.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Soundful",
        "link": "https://soundful.com/",
        "description": "Soundful empowers creators to generate royalty free tracks at the click of a button. The quality of Soundful music is so rich, you won't believe it was made with AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Steve AI",
        "link": "https://www.steve.ai/",
        "description": "With our patented AI technology, you can make professional videos in MINUTES. See the MAGIC happen as the AI picks the right creative media assets for your Video.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "SuenaGringo AI",
        "link": "https://suenagringo.com/",
        "description": "Escribe inglÃ©s con confianza y rompe las barreras.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Suggest Gift",
        "link": "https://suggest.gift/",
        "description": "Artificial Intelligence based tool to help you get amazing gift suggestions for any occasion.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Summarize Tech",
        "link": "https://www.summarize.tech/",
        "description": "Get a summary of any long YouTube video, like a lecture, live event or a government meeting. Powered by GPT-3.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Summon",
        "link": "https://www.figma.com/",
        "description": "Build better products as a team. Design, prototype, and gather feedback all in one place with Figma.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Super Prompt",
        "link": "https://superprompts.com/",
        "description": "Create a gallery for your AI art. Next time someone asks to see all your art, you'll have somewhere to point them to. Showcase all your AI art in one place.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Supermeme.ai",
        "link": "https://www.supermeme.ai/",
        "description": "Generate original AI memes in 110+ language by entering any text input and turning that into a shareable memes. Powered by GPT-3 and a custom built meme database.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "TLDR This",
        "link": "https://tldrthis.com/",
        "description": "This helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Teacherbot",
        "link": "https://teacherbot.io/",
        "description": "We have developed the most powerful tool a teacher can have access to. You can create tasks and activities for all levels as well as topic plans, forward plans, lesson plans and much more. You are limited only by your imagination.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Text Assistant",
        "link": "https://goodsnooze.gumroad.com/",
        "description": ".",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Textunbox",
        "link": "https://textunbox.app/",
        "description": "TextUnbox - harness the power of AI!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Thiscampsitedoesnotexist",
        "link": "https://thiscampsitedoesnotexist.com/",
        "description": "AI generated campsites featuring stunning locations, tents, and weather all created by AI using stable diffusion.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Thumbsnap",
        "link": "https://art.thumbsnap.com/",
        "description": "ThumbSnap: Free Photo and Video Sharing.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Titan",
        "link": "https://www.compliancequarter.com.au/",
        "description": "Regulatory compliance management system and expertise for energy, financial services and other regulated industries. We offer expert systems and services to take regulatory burden off your shoulders.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ToWords",
        "link": "https://www.towords.io/",
        "description": "Make your videos and audio come alive with written words.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "tweetai",
        "link": "https://tweetai.com/",
        "description": "tweet ai.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "tweethunter",
        "link": "https://tweethunter.io/",
        "description": "get sales, growth and new networks. faster than what you're currently trying.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Diffbot",
        "link": "https://www.diffbot.com/",
        "description": "Web Data without Web Scraping, Query a trillion pieces of connected content across the web or extract them on demand with Diffbot.",
        "free?": "❌",
        "category": "other"
    },
    {
        "name": "tweetspear",
        "link": "https://www.tweetspear.com/",
        "description": "revolutionize your twitter engagement with  ai-powered suggested replies .",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "typestudio",
        "link": "https://www.typestudio.co/",
        "description": "type studio is a fast, simple, and joyful way to edit and growyour podcasts, streams, and interviews.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "typly",
        "link": "https://typly.app/",
        "description": "typly is the ultimate cutting edge ai keyboard that helps you to answer all your messages with a single click!🚀.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "usp",
        "link": "https://usp.ai/",
        "description": "awesome ai generated royalty free images for your stories and blog posts.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Userevaluation",
        "link": "https://www.userevaluation.com/",
        "description": "Whether you're focused on UI, UX Research, Design, or CX â�� User Evaluation's AI can answer all your questions.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Vee",
        "link": "https://vee.ai/",
        "description": "Vee has already spoken with 5 million Poles, effectively implementing business processes for dozens of companies from various industries. Vee przeprowadziła rozmowy już z ponad 5 milionami Polaków, skutecznie realizując procesy biznesowe dla dziesiątek firm z różnych branż.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Versational",
        "link": "https://www.versational.ai/",
        "description": "Versational maximizes the value said in every conversation. Get AI conversation results for free. Versational transcribes, summarizes, automates data entry, extracts takeaways, lets you share clips, and shows ways to improve your conversations.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Vidyo",
        "link": "https://vidyo.ai/",
        "description": "Create social ready short clips from your videos with AI ✨ Save 90% time and effort.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Viral Post Generator",
        "link": "https://viralpostgenerator.taplio.com/",
        "description": "Go mega-viral on Linkedin - Generate a successful post with the power of AI.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Visuali",
        "link": "https://visuali.io/",
        "description": "AI image generation made easy.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Voicemod",
        "link": "https://www.voicemod.net/",
        "description": "Express yourself with our real-time AI Voice Changer and soundboard to be who you want, when you want in the metaverse. Build your sonic identity for platforms like Roblox, OBS, VRChat, Discord, and more.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Waifulabs",
        "link": "https://waifulabs.com/",
        "description": "A state-of-the-art AI that draws custom anime portraits, just for you! This machine learning artist figures out your preferences and creates a perfect character illustration in 4 easy steps. If it sounds like magic, that's because it is!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "WardrobeAI",
        "link": "https://wardrobeai.com/",
        "description": "Our service uses AI to automatically change hairstyles and clothes in your images, giving you endless possibilities for customization.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Watermark Remover",
        "link": "https://www.watermarkremover.io/",
        "description": "Get rid of the watermarks from your images using our powerful AI technology.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "Write A Thank You",
        "link": "https://thankyounote.app/",
        "description": "Write the perfect thank you note for any occasion! Whether you need to thank a friend, family member, or business associate, we have the perfect words for you. Try it!.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Writer",
        "link": "https://writer.com/",
        "description": "World-class companies use Writer's AI writing platform to unlock on-brand content at scale.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Yepic AI",
        "link": "https://www.yepic.ai/",
        "description": "Create, Dub and Personalise Videos Anywhere.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "ai2sql",
        "link": "https://www.ai2sql.io/",
        "description": "With AI2sql, engineers and non-engineers can easily write efficient, error-free SQL queries without knowing SQL. It's time to take back your time!.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "micro Dalle-2",
        "link": "https://micropay.ai/",
        "description": "Anonymous and pay-as-you-go generative AI software.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Aleph Alpha",
        "link": "https://www.aleph-alpha.com/",
        "description": "Pioneering sovereign, European AI technology to transform human-machine interaction that can find solutions for the challenges of tomorrow.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Lobe",
        "link": "https://www.lobe.ai/",
        "description": "Lobe helps you train machine learning models with a free, easy to use tool.",
        "free?": "❔",
        "category": "other"
    },
    {
        "name": "Siwalu Software",
        "link": "https://siwalusoftware.com/",
        "description": "Siwalu develops AI-based image recognition. Our apps are a smart mobile solution to better understand animals and to learn about the diversity of nature.",
        "free?": "✅",
        "category": "other"
    },
    {
        "name": "emma",
        "link": "https://www.emma.ai/",
        "description": "automatically calculates and adds meeting travel time",
        "free?": "❌",
        "category": "travel"
    },
    {
        "name": "spatial",
        "link": "https://www.spatial.ai/",
        "description": "predict and influence customer behavior with the world's first real-time social media segmentation system.",
        "free?": "❌",
        "category": "travel"
    },
    {
        "name": "iplan",
        "link": "https://iplan.ai/",
        "description": "YOUR SMART TRAVEL PLANNER create your smart itinerary with the help of artificial intelligence",
        "free?": "✅",
        "category": "travel"
    },
    {
        "name": "abe.ai",
        "link": "https://www.abe.ai/",
        "description": "abe.ai gives financial institutions the ultimate solution by delivering pre-built, white-label virtual financial assistants or a conversational ai platform allowing them to engage customers in the language and channels they prefer.",
        "free?": "❌",
        "category": "finance"
    },
    {
        "name": "bond",
        "link": "https://bond.ai/",
        "description": "powered by the world's first empathy engine®, the bond network is a first-of-its-kind network of financial institutions and employers for truly interconnected finance. it provides singular tools to boost the profitability of your institution and your peoples’ financial health on one supercharged network.",
        "free?": "❌",
        "category": "finance"
    },
    {
        "name": "stockpredictionai",
        "link": "https://github.com/borisbanushev/stockpredictionai",
        "description": "a complete process for predicting stock price movements",
        "free?": "✅",
        "category": "finance"
    },
    {
        "name": "finrl",
        "link": "https://github.com/ai4finance-foundation/finrl-trading",
        "description": "a deep reinforcement learning library for automated stock trading in quantitative finance.",
        "free?": "✅",
        "category": "finance"
    },
    {
        "name": "openai gym",
        "link": "https://github.com/hackthemarket/gym-trading",
        "description": "environment for reinforcement-learning algorithmic trading models.",
        "free?": "✅",
        "category": "finance"
    },
    {
        "name": "sgx-full-orderbook-tick-data-trading-strategy",
        "link": "https://github.com/rorysroes/sgx-full-orderbook-tick-data-trading-strategy",
        "description": "providing the solutions for high-frequency trading (hft) strategies using data science approaches (machine learning) on full orderbook tick data.",
        "free?": "✅",
        "category": "finance"
    },
    {
        "name": "quant-trading",
        "link": "https://github.com/je-suis-tm/quant-trading",
        "description": "python quantitative trading strategies including vix calculator, pattern recognition, commodity trading advisor, monte carlo, options straddle, shooting star, london breakout, heikin-ashi, pair trading, rsi, bollinger bands, parabolic sar, dual thrust, awesome, macd",
        "free?": "✅",
        "category": "finance"
    },
    {
        "name": "DetectGPT",
        "link": "https://detectgpt.ericmitchell.ai/",
        "description": "DetectGPT is a general-purpose method for using a language model to detect its own generations; however, this proof-of-concept only detects if a particular piece of text came from GPT-2.",
        "free?": "✅",
        "category": "detecting ai"
    },
    {
        "name": "GPTZero",
        "link": "https://gptzero.me/",
        "description": "Humans Deserve the Truth ... Our engineers can also customize endpoints to your needs.",
        "free?": "✅",
        "category": "detecting ai"
    },
    {
        "name": "Originality.AI",
        "link": "https://originality.ai/",
        "description": "A Plagiarism Checker and AI Detector Built for Serious Content Publishers",
        "free?": "❌",
        "category": "detecting ai"
    },
    {
        "name": "Winston",
        "link": "https://gowinston.ai/",
        "description": "The most powerful AI content detection solution",
        "free?": "✅",
        "category": "detecting ai"
    },
    {
        "name": "Checkforai",
        "link": "https://checkforai.com/",
        "description": "Detect AI Written Text in Essays, Emails, and More!",
        "free?": "❔",
        "category": "detecting ai"
    },
    {
        "name": "AI Text Classifier",
        "link": "https://platform.openai.com/ai-text-classifier",
        "description": "The AI Text Classifier is a fine-tuned GPT model that predicts how likely it is that a piece of text was generated by AI from a variety of sources, such as ChatGPT.",
        "free?": "✅",
        "category": "detecting ai"
    }
]

export default data
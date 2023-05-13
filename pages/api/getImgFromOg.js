const fetchOpengraph = require('fetch-opengraph');

export default async function handler(req, res) {

    if (req.method !== "POST") {
        throw new Error("this method is not allowed!")
    }

    const url = req.body.url

    const data = await fetchOpengraph.fetch(url);

    res.status(200).json({ img: data["og:image"] })
}
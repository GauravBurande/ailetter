import fs from "fs"

export default async function handler(req, res) {

    if (req.method !== "POST") {
        res.status(403).json({ error: true, message: "This method is not allowed!" });
        throw new Error("this method is not allowed!")
    }

    const toolSlug = req.body.finalSlug

    // Read the existing toolSlugs file
    fs.readFile('toolSlugs.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const modifiedFile = data.replace(/(const\s+toolSlugs\s*=\s*\[)([\s\S]*?)(\];?)/, (match, p1, p2, p3) => {
            const arrayContent = p2.trim(); // Get the existing array elements
            const newArrayContent = `${arrayContent}, \n\t"/tools/${toolSlug}"`; // Append the new element

            return `${p1}${newArrayContent}${p3}`; // Return the modified array
        });

        // Write the updated data back to the file
        fs.writeFile("toolSlugs.js", modifiedFile, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });

    res.status(200).json({ success: true, message: "tool slug adde to the file successfully!" });
}
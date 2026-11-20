async function localChat(prompt) {
    const response = await fetch(
        "http://localhost:11434/api/chat",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gemma3:1b",
                messages: [
                    { role: "user", content: prompt }
                ],
                stream: false
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(JSON.stringify(data));
    }

    return data.message.content;
}

localChat("Suggest three dishes with carrots.")
    .then(console.log)
    .catch(console.error);
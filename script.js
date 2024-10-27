// script.js

function suggestGames() {
    const selectedItems = Array.from(document.querySelectorAll('input[name="items"]:checked')).map(item => item.value);
    const gameSuggestions = document.getElementById("gameSuggestions");
    const resultSection = document.getElementById("resultSection");

    gameSuggestions.innerHTML = ""; // Clear previous suggestions

    // Game suggestions with YouTube links
    const games = {
        paper: [
            { title: "Paper Airplane Contest", videoUrl: "https://youtu.be/G7ec7qCHwzc?si=KFnuTZqiZ-oEbLZB" },
            { title: "Draw and Color", videoUrl: "https://www.youtube.com/watch?v=w0gY9hZOkZc" }
        ],
        crayons: [
            { title: "Coloring Adventure", videoUrl: "https://www.youtube.com/watch?v=5FgoF6L51mI" },
            { title: "Draw Family Portraits", videoUrl: "https://www.youtube.com/watch?v=Q3aeQybo_Yo" }
        ],
        pillows: [
            { title: "Pillow Fort", videoUrl: "https://www.youtube.com/watch?v=lKU8HLEkVxw" },
            { title: "Obstacle Course", videoUrl: "https://www.youtube.com/watch?v=1XY3IBTKJUg" }
        ],
        cardboard: [
            { title: "Box Maze", videoUrl: "https://www.youtube.com/watch?v=jml6C6TX0zI" },
            { title: "Decorate a Playhouse", videoUrl: "https://www.youtube.com/watch?v=zPMyUtXh5Gg" }
        ],
        "plastic-bottles": [
            { title: "Bottle Bowling", videoUrl: "https://www.youtube.com/watch?v=d3K3Bu6NwLk" },
            { title: "Water Bottle Tower", videoUrl: "https://www.youtube.com/watch?v=AXz25NkRRHU" }
        ],
        "paper+crayons": [
            { title: "Draw a Treasure Map", videoUrl: "https://www.youtube.com/watch?v=_z15jDLXSrE" },
            { title: "Color and Fold Animals", videoUrl: "https://www.youtube.com/watch?v=5OFv5L4a8gE" }
        ],
        "paper+cardboard": [
            { title: "Create a Cardboard Town", videoUrl: "https://www.youtube.com/watch?v=cU1ALRHgT7E" },
            { title: "Paper and Cardboard Collage", videoUrl: "https://www.youtube.com/watch?v=HmhA1sbnxPo" }
        ],
        "pillows+cardboard": [
            { title: "Pillow & Cardboard Fort", videoUrl: "https://www.youtube.com/watch?v=GejxiB6HYtM" },
            { title: "Cardboard Slide", videoUrl: "https://www.youtube.com/watch?v=RXYRZ0HT9rU" }
        ],
        "crayons+cardboard": [
            { title: "Decorate a Cardboard Castle", videoUrl: "https://www.youtube.com/watch?v=QZx_0D9VBrA" },
            { title: "Draw and Cut Shapes", videoUrl: "https://www.youtube.com/watch?v=sZxYkGVcza8" }
        ]
    };

    // Generate game ideas based on selected items
    if (selectedItems.length === 0) {
        gameSuggestions.innerHTML = "<p>Please select at least one item to see game ideas!</p>";
    } else {
        selectedItems.forEach(item => {
            const gameIdeas = games[item] || [];
            gameIdeas.forEach(({ title, videoUrl }) => {
                const gameItem = document.createElement("div");
                gameItem.classList.add("game-idea");
                gameItem.innerHTML = `<p><strong>${title}</strong>: Click to watch tutorial!</p>`;
                gameItem.onclick = () => window.open(videoUrl, "_blank"); // Open video in new tab
                gameSuggestions.appendChild(gameItem);
            });
        });

        // Check for item combinations
        for (let i = 0; i < selectedItems.length; i++) {
            for (let j = i + 1; j < selectedItems.length; j++) {
                const combination = `${selectedItems[i]}+${selectedItems[j]}`;
                const comboGameIdeas = games[combination] || [];

                comboGameIdeas.forEach(({ title, videoUrl }) => {
                    const gameItem = document.createElement("div");
                    gameItem.classList.add("game-idea");
                    gameItem.innerHTML = `<p><strong>${title}</strong>: Click to watch tutorial!</p>`;
                    gameItem.onclick = () => window.open(videoUrl, "_blank"); // Open video in new tab
                    gameSuggestions.appendChild(gameItem);
                });
            }
        }
    }

    resultSection.classList.remove("hidden");
}

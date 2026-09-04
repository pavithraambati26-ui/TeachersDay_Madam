/* =========================================
   SCENE NAVIGATION
========================================= */

function nextScene(sceneNumber) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const target = document.getElementById("scene" + sceneNumber);

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   ML TRAINING
========================================= */

function startTraining() {

    const button = document.getElementById("trainButton");
    const area = document.getElementById("trainingArea");

    button.disabled = true;

    button.innerText = "TRAINING... 🧠";

    area.innerHTML = `
        <div class="training-box">

            <p class="training-text">
                Training Madam Model...
            </p>

            <div class="progress-container">

                <div id="progressBar"
                     class="progress-bar">
                </div>

            </div>

            <p id="progressText">
                0%
            </p>

        </div>
    `;

    let progress = 0;

    const interval = setInterval(() => {

        progress += 2;

        const bar = document.getElementById("progressBar");
        const text = document.getElementById("progressText");

        if (bar) {
            bar.style.width = progress + "%";
        }

        if (text) {
            text.innerText = progress + "%";
        }

        if (progress >= 100) {

            clearInterval(interval);

            area.innerHTML = `

                <div class="training-complete">

                    <h2>Training Complete ✔️</h2>

                    <p>
                        Model has learned the available features.
                    </p>

                    <p>
                        Ready to make a prediction... 🔮
                    </p>

                    <button onclick="nextScene(5)">
                        VIEW MODEL OUTPUT →
                    </button>

                </div>

            `;

        }

    }, 45);

}


/* =========================================
   ML PREDICTION
========================================= */

function showPrediction() {

    const button =
        document.getElementById("predictionButton");

    const result =
        document.getElementById("predictionResult");

    button.style.display = "none";

    result.innerHTML = "";

    const predictions = [

        ["Knowledge", 96],
        ["Way of Teaching", 95],
        ["Smile", 93],
        ["Clear Communication", 96],
        ["Understanding Students", 94],
        ["Encouragement", 92],
        ["Experience", 97],
        ["Knowledge Sharing", 95]

    ];

    predictions.forEach((item, index) => {

        setTimeout(() => {

            const card =
                document.createElement("div");

            card.className = "prediction-card";

            card.innerHTML = `

                <div class="prediction-top">

                    <strong>${item[0]}</strong>

                    <span>${item[1]}%</span>

                </div>

                <div class="prediction-bar">

                    <div class="prediction-fill"
                         style="--width:${item[1]}%">
                    </div>

                </div>

            `;

            result.appendChild(card);

        }, index * 300);

    });


    setTimeout(() => {

        const final =
            document.createElement("div");

        final.className = "final-prediction";

        final.innerHTML = `

            <h2>❤️ FINAL PREDICTION</h2>

            <p>
                A teacher with her own unique way
                of teaching, communicating
                and connecting.
            </p>

            <p class="confidence">
                APPRECIATION CONFIDENCE = 100%
            </p>

        `;

        result.appendChild(final);

        document.getElementById("predictionNext")
            .style.display = "inline-block";

    }, predictions.length * 300 + 700);

}


/* =========================================
   SENTIMENT ANALYSIS
========================================= */

function analyzeSentiment() {

    const button =
        document.getElementById("sentimentButton");

    const result =
        document.getElementById("sentimentResult");

    button.disabled = true;

    button.innerText = "ANALYSING...";

    result.innerHTML = `

        <div class="sentiment-box">

            <div class="sentiment-step">
                Tokenizing... ✓
            </div>

        </div>

    `;

    setTimeout(() => {

        result.querySelector(".sentiment-box")
            .innerHTML += `

                <div class="sentiment-step">
                    Understanding Context... ✓
                </div>

            `;

    }, 800);


    setTimeout(() => {

        result.querySelector(".sentiment-box")
            .innerHTML += `

                <div class="sentiment-step">
                    Detecting Emotion... ✓
                </div>

            `;

    }, 1600);


    setTimeout(() => {

        result.innerHTML += `

            <div class="sentiment-success">

                <div class="positive">
                    POSITIVE ❤️
                </div>

                <p>
                    Gratitude • Respect • Appreciation • Warmth
                </p>

                <p>
                    Some feelings don't need
                    complicated algorithms.
                </p>

                <strong>
                    Sometimes "Thank You" is enough.
                </strong>

            </div>

        `;

        document.getElementById("sentimentNext")
            .style.display = "inline-block";

        button.innerText = "ANALYSIS COMPLETE ✓";

    }, 2400);

}


/* =========================================
   AUDIO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const song =
        document.getElementById("madamSong");

    const status =
        document.getElementById("audioStatus");


    if (!song) return;


    /*
       AUDIO LOADING
    */

    song.addEventListener("loadedmetadata", function () {

        if (status) {

            status.innerText =
                "🎵 Song loaded successfully — enjoy! ❤️";

        }

    });


    /*
       AUDIO ERROR
    */

    song.addEventListener("error", function () {

        if (status) {

            status.innerText =
                "⚠️ Audio couldn't be loaded. Please check audio/song.mpeg";

            status.style.color = "#a65b5b";

        }

    });


    /*
       WHEN SONG ENDS
    */

    song.addEventListener("ended", function () {

        if (status) {

            status.innerText =
                "❤️ Hope you enjoyed the song, Madam.";

        }

        setTimeout(() => {

            nextScene(12);

        }, 1800);

    });

});


/* =========================================
   CONTINUE FROM SONG
========================================= */

function continueFromSong() {

    const song =
        document.getElementById("madamSong");

    /*
       If song is currently playing,
       stop it before moving.
    */

    if (song && !song.paused) {

        song.pause();

    }

    nextScene(12);

    createConfetti();

}


/* =========================================
   CAKE CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🌷",
        "✨",
        "❤️",
        "🌿",
        "🎉",
        "💚",
        "⭐"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}


/* =========================================
   CAKE → LETTER
========================================= */

document.addEventListener("click", function (event) {

    if (
        event.target.innerText &&
        event.target.innerText.includes(
            "OPEN MY LAST MESSAGE"
        )
    ) {

        createConfetti();

    }

});


/* =========================================
   BUTTON EFFECT
========================================= */

document.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        event.target.style.transform =
            "scale(.96)";

        setTimeout(() => {

            event.target.style.transform =
                "";

        }, 120);

    }

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "PAVITHRA.EXE ❤️ — Made especially for Sheela Madam."
);

console.log(
    "ML + NLP + Creativity = One Little Surprise 🌷"
);

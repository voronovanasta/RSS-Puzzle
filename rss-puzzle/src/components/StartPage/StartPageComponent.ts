const StartPageComponent = () => `<div class="start-wrapper">
    <h1>Puzzle</h1>
    <div id="description" class="description-field">
    <p id="description-content" class="content-field"></p>
</div>
<a href="/game" class="button startBtn target-link" id = "game">Start Game</a>
<a href="/" class="logout target-link">
<span class="material-symbols-outlined" id = "logoutBtn">logout</span>
</a>
</div>`;

export default StartPageComponent;

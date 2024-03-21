const StartPageComponent = () => `<div class="start-wrapper">
    <h3>English Puzzle</h3>
    <p class="greeting">Welcome, <span id="greeting-name"></span><span id="greeting-surname"></span>!</p>
    <div id="description" class="description-field">
    <p id="description-content" class="content-field">By clicking on words you collects phrases. Use drag and drop, tooltips in the menu  provides you with assistance.
    </p>
</div>
<a href="/game" class="button startBtn target-link" id = "game">Start Game</a>
<a href="/" class="logout target-link">
<span class="material-symbols-outlined" id = "logoutBtn">logout</span>
</a>
</div>`;

export default StartPageComponent;

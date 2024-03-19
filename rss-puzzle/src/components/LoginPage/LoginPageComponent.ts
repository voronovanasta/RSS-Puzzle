const LoginPageComponent = () => `<div id="login" class="login">
    <h1>Puzzle</h1><h3>Registration</h3>
    <form id="login-form" class="login-form">
       <div class="item">
           <label for="name">Name</label>
           <input id="name" class="input-login" name="name" type="text" autocomplete="on" required>
        </div>
        <div class="item">
            <label for="surname">Surname</label>
            <input id="surname" class="input-login" name="surname" type="text" autocomplete="on" required>
        </div>
        <div id="loginMessage" class="login-form-error">
            <div id="errorLoginMessage" class="errorlabel"></div>
        </div>
        <button class="button" id="btnLogin" type="button">Log in</button>
    </form>
</div>`;

export default LoginPageComponent;

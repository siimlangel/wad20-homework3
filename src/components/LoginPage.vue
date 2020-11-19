<template>
   <section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form @submit.prevent>
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button class="button" type="submit" name="login"><router-link :to="{ name: 'MainPage' }">Log In</router-link></button>
            </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
</template>

<script>
export default {
    name: "LoginPage",
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
  
    a {
        color: #40c4ff;
    }

    .login-page {
        font-family: "Roboto Slab", serif;
        outline: none;
        font-weight:bold;
        background-color: #0277bd;
        color: #263238;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #login-container {
        background-image: url("../../images/logo.png");
        background-size: 20% auto;
        background-repeat: no-repeat;
        background-position: 15px 15px;
        min-width: 25%;
        padding: 45px 45px;
        background-color: #ffffff;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        text-align: center;
    }

    #login-container form div > input {
        padding: 8px 16px;
        margin: 4px 0;
    }
</style>
<template>
  <nav>
        <div class="logo-container">
          <img src="../../images/logo.png" alt="postIt" />
        </div>
        <div class="search-container">
          <input type="text" name="search" /><button type="button">
            Search
          </button>
        </div>
        <div class="avatar-container">
          <img src="../../images/avatar.png" class="avatar" alt="Me">
          <div class="dropdown-container">
            <div>
              <p id="user-username">name</p>
              <p id="user-email">email</p>
            </div>
            <div>
              <a href="browse.html">Browse</a>

            </div>
            <div>

              <a href="login.html">Log Out</a>

            </div>
          </div>
        </div>
      </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
    }
    header:hover {
        box-shadow: 0 -20px 30px #4d4d4d;
    }
    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    nav div {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
    }

    nav div img {
        height: 100%;
        width: 30px;
        margin-left: 15px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top center;
    }

    nav div.search-container > input {
        box-sizing: border-box;
        height: 30px;
        width: 80%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    nav div.avatar-container {
        margin-right: 15px;
        text-align: right;
        position: relative;
    }

    .dropdown-container {
        position: absolute;
        background-color: white;
        z-index: -1;
        display: none;
        height: 300%;
    }

    .dropdown-container.open {
        padding: 0;
        /* need to consider parent's margin right */
        right: -15px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        animation-name: avatar-dropdown;
        animation-duration: 250ms;
    }

    .dropdown-container.open > div {
        width: 100%;
        height: 30%;
        text-align: left;
        border-bottom: solid black 1px;
    }

    .dropdown-container.open > div > p {
        margin: 0;
    }

    @keyframes avatar-dropdown {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(height);
        }
}

</style>
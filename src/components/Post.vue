<template>
    <div class="post">
        <div class="post-author">
            <span class="post-author-info">
                <img id="image" :src=this.post.author.avatar>
                <small>{{ authorName }}</small>
            </span>
            <small>{{ timestamp }}</small>
        </div>

        <div class="post-image" v-if="!this.post.media">

        </div>
        <div class="post-image" v-else-if="this.post.media.type == 'image'">
            <img :src="this.post.media.url">
        </div>
        <div class="post-image" v-else-if="this.post.media.type == 'video'">
            <video controls :src="this.post.media.url" />
        </div>

        <div class="post-title" v-if="postText">
            <h3>{{ postText }}</h3>
        </div>

        <div class="post-actions">
            <button 
                type="button" 
                name="like" 
                @click="likeActive = !likeActive"
                :class="[ this.likeActive ? 'like-button liked' : 'like-button' ]"
                >
                {{likes}}</button>
        </div>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            firstname: this.post.author.firstname,
            lastname: this.post.author.lastname,
            postText: this.post.text,
            likes: this.post.likes,
            likeActive: false
        }
    },
    props: {
        post: Object
    },
    computed: {
        authorName() {
            return this.firstname + ' ' + this.lastname
        },
        timestamp() {
            return this.post.createTime
        }
    },
}
</script>

<style scoped>
    .post {
        width: 80%;
        margin: 15px auto;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        border-radius: 5px;
    }

    .post .post-author {
        padding: 10px;
    }

    .post .post-author::after {
        content: "";
        display: block;
        clear: both;
    }

    .post .post-author .post-author-info {
        float: left;
        position: relative;
        width: 50%;
    }

    .post .post-author .post-author-info img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .post .post-author .post-author-info small {
        position: absolute;
        top: 10px;
        left: 40px;
    }

    .post .post-author .post-author-info + small {
        float: right;
        color: grey;
        right: 10px;
        padding: 10px;
    }

    .post .post-image img {
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
    }

    .post .post-image video {
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
    }

    .post .post-title {
        padding: 10px;
    }

    .post .post-title h3 {
        display: inline;
    }

    .post .post-title ~ .post-actions {
        padding: 10px;
    }

    .like-button {
        background-image: url('../../images/like.png');
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: 5px center;
        background-color: #8a8a8a;
        width: 60px;
        height: 25px;
        padding-left: 23px;
        line-height: 10px;
        text-align: left;
        border: none;
    }

    .like-button.liked {
        background-color: #01579b;
    }

</style>
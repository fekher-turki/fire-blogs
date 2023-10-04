<template>
  <div class="home">
    <BlogPostView v-if="!user" :post="welcomeScreen" />
    <BlogPostView v-for="(post, index) in sampleBlogPost" :key="index" :post="post" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCardView v-for="(post, index) in sampleBlogCards" :key="index" :post="post" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="update">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs <img :src="arrow" class="arrow arrow-light">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostView from '../components/BlogPostView.vue'
import BlogCardView from '../components/BlogCardView.vue'

export default {
  name: "HomeView",
  components: {
    BlogPostView, BlogCardView
  },
  data() {
    return {
      arrow: require('../assets/Icons/arrow-right-light.svg'),
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "this is a Filtered Title!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "this is a Filtered Title 2!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
      return this.$store.state.user;
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.update {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
  }

  .router-button {
    display: flex;
    font-size: 14px;
    text-decoration: none;

    @media (min-width: 800px) {
      margin-left: auto;
    }
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 800px) {
      text-align: initial;
      font-size: 40px;
    }
  }
}
</style>
<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{ name: 'login' }">Login</router-link>
            </p>
            <h2>Create your FireBlog account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <img :src="userIcon" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                    <img :src="userIcon" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                    <img :src="userIcon" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <img :src="emailIcon" class="icon">
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                    <img :src="passwordIcon" class="icon">
                </div>
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
            </div>
            <button @click.prevent="register">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
    name: "RegisterView",
    data() {
        return {
            emailIcon: require('../assets/Icons/envelope-regular.svg'),
            passwordIcon: require('../assets/Icons/lock-alt-solid.svg'),
            userIcon: require('../assets/Icons/user-alt-light.svg'),
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        }
    },
    methods: {
        async register() {
            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email,
                });
                this.$router.push({ name: 'home' });
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields!";
            return;
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
    h2 {
        max-width: 350px;
    }
}
</style>
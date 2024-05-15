<template>
    <div class="limiter" id="login">
        <div class="container-login100"
            style="background-image:url(https://image.freepik.com/free-photo/happy-woman-doing-online-shopping-home_329181-4301.jpg)">
            <div class="container">
                <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-5 col-md-offset-1">
                        <div class="login_topimg">
                        </div>
                        <div class="wrap-login100">
                            <span class="login100-form-title "> Login </span>
                            <form class="login100-form validate-form" @submit.prevent="login">
                                <div class="wrap-input100 validate-input m-b-16"
                                    data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" id="loginUsername" v-model="loginForm.username"
                                        placeholder="Username">
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <span class="glyphicon glyphicon-user"></span>
                                    </span>
                                </div>
                                <div class="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                    <input class="input100" type="password" id="loginPassword"
                                        v-model="loginForm.password" placeholder="Password">
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <span class="glyphicon glyphicon-lock"></span>
                                    </span>
                                </div>

                                <div class="container-login100-form-btn p-t-25">
                                    <button type="submit" class="login100-form-btn">Login</button>
                                </div>
                                <!-- Hiển thị thông báo khi đăng nhập không thành công -->
                                <div v-if="error" class="alert alert-danger mt-3" role="alert">
                                    {{ error }}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LoginAdmin',
    props: {
        msg: String
    },
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            error: '' // Thêm biến error để lưu thông báo lỗi
        };
    },
    methods: {
        async login() {
            if (!this.loginForm.username || !this.loginForm.password) {
                this.error = 'Username and password are required!';
                return;
            }

            try {
                var url = `${process.env.VUE_APP_BASE_API_URL}/Authentications/Login`;
                const response = await axios.post(url, {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                });

                console.log(response);


                if (response.status === 200) {
                    console.log('Đăng nhập thành công:', response.data);
                    localStorage.setItem('token', response.data.token);
                    this.$router.push('/admin').then(() => {
                        window.location.reload();
                    });
                } else if (response.status === 400) {
                    console.error('Đăng nhập không thành công:', response.response.data);
                    if (response.response.data) {
                        this.error = response.response.data; // Sử dụng thông báo lỗi từ API
                    } else {
                        this.error = 'Unknown error occurred!'; // Nếu không có thông báo lỗi từ API
                    }
                } else {
                    console.error('Đăng nhập không thành công:', response.statusText);
                    this.error = 'Unknown error occurred!'; // Hiển thị thông báo lỗi mặc định
                }

            } catch (error) {
                console.error('Đã xảy ra lỗi khi đăng nhập:', error);
                this.error = error.response.data; // Hiển thị thông báo lỗi khi có lỗi trong quá trình đăng nhập
            }
        }
    },

    created() {
        console.log('Component created');
    }
}

</script>
<style scoped>
@import '@/assets/loginadmin.css';
</style>
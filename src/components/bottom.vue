<template>
    <footer>
    <div class="container section">
        <div class="footer-social">
            <span class="social-item">
                <a href="" target="_blank"><i class="fa fa-facebook round-icon"> Facebook</i></a>
            </span>
            <span class="social-item">
                <a href="" target="_blank"><i class="fa fa-twitter round-icon"> Twitter</i></a>
            </span>
            <span class="social-item">
                <a href="" target="_blank"><i class="fa fa-google-plus round-icon"> Google Plus</i></a>
            </span>
            <span class="social-item">
                <a href="" target="_blank"><i class="fa fa-instagram round-icon"> Instagram</i></a>
            </span>
            <span class="social-item">
                <a href="" target="_blank"><i class="fa fa-pinterest round-icon"> Pinterest</i></a>
            </span>
        </div>
    </div>
<span class="copyright"><p>Created By <a href="">Cynthia Ilojeme</a></p></span>
</footer>
</template>

<style scoped>
footer {
    background: #333;
    padding: 30px 0 40px 0;
    width: 100%;
    height: 200px;
}
.footer-social {
    text-align: center;
    padding-bottom: 30px;
    margin-bottom: 35px;
}
span.social-item a{
    color: #555;
    padding: 30px;
}
span.social-item a:hover {
    color: #4fb8a6;
}
span.copyright p {
    color: #555;
    text-align: center;
}
span.copyright p>a {
    color: #4fb8a6;
    text-align: center;
}
.container {
    @media only screen and (max-width: 1250px) and (min-width: 981px) {
    width: 980px;
    margin: 0 auto;
    }
}
</style>
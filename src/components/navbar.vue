<template>
    <nav class="fixed-top">
        <ul class="left">
            <li>SMART BLOG</li>
        </ul>

        <ul class="right">
            <li><router-link :to="{name: 'home'}" class="home">HOME</router-link></li>
            <li><router-link :to="{name: 'admin'}" class="admin">ADMIN</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default{
    name:"navbar",
    mounted() {
        $(document).scroll(function(){
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
}
};
</script>

<style scoped>
nav {
    background-color: #FFFFFF;
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    text-align: center;
    transition: .5s;
}
nav ul {
    list-style-type: none;
    display:inline-block;
    color: #000000;
    cursor: pointer;
    transition: .5s;
}
nav li {
    display: inline-block;
    margin-top: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
}
nav>li.right.router-link-exact-active {
  color: #1070E1;
}
.fixed-top.scrolled{
    color: #000000 !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: background-color 200ms linear;
}
.left {
    float: left;
    margin-left: 10px;
    font-size: 18px;
}
.right {
    float: right;
    margin-right: 55px;
}
.home {
    color: #000000;
    text-decoration: none;
}
.admin {
    margin-left: 40px;
    color: #000000;
    text-decoration: none;
}

.admin:hover, .home:hover {
    color: #1070E1;
}
</style>
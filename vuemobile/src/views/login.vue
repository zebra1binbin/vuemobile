<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png"/>
            </div>
            <mt-field class="login_username" label="用户名" placeholder="请输入用户名" ></mt-field>
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login_container{
    background-color:cadetblue;
    height: 100%;
    width: 100%;
}
.login_box{
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); 

    .avatar_box{
    height: 130px;
    width: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding:10px;
    box-shadow:0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%); 
    background-color:#fff;
    img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_username{
    margin-top: 100px;
}

</style>
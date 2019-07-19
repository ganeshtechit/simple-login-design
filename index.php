<?php $menu_id = 1?>
<?php require_once('include/header.php') ?>

<section class="signin">
    <div class="container clearfix">
        <div class="webspa">
            <div class="makesin">
                <h4>[Product-Name] Makes <br><span>your Business</span> Better</h4>
            </div>
        </div>
        <div class="signinform">
            <div class="signFM">
                <h4>Login</h4>
                <p>or use your email account:</p>
                <form action="POST">
                    <ul class="conta-sign clearfix">
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-envelope-o" aria-hidden="true"></i></p>
                                <input type="email" name="email" value="" required="" placeholder="E-Mail / Phone number">
                            </label>
                            <p class="error hide">E-mail field is required</p>
                        </li>
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></p>
                                <input type="password" name="password" value="" required="" placeholder="Password">
                            </label>
                            <p class="error hide">Password field is required</p>
                        </li>
                        <li class="submitSetin clearfix">
                            <button class="f-left submitbuttonsi">Login</button>
                            <p class="forgotpass f-right"><a href="javascript:void(0);">Forgot Password?</a></p>
                        </li>
                    </ul>
                    <p class="alACCS">Don't have an account yet? <a class="transition" href="signup.php"> Sign Up</a> </p>
                </form>
            </div>
        </div>
    </div>
    <div class="bottimg">
        <img class="responsive" src="images/bannerimg.png" alt="demo">
    </div>
</section>

<?php require_once('include/footer.php') ?>

<?php $menu_id = 2?>
<?php require_once('include/header.php') ?>

<section class="banner">
    <div class="container clearfix">
        <div class="webspa">
            <div class="makes">
                <h4>[Product-Name] Makes <br><span>your Business</span> Better</h4>
            </div>
        </div>
        <div class="register">
            <div class="webform">
                <h4>Register</h4>
                <p>or use your email for registration</p>
                <form action="POST">
                    <ul class="conta-form clearfix">
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-user-o" aria-hidden="true"></i></p>
                                <input type="text" name="user_name" value="" required="" placeholder="Name">
                            </label>
                            <p class="error hide">Name field is required</p>
                        </li>
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-envelope-o" aria-hidden="true"></i></p>
                                <input type="email" name="email" value="" required="" placeholder="E-Mail">
                            </label>
                            <p class="error hide">E-mail field is required</p>
                        </li>
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-mobile" aria-hidden="true"></i></p>
                                <input type="text" name="number" value="" required="" placeholder="Mobile Number">
                            </label>
                            <p class="error hide">Number field is required</p>
                        </li>
                        <li>
                            <label>
                                <p class="foicon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></p>
                                <input type="password" name="password" value="" required="" placeholder="Password">
                            </label>
                            <p class="error hide">Password field is required</p>
                        </li>
                        <li class="submitSet clearfix">
                            <button class="submitbutton">Sign Up</button>
                        </li>
                    </ul>
                    <p class="alACC">Already have an account? <a class="transition" href="index.php"> Sign in</a> </p>
                </form>
            </div>
        </div>
    </div>
    <div class="bottimg">
        <img class="responsive" src="images/bannerimg.png" alt="Webspa">
    </div>
</section>

<?php require_once('include/footer.php') ?>
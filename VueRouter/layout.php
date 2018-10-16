<section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="SITUALIS_Logo_Alt_White.png" alt="Logo">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Home
                        </a>
                        <a class="navbar-item">
                            Examples
                        </a>
                        <a class="navbar-item">
                            Documentation
                        </a>
                        <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title">
                My Stream
            </h1>
            <h2 class="subtitle">
                my VueRouter Demo
            </h2>
        </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        <nav class="tabs is-boxed">
            <div class="container">
                <ul>
<!--                    <li class="is-active"><a>Overview</a></li>-->
<!--                    <li><a>Modifiers</a></li>-->
<!--                    <li><a>Grid</a></li>-->
<!--                    <li><a>Elements</a></li>-->
<!--                    <li><a>Components</a></li>-->
<!--                    <li><a>Layout</a></li>-->
                    <router-link tag="li" to="/" exact>
                        <a>Home</a>
                    </router-link>
                    <router-link tag="li" to="/about">
                        <a>About</a>
                    </router-link>
                    <router-link tag="li" to="/contact">
                        <a>Contact</a>
                    </router-link>
<!--                    <router-view></router-view>-->
                </ul>
            </div>
        </nav>
    </div>
</section>


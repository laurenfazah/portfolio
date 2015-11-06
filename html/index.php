<?php
    require '../vendor/autoload.php';
    use Mailgun\Mailgun;

    session_start();
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message =  $_POST['message'];

        # Instantiate the client.
        $mgClient = new Mailgun('key-3e522d2966a5fbb738696e453ccde349');
        $domain = "mail.laurenfazah.com";

        # Make the call to the client.
        $result = $mgClient->sendMessage($domain, array(
            'from'    => $name . ' <' . $email . '>',
            'to'      => 'Lauren <laurenfazah@gmail.com>',
            'subject' => 'Portfolio Message',
            'text'    => $message
        ));
    }
    session_destroy();
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <title>Lauren Fazah</title>

        <link rel="icon" type="image/png" href="img/favicon.png"/>

        <meta name="twitter:card" content="">
        <meta name="twitter:site" content="">
        <meta name="twitter:title" content="">
        <meta name="twitter:description" content="">
        <meta name="twitter:image:src" content="">

        <meta property="og:title" content=""/>
        <meta property="og:url" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:site_name" content=""/>
        <meta property="og:description" content=""/>

        <link href='http://fonts.googleapis.com/css?family=Crimson+Text:400,400italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="stylesheets/style.css">

        <script src="js/vendor/modernizr.js"></script>
    </head>

    <body>

        <nav id="nav">
            <div class="burger">
                <img src="img/logo.svg" alt="">
            </div>
            <ul>
                <li class="logo"><img src="img/logo.svg" alt="logo"></li>
                <li class="scroll-to"><a href="#intro">intro</a></li>
                <li class="scroll-to"><a href="#work">work history</a></li>
                <li class="scroll-to"><a href="#portfolio">portfolio</a></li>
                <li class="scroll-to"><a href="#contact">contact</a></li>
            </ul>
        </nav>

        <header id="top">
            <h1>international affairs major turned passionate full-stack web developer</h1>
        </header>

        <main>
            <section id="intro" class="introduction info">

                <div class="who">
                    <h1>who am i?</h1>
                    <img src="img/leftarrow.svg" alt="arrow">
                    <p>i, indeed am lauren fazah. i often feel like i'm living a dream. web development is too much fun not to question reality, right?</p>
                    <p>it took a windy road and some self-discovery, but i really couldn't emphasize enough how happy i am where i landed.</p>
                </div>

                <div class="fun-facts">
                    <h1>fun facts:</h1>
                    <ul class="slick-it">
                        <li><p>first paid rent in belgrade, serbia</p></li>
                        <li><p>conversational in french and arabic</p></li>
                        <li><p>enjoys vegan cooking</p></li>
                        <li><p>not vegan</p></li>
                        <!-- <li>my last name translates to "panic" in arabic</li> -->
                    </ul>
                </div>

            </section>

            <section id="work" class="resume info">
                <h1>been places</h1>
                <ul>
                    <li class="card">
                        <div class="content front">
                            <p>Hill Holliday</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">Boston, MA</h2>

                            <div class="job">
                                <h2>Full Stack Web Developer</h2>
                                <h3>January 2015 - Present</h3>
                                <p>Involved with both internal and client, individual and group, front end and back end, as well as experimental projects.</p>
                            </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="content front">
                            <p>General Assembly</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">Boston, MA</h2>

                            <div class="job">
                                <h2>TA, Front End Web Development Course</h2>
                                <h3>September 2015 - Present</h3>
                                <p>Assisted instructors in teaching front end web development to 15-20 students during 10 week courses.</p>
                            </div>

                            <div class="job">
                                <h2>Workshop Instructor</h2>
                                <h3>May 2015 - Present</h3>
                                <p><a href="https://generalassemb.ly/education/the-what-why-of-apis" target="_blank">The What and Why of APIs</a></p>
                                <p><a href="https://generalassemb.ly/education/coding-for-beginners-html-and-css" target="_blank">Coding for Beginners: HTML and CSS</a></p>
                            </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="content front">
                            <p>Freelance</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">Anywhere, USA</h2>

                            <div class="job">
                                <h2>Full Stack Web Developer</h2>
                                <h3>May 2014 - Present</h3>
                                <p>Ongoing full-stack web development on a variety of projects including blogs, ecommerce, and landing pages.</p>
                            </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="content front">
                            <p>City Year</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">Boston, MA</h2>

                            <div class="job">
                                <h2>Special Projects Assistant to the Chief Operating Officer</h2>
                                <h3>January 2013 - June 2014</h3>
                                <p>Effectively managed the COO’s daily workflow, created policy documents, drafted office-wide communications, and supported the organization’s Operating Model Transition</p>
                            </div>

                            <div class="job">
                                <h2>Special Projects Assistant to the Chief People Officer</h2>
                                <h3>April 2012 – August 2012</h3>
                                <p>Assisted the CPO with schedule management, department events, office build-out and staff promotions</p>
                            </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="content front">
                            <p>Office of the War Crimes Prosecutor</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">Belgrade, Serbia</h2>

                            <div class="job">
                                <h2>Assistant to the Chief Prosecutor</h2>
                                <h3>September 2012 - December 2012</h3>
                                <p>Summarized full court case transcripts for this branch of the International Criminal Tribunal for the former Yugoslavia (ICTY) and analyzed patterns in digital evidence and first-hand witness accounts of war crimes</p>
                            </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="content front">
                            <p>United Nations Headquarters</p>
                        </div>
                        <div class="content back">
                            <h2 class="location">New York City, New York</h2>

                            <div class="job">
                                <h2>Meetings Services Assistant</h2>
                                <h3>September 2011 - December 2011</h3>
                                <p>Directly assisted all interpretation and documentation of the General Debate of the 66th session of the General Assembly</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <section id="portfolio" class="portfolio info">

                <div class="freelance">
                    <h1>in my "free" time</h1>
                    <ul>
                        <li class="roughwood">
                            <p>Roughwood</p>
                        </li>
                        <li class="backlash">
                            <p>Backlash</p>
                        </li>
                        <li class="intuit">
                            <p>Intuit</p>
                        </li>
                    </ul>
                </div>

                <div class="career">
                    <h1>on the job</h1>
                    <ul>
                        <li class="tvnext">
                            <p>TVnext Companion</p>
                        </li>
                        <li class="brandfeed">
                            <p>Brandfeed</p>
                        </li>
                        <li class="training-portal">
                            <p>Training Portal</p>
                        </li>
                        <li class="onebostonday">
                            <p>OBD Award Submission</p>
                        </li>
                        <li class="hhcc-app">
                            <p>Hill Holliday App</p>
                        </li>
                        <li class="passion">
                            <p>Passion to Protect</p>
                        </li>
                        <li class="rfid">
                            <p>RFID Scanner with API</p>
                        </li>
                    </ul>
                </div>

                <div class="personal">
                    <h1>personal fun</h1>
                    <ul>
                        <li class="storymaker">
                            <p>StoryMaker</p>
                        </li>
                        <li class="pixelect">
                            <p>Pixelect</p>
                        </li>
                        <li class="tic-tac-toe">
                            <p>Tic Tac Toe</p>
                        </li>
                        <li class="selfless">
                            <p>Selfless</p>
                        </li>
                        <li class="video-interaction">
                            <p>2024 Video Interaction</p>
                        </li>
                    </ul>
                </div>

            </section>

            <section id="contact" class="contact">

                <form  method="post" name="contact_form" action="">
                    <h1>want to chat?</h1>
                    <input type="text" name="name" placeholder="name" required>
                    <input type="email" name="email" placeholder="email" required>
                    <textarea name="message" cols="30" rows="10" placeholder="drop a message..." required></textarea>
                    <input type="submit" value="send off" name="submit">
                    <h1 class="email-thanks"></h1>
                </form>

            </section>

        </main>

        <div class="scroll-to top"><img src="img/leftarrow.svg" alt="arrow"></div>

        <footer>
            <p>built with love by lauren fazah</p>
            <p>&copy; 2015 boston, ma</p>
        </footer>

        <script>
            // google analytics
        </script>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/js/vendor/jquery.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>

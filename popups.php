
<!-- popup-trans-bg's ID must correspond with the links-box-outer-container's ID (above) -->
<div class="popup-trans-bg" id="social">
    <div class="floating-popup-box">
        <?php include "social-links.html"; ?>
    </div>
</div>

<div class="popup-trans-bg" id="contact">
    <div class="floating-popup-box">
        <div class="flb-title">Contact</div>

        
            <form target="_blank" method="post" action="/email.php">
                <input type="hidden" name="subject" value="Email from Portfolio Page">
                <input type="hidden" name="good-to-go" value="false">
                <div class="email-modal-container" id="email-modal">
                    <div class="email-modal-window">
                        <div>Name</div>
                        <input class="input-field-general" type="text" name="name" placeholder="Your Name" required data-id="clear-me">
                        <div>Email</div>
                        <input class="input-field-general" type="email" name="email" placeholder="Your Email Address" required data-id="clear-me">
                        <div>Message</div>
                        <textarea class="input-field-general input-textarea" name="message" placeholder="Your message here." required data-id="clear-me"></textarea>
                        <div class="email-modal-buttons">
                            <div style="text-align:center;"><span>Before sending, uncheck this box. 
                                <input type="checkbox" id="good-to-go" checked></span>
                            </div>
                            <input id="send-email" type="submit" name="submit" value="Send" style="font-size:20px;padding:5px;margin-top:5px;" disabled>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
</div>

<div class="popup-trans-bg" id="projects"> <!-- This is the popup refered to above -->
    <div class="floating-popup-box">
        <div class="flb-title">Projects</div>
        <div class="flb-link"><a href="/projects/charlies-meets-delilah/">Charlie's Microscopic Universe:<br><em>Charlie Meets Delilah</em></a></div>
        <!-- <div class="flb-link"><a href="/projects/february-11th/">Charlie's Microscopic Universe:<br><em>February 11th</em></a></div> -->
    </div>
</div>

<div class="popup-trans-bg" id="store">
    <div class="floating-popup-box">
        <div class="flb-title">Store</div>
        <div class="flb-link"><a href="https://www.teepublic.com/user/grimsical" target="_blank">Our Products on TeePublic.com</a></div>
        <div class="flb-link"><a href="/products">Popular Products</a></div>
        <!-- <div class="flb-link"><a href="#">Books</a></div> -->
    </div>
</div>


        

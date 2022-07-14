import React from "react";

function Contact(){
    return(
        <div class="contact-me" id="contact">
            <div class="wrapper3">
                <div class="left-section">
                    <div class="contact-form">
                        <form action="/sendMail" method="post">
                            <label for="fullname">نام و نام خانوادگی:</label>
                            <input type="text" name="fullName" class="input" placeholder="نام و نام خانوادگی" required />
                            <label for="phonenumber">شماره تماس:</label>
                            <input type="text" name="phoneNumber" class="input" placeholder="شماره تماس" required />
                            <label for="emailaddress">آدرس ایمیل:</label>
                            <input type="email" name="email" class="input" placeholder="آدرس ایمیل" required />
                            <label for="message">پیام:</label>
                            <textarea name="request" id="" cols="30" rows="10" placeholder="پیام شما" required="true"></textarea>
                            <button type="submit" class="btn send-btn">ارسال</button>
                        </form>
                    </div>
                </div>
                <div class="right-section">
                    <div class="contact-info">
                        <h1 class="heading2">ارتباط با من</h1>
                        <p>من اینجام <img class="gift" src={require("../images/hand.gif")} alt=""/></p>
                        <p>هر گونه نظر، انتقاد و پشنهاد،</p>
                        <p>همچنین در صورتی که پروژه دارید، </p>
                        <p>یا نیاز به راهنمایی و مشاوره دارید،</p>
                        <p>راه های ارتباط با من:</p>
                        <p> 
                            <span class="iconify" data-icon="charm:phone" data-width="20" data-height="20" data-flip="horizontal"></span>
                              شماره تماس: 
                            09211274790
                        </p>
                        <p>
                            <span class="iconify" data-icon="clarity:email-solid" data-width="20" data-height="20" data-flip="horizontal"></span>
                              آدرس ایمیل:
                            maryam.gh1500@gmail.com
                        </p>
                        <p>و یا میتونید فرم رو تکمیل کنید تا در اسرع وقت با شما تماس بگیرم!</p>
                        <div class="social-medias">
                            <div class="icon">
                                <span class="iconify" data-icon="akar-icons:youtube-fill" data-width="60" data-height="60"></span>
                                <span class="icon-name">Youtube</span>
                            </div>
                            <div class="icon">
                                <span class="iconify" data-icon="bi:discord" data-width="60" data-height="60"></span>
                                <span class="icon-name">Discord</span>
                            </div>
                            <div class="icon">
                                <span class="iconify" data-icon="akar-icons:linkedin-v1-fill" data-width="60" data-height="60"></span>
                                <span class="icon-name">Linkedin</span>
                            </div>
                            <div class="icon">
                                <span class="iconify" data-icon="cib:whatsapp" data-width="60" data-height="60"></span>
                                <span class="icon-name">Whatsapp</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contact;
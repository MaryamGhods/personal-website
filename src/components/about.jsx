import React from "react";

function About(){
    return(
        <article>
            <section class="about" id="about">
                <h1 class="heading1">درباره ی من</h1>
                <div class="wrapper1">
                    <div class="left-section">
                        <picture>
                            <source media="(max-width:430px)" srcSet={require("../images/personal2.png")} />
                            <img src={require("../images/personal.png")} alt="" />
                        </picture>
                    </div>
                    <div class="right-section">
                        <p>
                            من <span>مریم قدس</span> طراح و توسعه دهنده وبسایت،
                            فعالیتم رو در سال 1394 با تحصیل در رشته <span>مهندسی نرم افزار</span> دانشگاه سمنان شروع کردم. 
                            در طول دوران تحصیل با مفاهیم پایه زیادی آشنا شدم و خارج از دانشگاه کار کردم.
                            از جمله یادگیری ماشین Machin Learning ، مفاهیم شبکه و دوره سیسکو CCNA، پایگاه داده Sql Server، زبان برنامه نویسی ++C، سیستم عامل لینوکس. تسلط نسبتا خوبی به زبان انگلیسی دارم.
                        </p>
                        <br />
                        <p>
                            بعد از فارغ تحصیلی مدتی به یادگیری زبان برنامه نویسی پایتون مشغول بودم. بعد از یادگیری مدتی این زبان رو تدریس کردم. 
                        </p>
                        <br />
                        <p>
                            درنهایت متوجه علاقه خودم به طراحی و توسعه وب سایت شدم. و یک سال هست که به صورت تخصصی کار می کنم.
                            توسعه وب رو هم در زمینه <span>فرانت اند</span>  و هم در زمینه <span>بک اند</span>  یاد گرفتم.
                            در حال حاضر به صورت حرفه ای در زمینه فرانت اند کار می کنم.
                            بسیار علاقه مند به کار به صورت <span>فریلنسری و ریموت</span> هستم.
                        </p>
                        <br />
                        <p>
                            خارج از فعالیت کاریم به شنا<span role="img" aria-label=":)">🏊‍♀️</span>،
                            رانندگی<span role="img" aria-label=":)">🚗</span>،
                            دیزاین کیک های تولد<span role="img" aria-label=":)">🎂</span>
                            و مطالعه کتاب های جدید<span role="img" aria-label=":)">📚</span>
                            علاقه مند هستم.
                        </p>
                        <br />
                        <p>
                            در ادامه <span><a href="#works">نمونه کارهای من</a></span> رو میتونید ببینید.
                        </p>
                        <p>
                            و همچنین در در قسمت <span><a href="#contact">ارتباط با من</a></span> می تونید با من ارتباط برقرار کنید.
                        </p>
                    </div>
                </div>
                <div class="skills">
                    <h2 class="heading3">
                        مهارت ها
                    </h2>
                    <ul>
                        <li><span>Html</span></li>
                        <li><span>Css</span></li>
                        <li><span>Js</span></li>
                        <li><span>JQuery</span></li>
                        <li><span>React Js</span></li>
                        <li><span>Node Js</span></li>
                        <li><span>Bootstarp</span></li>
                        <li><span>MongoDB</span></li>
                        <li><span>UI</span></li>
                        <li><span>UX</span></li>
                        <li><span>Python</span></li>
                    </ul>
                </div>
                <div class="wrapper2">
                    <div class="left-section">
                        <p>
                            <span>چرا من به عنوان طراح و توسعه دهنده وب گزینه ی عالی هستم؟<img class="gift" src={require("../images/winking_face.gif")} alt=""/></span>
                        </p>
                        <p>
                            <span> <span role="img" aria-label=":)">✔️</span>چون </span>
                            وبسایت ها رو مطابق با جدیدترین طرح های UI/UX انجام میدم.
                        </p>
                        <p>
                            <span> <span role="img" aria-label=":)">✔️</span>چون </span>
                            وبسایت های Responsive که قابلیت استفاده در تمام دستگاه های هوشمند، مثل تلفن همراه، فبلت، تبلت، دسکتاپ و ... قابل استفاده هست، ارائه میدم.
                        </p>
                        <p>
                            <span>  <span role="img" aria-label=":)">✔️</span>و چون </span>
                            من در هر زمینه ای که قرار بگیرم بهترین عملکرد خودم رو انجام میدم! 
                        </p>
                        <br />
                        <p class="main-centence">
                            و سخن آخر اینکه 
                             <span> من فقط وبسایت طراحی نمی کنم... من کمک می کنم که در دنیا دیده شوید!</span>
                        </p>
                        <button class="btn dl-btn">دانلود رزومه</button>
                    </div>
                    <div class="right-section">
                        <div class="laptop-border1">
                            <div class="laptop-border2">
                                <img src={require("../images/laptop2.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default About;
"use strict";!function(t){function e(){t("section").each(function(){var e=t('.dot-nav a[href="#'+t(this).attr("id")+'"]').data("number"),n=t(this).offset().top,o=t(window).height()/2,i=t(window).scrollTop(),s=n-o<i,c=n+t(this).height()-o>i;s&&c?t(".dot-nav a").eq(e).addClass("is-selected"):t(".dot-nav a").eq(e).removeClass("is-selected")})}function n(e){t("body, html").animate({scrollTop:e.offset().top+80},500)}function o(){var t=window.innerWidth>768,e=l.offsetTop-l.offsetTop/4,n=window.scrollY>e,o=r.classList.contains("open");t&&n?a.classList.add("active"):t&&o?i():a.classList.remove("active")}function i(){d.classList.toggle("active"),r.classList.toggle("open"),document.body.classList.toggle("noScroll")}function s(){this.parentElement.classList.add("is-active","is-completed")}function c(){this.parentElement.classList.remove("is-active","is-completed")}t(document).ready(function(){console.log("hi")}),t(window).scroll(function(){t(this).scrollTop()>100?t(".fade-in").fadeIn():t(".fade-in").fadeOut()}),e(),window.addEventListener("scroll",e),t(".scroll-down").on("click",function(e){e.preventDefault(),n(t(this.hash))}),t(".dot-nav a").on("click",function(e){e.preventDefault(),n(t(this.hash))}),t(".overlay a").on("click",function(e){e.preventDefault(),n(t(this.hash)),t("#toggle").click()});var a=document.querySelector(".dot-nav"),l=document.querySelector("#about"),d=document.querySelector("#toggle"),r=document.querySelector("#overlay");window.addEventListener("scroll",o),window.addEventListener("resize",o),d.addEventListener("click",i);var u=document.querySelectorAll(".contact-input");u.forEach(function(t){return t.addEventListener("focus",s)}),u.forEach(function(t){return t.addEventListener("blur",c)});var h=document.querySelector(".autoExpand"),f=300;h.addEventListener("input",function(){h.style.height="",h.style.height=Math.min(h.scrollHeight,f)+"px"}),t("div.modal").on("show.bs.modal",function(){var e=this,n=e.id;window.location.hash=n,window.onhashchange=function(){location.hash||t(e).modal("hide")}})}(jQuery);
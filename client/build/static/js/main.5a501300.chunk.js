(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(12),s=a.n(o),r=(a(20),a(1)),i=a.n(r),c=a(9);const m=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},d=function(e){e.preventDefault();var t=i()(e.target).attr("href");if("undefined"!==typeof t&&"null"!==t&&null!==t&&""!==t){var a=i()(t).offset().top;"undefined"!==typeof a&&"null"!==a&&null!==a&&""!==a&&(i()(window).width()<960?i()("html, body").animate({scrollTop:a},800):i()("html, body").animate({scrollTop:a-40},800))}};class p extends l.Component{componentDidMount(){i()("#menu").click((function(){i()(".bar1").toggleClass("change"),i()(".bar2").toggleClass("change"),i()(".bar3").toggleClass("change"),i()(".navbar-box").toggleClass("move-away")}))}render(){return n.a.createElement("div",{id:"mynavbar",className:"mynavbar"},n.a.createElement(c.a,null,n.a.createElement("div",{className:"contact-mobile visible-xs-block"},n.a.createElement("ul",null)),n.a.createElement("div",{id:"menu"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"bar1"}),n.a.createElement("span",{className:"bar2"}),n.a.createElement("span",{className:"bar3"})),n.a.createElement("div",{className:"navbar-box"},n.a.createElement("ul",{className:"nav-left"},n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"#header",className:"scroll-button glyphicon glyphicon-home",onClick:e=>{d(e)}}," ")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about",className:"scroll-button",onClick:e=>{d(e)}},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"#portofolio",className:"scroll-button",onClick:e=>{d(e)}},"Portofolio")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact",className:"scroll-button",onClick:e=>{d(e)}},"Contact"))),n.a.createElement("ul",{className:"nav-right hidden-xs",style:{marginRight:"0px"}},n.a.createElement("li",null,n.a.createElement("a",{href:"tel:+40729699148",target:"_top"},n.a.createElement("span",null,"0729.699.148"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/oanapopescu93/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("span",{className:"fa fa-linkedin"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/oanapopescu93",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("span",{className:"fa fa-github"})))))))}}var u=p,h=a(102),_=a(39),f=a.n(_),b=a(40),E=a.n(b);class v extends l.Component{constructor(e){super(e),this.openModal_cv=()=>this.setState({isOpen_cv:!0}),this.closeModal_cv=()=>this.setState({isOpen_cv:!1}),this.state={isOpen_cv:!1},this.handle_click=this.handle_click.bind(this)}handle_click(){this.openModal_cv()}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mycv_container"},n.a.createElement("div",{className:"cv_close"},n.a.createElement("i",{className:"fa fa-times"})),n.a.createElement("div",{id:"mycv",className:"mycv",onClick:()=>{this.handle_click()}},n.a.createElement("i",{className:"fa fa-file"}),n.a.createElement("p",null,"CV"))),n.a.createElement(h.a,{id:"myModal_cv",className:"mymodal text-center",show:this.state.isOpen_cv,onHide:this.closeModal_cv},n.a.createElement(h.a.Header,{closeButton:!0}),n.a.createElement(h.a.Body,null,n.a.createElement("h3",{className:"text-uppercase",id:"myModalLabel"},"Choose"),n.a.createElement("a",{href:f.a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"cv-lang"},"PDF")),n.a.createElement("a",{href:E.a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"cv-lang"},"WORD")))))}}var g=v;class k extends l.Component{componentDidMount(){var e=new Date;e=e.getFullYear(),i()("#copyright_year").text(e)}render(){return n.a.createElement("footer",{className:"text-center"},n.a.createElement("h6",null,"Copyright \xa9 ",n.a.createElement("span",{id:"copyright_year"},"2022")," Oana Popescu. All rights reserved."))}}var x,y=k;class N extends l.Component{constructor(e){super(e),(x=this).backToTop=x.backToTop.bind(x)}componentDidMount(){x.backToTop(),i()(window).on("scroll",(function(){x.backToTop()}))}backToTop(){i()(window).scrollTop()>500?i()("#top").addClass("show"):i()("#top").removeClass("show")}render(){return n.a.createElement("a",{href:"#header",id:"top",title:"Back to top",className:"text-uppercase scroll-button fa fa-arrow-circle-up",onClick:e=>{d(e)}}," ")}}var w=N,C=a(8),M=a(6);class j extends l.Component{constructor(e){super(e),this.openModal_tutorials=()=>this.setState({isOpen_tutorials:!0}),this.closeModal_tutorials=()=>this.setState({isOpen_tutorials:!1}),this.state={isOpen_tutorials:!1,tutorials:e.tutorials},this.handle_click=this.handle_click.bind(this)}handle_click(){this.openModal_tutorials()}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mytutorials_container"},n.a.createElement("div",{className:"mytutorials_close"},n.a.createElement("i",{className:"fa fa-times"})),n.a.createElement("div",{id:"mytutorials",className:"mytutorials",onClick:()=>{this.handle_click()}},n.a.createElement("i",{className:"fa fa-book","data-toggle":"tooltip","data-placement":"left",title:"","data-original-title":"My tutorials"}))),n.a.createElement(h.a,{id:"myModal_tutorials",className:"mymodal text-center",show:this.state.isOpen_tutorials,onHide:this.closeModal_tutorials},n.a.createElement(h.a.Header,{closeButton:!0},n.a.createElement(h.a.Title,null,"Tutorials")),n.a.createElement(h.a.Body,null,n.a.createElement("div",{id:"tutorial_box_container"},(()=>{let e=this.state.tutorials;return"undefined"!==typeof e&&null!==e&&e.length>0?n.a.createElement(n.a.Fragment,null,e.map((function(t,a){return n.a.createElement(C.a,{key:a,id:"tutorial_box_"+a},n.a.createElement(M.a,{sm:8,className:"box01"},n.a.createElement("h4",{className:"tutorial_name"},t.name),n.a.createElement("p",null,t.description),n.a.createElement("p",null,"What I used:"),n.a.createElement(n.a.Fragment,null,t.used.map((function(e,t){return n.a.createElement("span",{key:t,className:"box"},e)})))),n.a.createElement(M.a,{sm:4,className:"box02"},n.a.createElement("a",{className:"tutorial_link",href:e[a].link,target:"_blank",rel:"noopener noreferrer"},"Link")))}))):n.a.createElement("div",null,"No tutorials yet")})()))))}}var T=j,S=a(42),O=a.n(S),F=a(43),P=a.n(F);class D extends l.Component{constructor(e){super(e),this.state={title:e.data[0],subtitle:e.data[1],description:e.data[2]}}render(){return n.a.createElement(c.a,{className:"text-center"},n.a.createElement(C.a,null,n.a.createElement(M.a,{id:"header-title",sm:12},n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"logo",alt:"logo_icon",src:O.a}),n.a.createElement("h1",{className:"text-uppercase blacktext"},this.state.title),n.a.createElement("h2",{className:"text-uppercase color_text_blue"},this.state.subtitle)))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:2}),n.a.createElement(M.a,{sm:8,id:"header-sapou"},n.a.createElement("hr",{className:"line"}),n.a.createElement("p",null,P()(this.state.description)),n.a.createElement("hr",{className:"line"})),n.a.createElement(M.a,{sm:2})))),n.a.createElement(C.a,null,n.a.createElement(M.a,{id:"header-buttons",sm:12},n.a.createElement("a",{href:"#about",className:"text-black button-white text-uppercase scroll-button",onClick:e=>{d(e)}},"Read more"),n.a.createElement("a",{href:"#contact",className:"text-black button-white text-uppercase scroll-button",onClick:e=>{d(e)}},"Contact me"),n.a.createElement("a",{href:"/",target:"_blank",className:"text-black button-white text-uppercase"},"Chatbot"))),n.a.createElement("div",{className:"scroll"},n.a.createElement("a",{href:"#about",className:"scroll-button fa fa-angle-down",onClick:e=>{d(e)}}," ")))}}var q=D;var B=function(e){switch(e.template){case"about":return n.a.createElement(c.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("hr",{className:"line"}),n.a.createElement("h3",{className:"text-uppercase"},"About me",n.a.createElement("span",{className:"glyphicon glyphicon-user title-icon"})),n.a.createElement("hr",{className:"line"}))));case"portofolio":return n.a.createElement(c.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("hr",{className:"line"}),n.a.createElement("h3",{className:"text-uppercase"},"My portofolio",n.a.createElement("span",{className:"glyphicon glyphicon-folder-open title-icon"})),n.a.createElement("hr",{className:"line"}))));case"contact":return n.a.createElement(c.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("hr",{className:"line"}),n.a.createElement("h3",{className:"text-uppercase"},"Contact me",n.a.createElement("span",{className:"glyphicon glyphicon-send title-icon"})),n.a.createElement("hr",{className:"line"}))));default:return n.a.createElement(n.a.Fragment,null)}};function A(e,t,a,l,n,o,s){var r=document.getElementById(e),c=r.getContext("2d");function m(e,t,a,l,n,o,s){e.fillStyle=s,e.beginPath(),e.moveTo(t,a),e.arc(t,a,l,n,o),e.closePath(),e.fill()}r.height=s,r.width=o,this.draw=function(){var o=0;for(var s in a){let e=2*Math.PI*a[s].value/100;m(c,r.width/2,r.height/2,Math.min(r.width/2,r.height/2),o,o+e,l[s]),o+=e,1}if(1===a.length){let e=2*Math.PI-2*Math.PI*a[s].value/100;m(c,r.width/2,r.height/2,Math.min(r.width/2,r.height/2),o,o+e,l[1])}n>0&&m(c,r.width/2,r.height/2,n*Math.min(r.width/2,r.height/2),0,2*Math.PI,"#f3f4f6");for(let e in a)if(n>0){let t=Math.round(100*a[e].value/100);c.fillStyle="black",c.font="bold 16px Arial",c.fillText(t+"%",r.width/2-20,r.height/2+5)}else{let t=a[e].value,l=2*Math.PI*t/100,s=Math.min(r.width/2,r.height/2),i=r.width/2+s/2*Math.cos(o+l/2),m=r.height/2+s/2*Math.sin(o+l/2),d=s*n/2;i=r.width/2+(d+s/2)*Math.cos(o+l/2),m=r.height/2+(d+s/2)*Math.sin(o+l/2),c.beginPath(),c.rect(i-25,m-25,50,20),c.fillStyle="white",c.fill(),c.strokeStyle="black",c.stroke(),c.closePath();let p=Math.round(100*a[e].value/100);c.fillStyle="black",c.font="bold 16px Arial",c.fillText(p+"%",i-20,m-10),o+=l}if(t){i()("#"+e).after('<div class="legend" id="'+t+'"></div>');let n="";for(let e in a)n=n+"<div><span style='display:inline-block;width:20px;background-color:"+l[e]+";'>&nbsp;</span> "+a[e].name+"</div>";i()("#"+t).html(n)}}}class I extends l.Component{constructor(e){super(e),this.state={skills_title:e.skills_title,skills:e.skills,pie_colors:e.pie_colors,language:e.language}}componentDidMount(){i()("#about_content_box")&&i()("#about_content_box").scrollTop(0);var e=[],t=[];for(var a in this.state.skills_title)for(var l in i()("#skills_row").append('<div class="col-xs-12"><h4 class="grey666">'+m(this.state.skills_title[a])+"</h4></div>"),this.state.skills)this.state.skills[l].type===this.state.skills_title[a]&&(e=[],i()("#skills_row").append('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"><canvas id="myskill_'+l+'"></canvas></div>'),e.push(this.state.skills[l]),t[l]=new A("myskill_"+l,"pie_legend"+l,e,this.state.pie_colors,.8,120,120),t[l].draw())}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{id:"skills_row"}),n.a.createElement(C.a,{id:"language_row"},n.a.createElement(M.a,{sm:12},n.a.createElement("h4",{className:"grey666"},"Languages")),n.a.createElement(M.a,{id:"language_bar_container",sm:6,md:4,lg:3},(()=>{if("undefined"!==typeof this.state.language&&"null"!==this.state.language&&null!==this.state.language&&""!==this.state.language&&this.state.language.length>0)return n.a.createElement(n.a.Fragment,null,this.state.language.map((function(e,t){let a={width:e.perc+"%"};return n.a.createElement("div",{key:t},n.a.createElement("p",null,m(e.name)),n.a.createElement("div",{className:"language_bar_box"},n.a.createElement("div",{style:a,className:"language_bar "+e.name},e.perc,"%")))})))})())))}}var H=I;class L extends l.Component{constructor(e){super(e),this.state={experience:e.experience}}componentDidMount(){for(var e in i()("#about_content_box")&&i()("#about_content_box").scrollTop(0),i()("#about_content_box .row").append('<div class="col-sm-12"></div>'),this.state.experience){if(i()("#about_content_box .row > div").append('<div class="job_header"></div>'),"undefined"!=typeof this.state.experience[e].job_title&&i()("#about_content_box .row > div .job_header").eq(e).append('<div class="job_title"><h4 class="text-uppercase">'+this.state.experience[e].job_title+"</h4></div>"),"undefined"!=typeof this.state.experience[e].period&&i()("#about_content_box .row > div .job_header").eq(e).append('<div class="period">('+this.state.experience[e].period+")</div>"),"undefined"!=typeof this.state.experience[e].company_name&&("undefined"!=typeof this.state.experience[e].link_company?i()("#about_content_box .row > div .job_header").eq(e).append('<div class="company_name"><a href="'+this.state.experience[e].link_company+'" target="_blank"><b>'+this.state.experience[e].company_name+"</b></a></div>"):i()("#about_content_box .row > div .job_header").eq(e).append('<div class="company_name"><b>'+this.state.experience[e].company_name+"</b></div>")),i()("#about_content_box .row > div").append('<div class="job_body"></div>'),"undefined"!=typeof this.state.experience[e].job_location&&i()("#about_content_box .row > div .job_body").eq(e).append('<div class="job_location"><b>Location: </b>'+this.state.experience[e].job_location+"</div>"),"undefined"!=typeof this.state.experience[e].company_description&&i()("#about_content_box .row > div .job_body").eq(e).append('<div class="company_description"><b>Company profile: </b>'+this.state.experience[e].company_description+"</div>"),"undefined"!=typeof this.state.experience[e].job_description&&i()("#about_content_box .row > div .job_body").eq(e).append('<div class="job_description"><b>What I did: </b>'+this.state.experience[e].job_description+"</div>"),"undefined"!=typeof this.state.experience[e].job_description_list){var t=this.state.experience[e].job_description_list,a="";for(let e in t)a=a+"<li>"+t[e]+"</li>";i()("#about_content_box .row > div .job_body").eq(e).append('<div class="projects"><b>My work: </b><ul>'+a+"</ul></div>")}if("undefined"!=typeof this.state.experience[e].platform_used&&i()("#about_content_box .row > div .job_body").eq(e).append('<div class="jplatform_used"><b>Platforms used: </b>'+this.state.experience[e].platform_used+"</div>"),"undefined"!=typeof this.state.experience[e].accomplishments&&i()("#about_content_box .row > div .job_body").eq(e).append('<div class="accomplishments"><b>Accomplishments: </b>'+this.state.experience[e].accomplishments+"</div>"),"undefined"!=typeof this.state.experience[e].projects){var l=this.state.experience[e].projects,n="";for(let e in l)n="portofolio"===l[e].project_link?n+'<li><a href="#'+l[e].project_link+'" class="scroll-button">'+l[e].project_name+"</li>":n+'<li><a target="_blank" href="'+l[e].project_link+'">'+l[e].project_name+"</li>";i()("#about_content_box .row > div .job_body").eq(e).append('<div class="projects"><b>Projects: </b><ul>'+n+"</ul></div>")}}i()("body").on("click",".scroll-button",(function(e){d(e)}))}render(){return n.a.createElement(C.a,{id:"experience_row"})}}var W,R=L;class z extends l.Component{constructor(e){super(e),(W=this).state={education:e.education}}componentDidMount(){for(var e in i()("#about_content_box")&&i()("#about_content_box").scrollTop(0),i()("#education_row").append('<div class="col-sm-12"></div>'),W.state.education)i()("#education_row > div").append('<div class="edu_header"></div>'),"undefined"!=typeof W.state.education[e].school_name&&i()("#education_row > div .edu_header").eq(e).append('<div class="edu_school"><h4 class="text-uppercase">'+W.state.education[e].school_name+"</h4></div>"),"undefined"!=typeof W.state.education[e].title&&i()("#education_row .row > div .edu_header").eq(e).append('<div class="edu_title"><b>'+W.state.education[e].title+"</b></div>"),"undefined"!=typeof W.state.education[e].period&&i()("#education_row > div .edu_header").eq(e).append('<div class="edu_period">('+W.state.education[e].period+")</div>"),i()("#education_row > div").append('<div class="edu_body"></div>'),"undefined"!=typeof W.state.education[e].school_location&&i()("#education_row > div .edu_header").eq(e).append('<div class="edu_location"><b>Location: </b>'+W.state.education[e].school_location+"</div>"),"undefined"!=typeof W.state.education[e].description&&i()("#education_row > div .edu_body").eq(e).append('<div class="edu_period"><b>What I learnt: </b>'+W.state.education[e].description+"</div>")}render(){return n.a.createElement(C.a,{id:"education_row"})}}var V,Z=z;class J extends l.Component{constructor(e){super(e),(V=this).state={visible:"skills",language:e.data.language,pie_colors:e.data.pie_colors,skills:e.data.skills,skills_title:e.data.skills_title,education:e.data.education,experience:e.data.experience}}componentDidMount(){i()("body").on("click","#about-div .about_tabs_title",(function(e){var t=i()(this).parent().attr("id");i()(this).parent().parent().hasClass("open")?i()(this).parent().parent().removeClass("open"):(i()("#about-div .about_tabs").removeClass("open"),i()(this).parent().parent().addClass("open")),"skills"===t?V.setState({visible:"skills"}):"experience"===t?V.setState({visible:"experience"}):"education"===t&&V.setState({visible:"education"})}))}render(){return n.a.createElement(c.a,null,n.a.createElement(C.a,{id:"about-div"},n.a.createElement(M.a,{id:"about_tabs_main",className:"about_tabs_main",xs:12,sm:4,md:4,lg:2},n.a.createElement("div",{id:"about_tabs_0",className:"about_tabs open"},n.a.createElement("div",{id:"skills",className:"about_tabs_header"},n.a.createElement("h3",{className:"about_tabs_title text-uppercase grey666"},"skills"))),n.a.createElement("div",{id:"about_tabs_1",className:"about_tabs"},n.a.createElement("div",{id:"experience",className:"about_tabs_header"},n.a.createElement("h3",{className:"about_tabs_title text-uppercase grey666"},"experience"))),n.a.createElement("div",{id:"about_tabs_2",className:"about_tabs"},n.a.createElement("div",{id:"education",className:"about_tabs_header"},n.a.createElement("h3",{className:"about_tabs_title text-uppercase grey666"},"education")))),n.a.createElement(M.a,{id:"about_content_main",className:"about_content_main",xs:12,sm:8,md:8,lg:10},n.a.createElement("div",{id:"about_content_box",className:"about_content_box"},(()=>{switch(V.state.visible){case"skills":return n.a.createElement(H,{language:V.state.language,pie_colors:V.state.pie_colors,skills:V.state.skills,skills_title:V.state.skills_title});case"experience":return n.a.createElement(R,{experience:V.state.experience});case"education":return n.a.createElement(Z,{education:V.state.education});default:return n.a.createElement(H,{language:V.state.language,pie_colors:V.state.pie_colors,skills:V.state.skills,skills_title:V.state.skills_title})}})()))),n.a.createElement(C.a,null,n.a.createElement(M.a,{xs:12,sm:4,md:4,lg:2}),n.a.createElement(M.a,{id:"go_portofolio",className:"about_content_main",xs:12,sm:8,md:8,lg:10},n.a.createElement("a",{href:"#portofolio",className:"button-white text-black text-uppercase scroll-button",onClick:e=>{d(e)}},"See my projects"))))}}var $=J,U=a(15),Y=a(44),G=a.n(Y);a(97),a(98);var K=function(e){var t=e.id,a=e.item_list;if("portofolio"===e.template){const e={items:4,nav:!1,rewind:!0,autoplay:!1,slideBy:1,dots:!1,loop:!0,responsive:{0:{items:1},768:{items:3}}};return n.a.createElement("div",{id:t,className:"owl_container"},n.a.createElement(G.a,e,a.map((function(e,t){let a=e.status,l=e.platform,o=e.git;return a||(a=""),l||(l=""),o||(o=""),n.a.createElement("div",{key:t,className:"item"},n.a.createElement("div",{className:"item-container"},n.a.createElement("div",{className:"item-info"},n.a.createElement("img",{className:"item-img",alt:e.alt,title:e.title,src:window.location.origin+"/"+e.src})),n.a.createElement("div",{className:"item-more-info"},n.a.createElement("p",{className:"grid_title"},e.title),n.a.createElement("p",{className:"grid_git hidden"},e.git),n.a.createElement("p",{className:"grid_platform hiddden"},e.platform),n.a.createElement("p",{className:"grid_used hiddden"},e.used),n.a.createElement("p",{className:"grid_link hiddden"},e.link))))}))))}};function Q(e){return n.a.createElement(K,{template:e.template,id:e.id,item_list:e.item_list})}class X extends l.Component{constructor(e){super(e),this.openModal_portofolio=()=>this.setState({isOpen_portofolio:!0}),this.closeModal_portofolio=()=>this.setState({isOpen_portofolio:!1}),this.openModal_tutorials=()=>this.setState({isOpen_tutorials:!0}),this.closeModal_tutorials=()=>this.setState({isOpen_tutorials:!1}),this.state={portofolio:e.data,isOpen_portofolio:!1,isOpen_tutorials:!1},this.portofolio_click=this.portofolio_click.bind(this),this.portofolio_image_click=this.portofolio_image_click.bind(this),this.portofolio_tutorials_click=this.portofolio_tutorials_click.bind(this)}portofolio_image_click(){let e=this;i()("body").on("click",".item-info img",(function(t){e.openModal_portofolio(),i()("#myModal_portofolio .modal-body .title").empty(),i()("#myModal_portofolio .modal-body .platform").empty(),i()("#myModal_portofolio .modal-body .used").empty(),i()("#myModal_portofolio .modal-body .status").empty(),"undefined"!==i()(this).closest(".item-container").find(".item-more-info p.grid_link").text()&&i()("#myModal_portofolio .modal-body .title").append('<a class="modal_button" href="'+i()(this).closest(".item-container").find(".item-more-info p.grid_link").text()+'" target="_blank">Take a look</a>'),""!==i()(this).closest(".item-container").find(".item-more-info p.grid_git").text()&&i()("#myModal_portofolio .modal-body .platform").append('<a class="modal_button" href="'+i()(this).closest(".item-container").find(".item-more-info p.grid_git").text()+'" target="_blank">See the code</a>'),""!==i()(this).closest(".item-container").find(".item-more-info p.grid_platform").text()&&i()("#myModal_portofolio .modal-body .platform").append("<b>Platform: </b>"+i()(this).closest(".item-container").find(".item-more-info p.grid_platform").text());var a=i()(this).closest(".item-container").find(".item-more-info p.grid_used").text().split(", ");for(var l in i()("#myModal_portofolio .modal-body .used").append("<b>What I used: </b><br>"),a)i()("#myModal_portofolio .modal-body .used").append('<span class="box">'+a[l]+"</span>");i()(this).closest(".item-container").find(".item-more-info p.grid_status").length>0&&i()("#myModal_portofolio .modal-body .status").append("<b>Status: </b>"+i()(this).closest(".item-container").find(".item-more-info p.grid_status").text())}))}portofolio_click(e){i()(".portofolio-list li").removeClass("active"),i()(".portofolio-container .owl_container").hide(),i()(e.target).addClass("active");let t=i()(e.target).attr("order");i()("#owl_carousel_"+t)&&i()("#owl_carousel_"+t).show()}portofolio_tutorials_click(){this.openModal_tutorials()}componentDidMount(){this.portofolio_image_click()}render(){let e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("ul",{className:"portofolio-list text-center"},e.state.portofolio.portofolio_list.map((function(t,a){let l="";return 0===a&&(l="active"),n.a.createElement("li",{key:a,order:a,className:l,onClick:t=>{e.portofolio_click(t)}},t)}))),n.a.createElement("div",{className:"portofolio-container text-left"},e.state.portofolio.portofolio_items.map((function(e,t){return n.a.createElement(Q,{key:t,id:"owl_carousel_"+t,template:"portofolio",item_list:e})}))))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12,className:"text-center"},n.a.createElement("div",{id:"portofolio_links_other"},n.a.createElement("a",{id:"portofolio_git",href:"https://github.com/oanapopescu93",rel:"noopener noreferrer",target:"_blank"},n.a.createElement(U.a,null,n.a.createElement("i",{className:"fa fa-github"})," ",n.a.createElement("span",null,"github.com/oanapopescu93"))),n.a.createElement(U.a,{id:"portofolio_tutorials","data-toggle":"modal","data-target":"#myModal_tutorials",onClick:()=>{this.portofolio_tutorials_click()}},n.a.createElement("i",{className:"fa fa-book"})," ",n.a.createElement("span",null,"Tutorials")))))),n.a.createElement(h.a,{id:"myModal_portofolio",className:"mymodal text-center",show:e.state.isOpen_portofolio,onHide:e.closeModal_portofolio},n.a.createElement(h.a.Header,{closeButton:!0},n.a.createElement(h.a.Title,null,"Details")),n.a.createElement(h.a.Body,null,n.a.createElement("div",{className:"title"}),n.a.createElement("div",{className:"platform"}),n.a.createElement("div",{className:"used"}),n.a.createElement("div",{className:"status"}))),n.a.createElement(h.a,{id:"myModal_tutorials",className:"mymodal text-center",show:e.state.isOpen_tutorials,onHide:e.closeModal_tutorials},n.a.createElement(h.a.Header,{closeButton:!0},n.a.createElement(h.a.Title,null,"Tutorials")),n.a.createElement(h.a.Body,null,n.a.createElement("div",{id:"tutorial_box_container"},(()=>{let e=this.state.portofolio.tutorials;return"undefined"!==typeof e&&null!==e&&e.length>0?n.a.createElement(n.a.Fragment,null,e.map((function(t,a){return n.a.createElement(C.a,{key:a,id:"tutorial_box_"+a},n.a.createElement(M.a,{sm:8,className:"box01"},n.a.createElement("h4",{className:"tutorial_name"},t.name),n.a.createElement("p",null,t.description),n.a.createElement("p",null,"What I used:"),n.a.createElement(n.a.Fragment,null,t.used.map((function(e,t){return n.a.createElement("span",{key:t,className:"box"},e)})))),n.a.createElement(M.a,{sm:4,className:"box02"},n.a.createElement("a",{className:"tutorial_link",href:e[a].link,target:"_blank",rel:"noopener noreferrer"},"Link")))}))):n.a.createElement("div",null,"No tutorials yet")})()))))}}var ee=X,te=a(46);function ae(e){let t=[],a=[];return e.data[0]&&(t=e.data[0]),e.data[1]&&(a=e.data[1]),n.a.createElement("div",{className:e.div_class+" text-left"},n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("i",{className:e.icon}),n.a.createElement("a",{href:e.link},e.text))}))),n.a.createElement("p",{className:"text-center"},"Or get social with me:"),n.a.createElement("ul",{className:"text-center"},a.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.icon})))}))))}class le extends l.Component{constructor(e){super(e),this.state={data:e.data,socket:e.socket},this.send_form=this.send_form.bind(this)}componentDidMount(){i()("body").on("click",".click_me",(function(){var e=i()(this).parent().parent();e.hasClass("flip")||(e.addClass("flip"),setTimeout((function(){e.addClass("open"),setTimeout((function(){e.addClass("turn")}),800)}),1e3))}))}send_form(){let e=!0;i()("#contact_email_error").hide(),i()("#contact_message_error").hide();let t=i()("#contact_email").val();new RegExp("^[a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$").test(t)||(e=!1,i()("#contact_email_error").show());let a=i()("#contact_message").val();if(""===a&&(e=!1,i()("#contact_message_error").show()),e){let e={first_name:i()("#contact_first_name").val(),last_name:i()("#contact_last_name").val(),email:t,phone:i()("#contact_telephone").val(),subject:i()("#contact_title").val(),html:a};this.state.socket.emit("contact_send",e),this.state.socket.on("contact_read",(function(e){i()(".show_results_container").removeClass("success error"),"Success!"===e[0]?i()(".show_results_container").addClass("success"):"Error!"===e[0]&&i()(".show_results_container").addClass("error"),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auto";i()(".show_results_container").length>0&&(i()(".show_results_container").show(),i()(".show_results").css("max-width",a),i()(".show_results").css("height",l),i()(".show_results h1").length>0&&(i()(".show_results h1").empty(),i()(".show_results h1").append(e)),i()(".show_results p").length>0&&(i()(".show_results p").empty(),i()(".show_results p").append(t)),i()(".show_results_container").click((function(){i()(".show_results_container").hide()})))}(e[0],e[1])}))}}render(){return n.a.createElement(c.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:6,className:"visible-xs-block"},n.a.createElement(ae,{div_class:"contact-page-mobile",data:this.state.data})),n.a.createElement(M.a,{sm:6,className:"box-contact-form"},n.a.createElement(te.a,null,n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:6},n.a.createElement("label",{htmlFor:"first_name"},"First Name"),n.a.createElement("input",{id:"contact_first_name",className:"form-control",type:"text",name:"first_name"})),n.a.createElement(M.a,{sm:6},n.a.createElement("label",{htmlFor:"last_name"},"Last Name"),n.a.createElement("input",{id:"contact_last_name",className:"form-control",type:"text",name:"last_name"}))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("label",{htmlFor:"email"},"Email Address *"),n.a.createElement("input",{id:"contact_email",className:"form-control",type:"text",name:"email"}),n.a.createElement("p",{className:"contact_error text-red",id:"contact_email_error"},"Please provide an email."))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("label",{htmlFor:"telephone"},"Telephone Number"),n.a.createElement("input",{id:"contact_telephone",className:"form-control",type:"text",name:"telephone"}))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("label",{htmlFor:"message"},"Title"),n.a.createElement("input",{id:"contact_title",className:"form-control",type:"text",name:"title"}))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement("label",{htmlFor:"message"},"Message *"),n.a.createElement("textarea",{id:"contact_message",className:"form-control",name:"message",cols:"25",rows:"6"}),n.a.createElement("p",{className:"contact_error text-red",id:"contact_message_error"},"Please provide a message."))),n.a.createElement(C.a,null,n.a.createElement(M.a,{sm:12},n.a.createElement(U.a,{onClick:()=>{this.send_form()},className:"button-white",name:"send",type:"button"},"Send"))))),n.a.createElement(M.a,{sm:6,className:"box-container text-center hidden-xs"},n.a.createElement("div",{className:"contact_page_container"},n.a.createElement("div",{className:"contact_back"},n.a.createElement("div",{className:"click_me"},n.a.createElement("span",null,"Click me"))),n.a.createElement("div",{className:"contact_front"},n.a.createElement(ae,{div_class:"contact-info",data:this.state.data}),n.a.createElement("div",{className:"corner corner-1"}),n.a.createElement("div",{className:"corner corner-2"}),n.a.createElement("div",{className:"corner corner-3"}),n.a.createElement("div",{className:"corner corner-4"}))))),n.a.createElement("div",{className:"show_results_container"},n.a.createElement("div",{className:"show_results"},n.a.createElement("h1",null," "),n.a.createElement("p",null," "))))}}var ne=le;class oe extends l.Component{constructor(e){super(e),this.state={template:e.template,data:e.data,socket:e.socket}}render(){return n.a.createElement("div",{id:this.props.template,className:"full-height"},n.a.createElement("div",{className:"full-height-title"},n.a.createElement(B,{template:this.props.template})),n.a.createElement("div",{className:"full-height-content"},(()=>{switch(this.props.template){case"about":return n.a.createElement($,{socket:this.state.socket,data:this.state.data});case"portofolio":return n.a.createElement(ee,{socket:this.state.socket,data:this.state.data});case"contact":return n.a.createElement(ne,{socket:this.state.socket,data:this.state.data});default:return n.a.createElement(q,{socket:this.state.socket,data:this.state.data})}})()))}}var se=oe;class re extends l.Component{constructor(e){super(e),this.state={data:e.data,socket:e.socket}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,null),n.a.createElement(se,{template:"header",data:this.state.data.header,socket:this.state.socket}),n.a.createElement(se,{template:"about",data:this.state.data.about,socket:this.state.socket}),n.a.createElement(se,{template:"portofolio",data:this.state.data.portofolio,socket:this.state.socket}),n.a.createElement(se,{template:"contact",data:this.state.data.contact,socket:this.state.socket}),n.a.createElement(g,null),n.a.createElement(T,{tutorials:this.state.data.portofolio.tutorials}),n.a.createElement(w,null),n.a.createElement(y,null))}}var ie=re;var ce=function(e){return n.a.createElement("div",{id:"loader_container"},n.a.createElement("span",null,"Loading"),n.a.createElement("div",{id:"loader01",className:"loader"}),n.a.createElement("div",{id:"loader02",className:"loader"}),n.a.createElement("div",{id:"loader03",className:"loader"}),n.a.createElement("div",{id:"loader04",className:"loader"}))},me=a(45);const de=a.n(me)()("/");var pe,ue=function(){var e=null,t={enable:function(){null!=e&&(window.console.log=e,window.console.warn=e,window.console.error=e)},disable:function(){e=console.log,window.console.log=function(){},window.console.warn=function(){},window.console.error=function(){}}};return t}();class he extends l.Component{constructor(e){super(e),(pe=this).state={data:null},pe.getData=pe.getData.bind(pe)}componentDidMount(){pe.getData().then(e=>{setTimeout((function(){pe.setState({data:e})}),1e3)})}getData(){return new Promise((function(e,t){de.emit("info_send","info"),de.on("info_read",(function(t){e(t)}))}))}render(){return ue.disable(),n.a.createElement("div",{className:"App"},pe.state.data?n.a.createElement(ie,{socket:de,data:pe.state.data}):n.a.createElement(ce,null))}}var _e=he;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},20:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/CV - Oana Popescu.95dda7c0.pdf"},40:function(e,t,a){e.exports=a.p+"static/media/CV - Oana Popescu.fc970891.doc"},42:function(e,t,a){e.exports=a.p+"static/media/logo-bear.8944d57a.png"},47:function(e,t,a){e.exports=a(100)},78:function(e,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.5a501300.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(157),l=a(171),d=a(161),c=a(162),u=a(158),f=(a(153),a(148),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{className:"post-list"},o.a.createElement("li",null,r&&o.a.createElement(s.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&n.frontmatter.date&&o.a.createElement(s.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component));t.default=f;var p="2761936148"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(159);var d=n.a.createContext({}),c=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(168),n=a.n(r),i=a(169),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{textDecoration:"none",color:"black"},"a:hover":{textDecoration:"none"},h3:{fontSize:"2rem",fontWeight:"600"},"h3 a:hover":{textDecoration:"none",color:"#868e96"},h1:{border:0,fontWeight:900},footer:{display:"flex",flexDirection:"row-reverse",marginTop:"2rem"},"footer a":{fontWeight:"bold"},ul:{margin:0}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},159:function(e,t,a){var r;e.exports=(r=a(160))&&r.default||r},160:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},161:function(e,t,a){"use strict";a(33);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(157),l=a(158),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{marginTop:0}},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,n),o.a.createElement("footer",null,o.a.createElement("a",{href:"https://github.com/jonggyun"},"GitHub")))},t}(o.a.Component);t.a=d},162:function(e,t,a){"use strict";var r=a(163),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(170),d=a.n(l),c=a(157);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"jongp.me",description:"A Front-End Developer.",author:"JongGyun Park"}}}}},164:function(e,t,a){"use strict";a(165)("fixed",function(e){return function(){return e(this,"tt","","")}})},165:function(e,t,a){var r=a(11),n=a(17),i=a(18),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},166:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAFXklEQVQ4yyWUfVDTRx7Gf3c9+2JRBBJSMLwkgQB5IaYVhNPaF6siiBgSRBE0BgQBAQEx0YApkSgoqMXXACq2VoXi1Rao57VnbWFKtTOd6/XaTttpb26undYZW6fTm95/+7nV++OZ787uzmefZ3f2q7g2bRHOCrdwbXKLovVlomTzZuGurRNbm5rFZllLyitEQZFDrCgoEDk52cJqNAi7KVXMj9MIjUoldAlaYZFzC6wmkWJME4qzfLPY4Kmi1LOV0i1VbKyqYYMcF5dVUOhaR2GxC4fTxdIli1hozcCcqiclUYs2TkOCVFpSAiY5l5Vp5imbBSXfuU4Ulqxn7YaNwlWxSax3e4RDOpUwUegsEWtlzc3NFum6+cKSppdudMKQGC+MugRhSdWJDEOyMEo9oVaL6Mh5Qnkur0DkO1wUlZY9AOdLR/mOYlY7S1hTUsqKlXlY01OwW4xkP2llcZaNXLuZ3AVm7OZ0uZaKUZeENj6O6KgYlBJ5h+667ZRXbxOl7i04yjbKuGUUSPDzq/Kx2TKRDtDEqomLiWJORATGxPlYdMnEzJmLVq0mXqORsOj/A6samsSOPe00+/2ibW8AX2fwgaobG3GVV2Cz23n4D7NIUsew5ulc7Cl64ufNJVWtYmFSIqmxsTzy0CwU5XdSv0ep37VbeDu78Ab3CSm8ErazYy8te/w0+XaTv9aBNlbFm/2dfD4+zMTx/Ryu2cBocBdTZ/sJ76ikv3krB2o3YUpOksA2rwj0HCLY2ye6jhyhs6/v/phAz0EC3d2U19RSUbyKuzNXuXEyiLfcybCvnh+nXufzP4UZ7/Gyv95DcIuTyrxnUHYGgiJ0+CU6D/WKwMH7kB7aQyH8+7oeuG2tr2XAt41fP32HX7+Y4s7M29z54Br/uT3BP98I89f+AC+/uJOQx0mDMw+l1d8hgoceuBLdx47TezLM0fAgxwfPcDg8xLljR/houJe7tyf57csZ/vvVbe7NTPLvyVf44uIJbp3ez3fXR/jh7Vc5Lg9W/F0h0dreTqPXKxradtHY1iYla+tOapqaCXXs5tPRE/zrnRF++vAtfvvkJt+MDjBc5yaw+gWmj/Vwb3qSb988S7CmDOWlwTMi/MoFzly6LM6PjnHu0oh0N0TPkaPs7QrR0trCjbN9/Dh9lTtTV/nl9nV+/kDGvXaZ6wc7+PtQL9+8McyfjwYoWJKDkpisF+lmK/asRWLpc8tYXeSgwl3FtvomWtp8uKvr2L29Ut7b69y9NcH3N6/w1egQ/zjVy9SxEO/JyDNDBxkO7MCQlIxiNGUIgzGNhORkMU+lYnZEJI/OnsPsxyNRxWhQqeNIM+j4y0AX390c4evJ80zV1jHxx0KGn1/FlWArt17uw+cpJUruVVp21Ig9vkY6/E2io70Zn6+JxsZqCgry0etSiZwTiValprt2HTcGgnw9cY7PLpxiOtDONX8LN0/to6e+HH2yjocfm4vichWJYKeXkQsnxbtvXeTj6XGuvDrAyuUriY2M4km9jmctJs4FtnHxxRrGDrTyydggf3stzHvhbravXU6U/I4RkTEy3TyU9gNBUVlXg6e6SniqK3HKVvXM0uWyTWWw0m5j1VN2VmSauHaiQ8Y9zViogcOeIjocy2jIW0JGvIZZsx4lSh4eHa2Rf1k20dWFxWRn5QizyUJ29mIyrQvJtVopyskiy6An32bmxum98lHG+Pb6WWbOd0unLVzq3M4SSyqPzY4gPlYju44exWSyiaeXLiMp0SAyMizYFizCmGJimXS2Jvc+UMfijDTO7Gvi3kdX+P79y3w5Ochn4wOM9/vJTDcSEx2DXqvFnGLgf3JhNa10igO6AAAAAElFTkSuQmCC",width:50,height:50,src:"/static/97e44f4d494143e8e918910d57be28e4/56f1c/profile_img.png",srcSet:"/static/97e44f4d494143e8e918910d57be28e4/56f1c/profile_img.png 1x,\n/static/97e44f4d494143e8e918910d57be28e4/559e9/profile_img.png 1.5x,\n/static/97e44f4d494143e8e918910d57be28e4/c939f/profile_img.png 2x,\n/static/97e44f4d494143e8e918910d57be28e4/6a64a/profile_img.png 3x"}}},site:{siteMetadata:{author:"JongGyun Park",social:{github:"jonggyun"}}}}}},167:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(34)),s=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,S=e.itemProp,E="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),R={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var L=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(y,(0,l.default)({src:L.base64},R)),L.tracedSVG&&d.default.createElement(y,(0,l.default)({src:L.tracedSVG},R)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,src:L.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},L))}}))}if(h){var O=h,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},i);return"inherit"===i.display&&delete A.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},O.base64&&d.default.createElement(y,(0,l.default)({src:O.base64},R)),O.tracedSVG&&d.default.createElement(y,(0,l.default)({src:O.tracedSVG},R)),E&&d.default.createElement(v,{title:t,style:{backgroundColor:E,width:O.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:O.height}}),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),d.default.createElement(y,{alt:a,title:t,width:O.width,height:O.height,src:O.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:O.width,height:O.height},O))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=b;t.default=E},171:function(e,t,a){"use strict";a(164);var r=a(166),n=a(0),i=a.n(n),o=a(157),s=a(167),l=a.n(s),d=a(158),c=(a(149),function(){return i.a.createElement(o.a,{className:"about-btn",to:"/about/"},"#About_Me")});var u="547455787";t.a=function(){return i.a.createElement(o.b,{query:u,render:function(e){var t=e.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("div",null,i.a.createElement("span",null,"Written by ",i.a.createElement("strong",null,t))," ",i.a.createElement(c,null),i.a.createElement("br",null),i.a.createElement("p",null,"Front-End developer.")))},data:r})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-99ce18a4f8748a826ef9.js.map
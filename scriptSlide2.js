 //<![CDATA[
var classicMode = false;
var summary = 20;
var indent = 3;
imgr = new Array();
imgr[0] = "//1.bp.blogspot.com/-xlVyYuU-XVg/VtXfu1MKCTI/AAAAAAAABcQ/NCr59r2q258/s1600/no-image.png";
showRandomImg = true;
aBold = true;
summaryPost = 170;
summaryTitle = 25;
numposts1 = 6;
numposts2 = 8;
numposts3=3;
var classicMode = false;
var summary = 50;
var indent = 3;
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();



function showrecentposts1(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
    if (numposts3 <= json.feed.entry.length) {
  maxpost = numposts1;
  }
 else
       {
    maxpost=json.feed.entry.length;
    }
 document.write('<div id="main-slider">');
   for (var i = 0; i < maxpost; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
var feat_cat=entry.category[0].term;
  var pcm;
     var posturl;

  var cate ='';
  for (var e=0; e < json.feed.entry[i].category.length;e++) {
   cate = cate + '<a href="/search/label/'+json.feed.entry[i].category[e].term+'?max-results=6">'+json.feed.entry[i].category[e].term+'</a>, ';
  }
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }



  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }

     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";

     postdate = entry.published.$t;

 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];

 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }
 var tmb = img[i];
 var daystr = day+ ' ' + m + ' ' + y ;

      var trtd = '<div class="item"><a class="thumb-owl" href="'+posturl+'"><img src="'+tmb+'" /></a><div class="feat-wrapper"><div class="feat-wrapper-inner"><div class="feat--inner"><div class="feat-header"><h2 class="feat-title"><a href="'+posturl+'">'+posttitle+'</a></h2></div></div></div></div> <span class="border-feat"></span></div>';
 document.write(trtd);

 j++;
}
 document.write('</div>');
}



function stripHtmlTags(s, max) {
    return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0, max - 1).join(' ')
}

function createSummaryAndThumb(pID, title, url, date, comment, author, tag, auth_url) {
    var posturl = url;
    var title = title;
    var date = date;
    var comment = comment;
    var tag = tag;
    var div = document.getElementById(pID);
    var img = div.getElementsByTagName("img");
var quote = div.getElementsByTagName("blockquote");

    var content1 = div.innerHTML.replace(/<img.*?>/ig, '').replace(/<iframe.*?>/ig, '');
    var arr = content1.split(/<br\s*\/?>/);
    var content = arr[0] + arr.slice(1, -1).join('<br>') + arr.slice(-1);


    var month = new Array();
    month[1] = "January";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";
    var n = month[date.split('/')[0]];
    var date1 = date.split('/')[1];
    var year = date.split('/')[2];

    if (img.length == 1) {
        var imgurl = img[0].src;
        var thumb = ' <header class="post-header"><div class="day">'+n+' '+date1+', '+year+'</div><h2 class="entry-title"><a class="animsition-link" href=' + posturl + '>' + title + '</a></h2></header><div class="post-image ImageWrapper"><a class="group1" href="'+imgurl+'"><img alt="' + title + ' Image" class="thumb-single" src="' + imgurl + '"></a></div> ';

        var summary1 = thumb + '<div class="entry-content clear"><div class="intro-text">' + stripHtmlTags(content, 60) + ' </div></div>';
    }
        else {
        if (img.length > 1) {
            var li = '';
            for (var i = 0; i < img.length; i++) {
                var li = li + '<a class="gal4" href="' + img[i].src + '"><img src="' + img[i].src + '"></a>';
            }
            var thumb = '<header class="post-header"><div class="day">'+n+' '+date1+', '+year+'</div><h2 class="entry-title"><a class="animsition-link" href=' + posturl + '>' + title + '</a></h2></header><div class="post-image"><div class="main-gallery">' + li + '</div></div>';
            var summary1 = thumb + '<div class="entry-content clear"><div class="intro-text">' + stripHtmlTags(content, 60) + ' </div></div>';
        }else {
            var frame = div.getElementsByTagName("iframe");
            if (frame.length >= 1) {
                var iframe1 = frame[0].src;
                var thumb = '<header class="post-header"><div class="day">'+n+' '+date1+', '+year+'</div><h2 class="entry-title"><a class="animsition-link" href=' + posturl + '>' + title + '</a></h2></header><div class="post-image"><iframe frameborder="no" src="' + iframe1 + '" scrolling="no"></iframe></div>';

                var summary1 = thumb + '<div class="entry-content clear"><div class="intro-text">' + stripHtmlTags(content, 60) + ' </div></div>';
            } else {
                var summary1 = '<header class="post-header"><div class="day">'+n+' '+date1+', '+year+'</div><h2 class="entry-title"><a class="animsition-link" href=' + posturl + '>' + title + '</a></h2></header><div class="entry-content clear"><div class="intro-text">' + stripHtmlTags(content, 60) + ' </div></div>';
            }
        }
    }


    div.innerHTML = summary1;
    div.style.display = "block";
    var elem = document.getElementsByClassName("separator");
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = '';
    }

}
      //]]>

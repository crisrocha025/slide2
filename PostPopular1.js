// Popular Post Thumb
      $(document).ready(function() {$(&#39;.PopularPosts img&#39;).attr(&#39;src&#39;, function(i, src) {return src.replace( &#39;s72-c&#39;, &#39;s400&#39; );});});
                                      //<![CDATA[
                                      // Custom Popular Post
                                      $(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,420),s=t.lastIndexOf(" ");s>10&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});
                                    //]]>

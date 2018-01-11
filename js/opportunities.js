
                      var k = 1;
                      var j = 1;


                      $('.panel_panel2').css('display','none');

                      $('.section1').css('display','inline-block');
                      $('.section2').css('display','inline-block');
                      $('.container2').css('display','none');
                   
                      
                    var y = document.getElementsByClassName("paneltab1");
                    var z = document.getElementsByClassName("paneltab2");
                    var f = document.getElementsByClassName("tabpane");
                    var ffff = document.getElementsByClassName("tabpane2");
                    var gggg = ffff.length;
                    var nnnn = Math.floor(gggg/6);
                    
                    



                    
                    var g = f.length;
                    var nn = Math.floor(g/6);



                    for(var ii=0;ii<g;ii++){
                      var jj = ii + 1;
                      var kkk=jj%6;
                      if(kkk == 0){kkk=6}
                      var integerPart;
                     
                      if(jj%6==0){integerPart=Math.floor(jj/6)-1}
                        else{ integerPart = Math.floor(jj/6);}
                       
                        var addclass = "tab" + integerPart + "pane";
                        $(f[ii]).addClass(addclass);
                        var newclass = "tab-pane"+kkk+"";
                        $(f[ii]).addClass(newclass);
                        

                        }
                        
                       


                       for(var mm=0;mm<=nn;mm++){
                          var classadd =".tab"+ mm +"pane";
                          $(classadd).wrapAll( '<div id="exTab2" class="paneltab mySlides panel1 paneltab1"><div class="tab-content clearfix"></div></div>' );
                          
                        }
                     var x = document.getElementsByClassName("mySlides");
                    
                     


                                 function addLink(){
                                 var currentDiv = "currentDiv("+j+")"
                                 var $input = $('<a href="#" class="panel_button demo" style="font-size:30px;border-left:2px solid #000000;color:#000000;margin-left:10px;padding-left:10px;">'+j+'</a>');
                                 $input.attr("onclick",currentDiv)
                                 $input.appendTo($(".section1"));

                             }
                             while(j<= y.length){
                                 addLink()
                                 j++
                             }
                      var dots = document.getElementsByClassName("demo");

                      
                      

                      var slideIndex = 1;
                      showDivs(slideIndex);

                      function plusDivs(n) {
                        showDivs(slideIndex += n);
                      }

                      function currentDiv(n) {
                        showDivs(slideIndex = n);
                      }

                      function showDivs(n) {
                        var i;


                        
                        
                        if (n > x.length) {slideIndex = 1}
                        if (n < 1) {slideIndex = x.length}
                        for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";
                        }
                        for (i = 0; i < dots.length; i++) {
                           dots[i].className = dots[i].className.replace(" color_panel_button", "");
                        }
                        x[slideIndex-1].style.display = "block";
                        dots[slideIndex-1].className += " color_panel_button";
                      }

                         
                 
                     
                          $( ".panel_button" ).click(function( event ) {
                            event.preventDefault();

                          });
                          $( ".panel_button1" ).click(function( event ) {
                            event.preventDefault();

                          });

                    

                   
                    for(var ii=0;ii<gggg;ii++){
                      var jj = ii + 1;
                      var kkk=jj%6;
                      if(kkk == 0){kkk=6}
                      var integerPart;
                     
                      if(jj%6==0){integerPart=Math.floor(jj/6)-1}
                        else{ integerPart = Math.floor(jj/6);}
                       
                        var addclass = "tab" + integerPart + "pane2";
                        $(ffff[ii]).addClass(addclass);
                        var newclass = "tab-pane"+kkk+"";
                        $(ffff[ii]).addClass(newclass);
                        

                        }
                         for(var mm=0;mm<=nnnn;mm++){
                          var classadd =".tab"+ mm +"pane2";
                          $(classadd).wrapAll( '<div id="exTab2" class="paneltab mySlides2 panel2 paneltab2"><div class="tab-content clearfix"></div></div>' );
                          
                        }
                          
                           function addLink2(){

                                        var currentDiv = "currentDiv1("+k+")"
                                        var $input = $('<a href="#" class="panel_button1 demos" style="font-size:30px;border-left:2px solid #000000;color:#000000;margin-left:10px;padding-left:10px;">'+k+'</a>');
                                        $input.attr("onclick",currentDiv)
                                        $input.appendTo($(".section2"));

                                    }
                                    while(k<= z.length){
                                        addLink2()
                                        k++
                                    }
                        
                         



                                  var slideIndex1 = 1;
                                  showDivs1(slideIndex1);

                                  function plusDivs1(n1) {
                                    showDivs1(slideIndex1 += n1);
                                  }

                                  function currentDiv1(n1) {
                                    showDivs1(slideIndex1 = n1);
                                  }

                                  function showDivs1(n1) {
                                    var i1;
                                    var x1 = document.getElementsByClassName("mySlides2");
                                    var dots1 = document.getElementsByClassName("demos");
                                    if (n1 > x1.length) {slideIndex1 = 1}
                                    if (n1 < 1) {slideIndex1 = x1.length}
                                    for (i1 = 0; i1 < x1.length; i1++) {
                                       x1[i1].style.display = "none";
                                    }
                                    for (i1 = 0; i1 < dots1.length; i1++) {
                                       dots1[i1].className = dots1[i1].className.replace(" color_panel_button", "");
                                    }
                                    x1[slideIndex1-1].style.display = "block";
                                    dots1[slideIndex1-1].className += " color_panel_button";
                                  }









                      $('.nav-pills li:nth-child(1) a').click(function(){
                        $('.panel_panel2').css('display','none');
                        $('.panel_panel1').css('display','block');


                        $('.container2').css('display','none');
                        $('.container1').css('display','block');
                        });
                   $('.nav-pills li:nth-child(2) a').click(function(){
                     $('.panel_panel2').css('display','block');
                     $('.panel_panel1').css('display','none');


                     $('.container2').css('display','block');
                     $('.container1').css('display','none');
                   });

                




                      











$( ".panel_button" ).click(function( event ) {
  event.preventDefault();

});
$( ".panel_button1" ).click(function( event ) {
  event.preventDefault();

});

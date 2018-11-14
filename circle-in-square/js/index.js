var rangeSlider = function(){
  var slider = $(".sliderContainer"),
      range = $(".slider"),
      value = $(".display"),
      radius,
      l,
      a,
      hole1,
      hole2;

    range.on('input', function(){
      $(this).next(value).html(this.value);
     radius=parseInt(this.value);    
      a=2*radius;
      l=150-a/2;
      
      hole1="m0,0 l 300,0 l 0,150 l-"+l+",0 a 10,10 0 0,0 -"+a+",0 l -"+l+",0 z";
      hole2="m0,300 l 300,0 l 0,-150 l -"+l+",0 a 10,10 0 0,1 -"+a+",0 l -"+l+",0 z";
      
    $("#circle").attr("r",radius);     
    $("#top").attr("d",hole1); 
    $("#bottom").attr("d",hole2); 
    $("#debug").html(hole1);    
    });
  
};

rangeSlider();
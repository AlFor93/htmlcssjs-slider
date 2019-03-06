function leftClick(){

  var activeImg = $(".picture-container > img.active");
  activeImg.removeClass("active");
  var prevActiveImg = activeImg.prev("img");

  var lastImg = $(".picture-container > img.last")

  if (activeImg.hasClass("first")) {
    prevActiveImg = lastImg;
  }
  prevActiveImg.addClass("active");
  matchingDotsWImg()
}

function rightClick(){

  var activeImg = $(".picture-container > img.active");
  activeImg.removeClass("active");
  var nextActiveImg = activeImg.next("img");

  var firstImg = $(".picture-container > img.first")

  if (activeImg.hasClass("last")) {
    nextActiveImg = firstImg;
  }
  nextActiveImg.addClass("active");
  matchingDotsWImg()
}

function matchingDotsWImg(){
  var imgs = $(".picture-container > img");
  var activeIndex;
  for (var i = 0; i < imgs.length; i++) {
    if (imgs.eq(i).hasClass("active")) {
      activeIndex = i;
    }
  }
  var oldDot = $(".dot-link-wrapper > i.fas");
  oldDot.removeClass("fas").addClass("far");
  var dots = $(".dot-link-wrapper > i");
  var newDot = dots.eq(activeIndex);
  newDot.removeClass("far").addClass("fas");
}














function init() {
  var leftPart = $(".left-part")
  var rightPart = $(".right-part")

  leftPart.click(leftClick);
  rightPart.click(rightClick);

}

$(document).ready(init);

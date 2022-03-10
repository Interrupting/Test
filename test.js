const img = new Image();
img.onload = function() {
  alert(this.width + 'x' + this.height);
}
img.src = 'https://ide.codeanywhere.com/rocket-man-349548476283/mini-browser/home/cabox/workspace/flappyBirb/sprite.png';
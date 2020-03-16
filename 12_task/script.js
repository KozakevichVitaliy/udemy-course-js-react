class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = textAlign;
  }
  createElement(element) {
    let element = document.createElement(element);
    document.body.appendChild(element);
    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    element.style.cssText = param;
  }
}

const item = new Options(300, 350, 'red', 14, 'center');
item.createDiv('div');

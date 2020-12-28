let div = dom.create("<div>newDiv</div>");

dom.after(test, div);

const div3 = dom.create('<div id = "parent"></div>');
dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi,I am Tina");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.text(test, `你好这是新的内容`);

dom.style(test, { border: "1px solid red", color: "blue" });

dom.class.add(test, "red");

dom.on(test, "click", () => {
  console.log("点击了");
});

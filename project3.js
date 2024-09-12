let parent = document.createElement("div");
let data;

const common = () => {
  document.body.appendChild(parent);

  parent.style.display = "flex";
  parent.style.flexWrap = "wrap";
  parent.style.backgroundColor = "#184157";
  parent.style.justifyContent = "center";
  parent.style.gap = "10px";
  parent.style.margin = "10px";

  data.forEach((e, i) => {
    // console.log(e)
    let child = document.createElement("div");

    let id = document.createElement("h1");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let description = document.createElement("p");
    let image = document.createElement("img");

    
    image.style.width = "200px";
    image.style.height = "200px";
    child.style.backgroundColor = "teal";
    child.style.color = "white";
    child.style.padding = "20px";
    child.style.margin = "20px";
    child.style.borderRadius = "10px";
    

    // child.style.border = "2px solid green"
    child.style.width = "340px";

    id.innerHTML = e.id;
    title.innerHTML = `title:  ${e.title}`;
    price.innerHTML = `price: ${e.price}`;
    description.innerHTML = e.description.slice(0, 40);
    image.src = e.image;

    child.appendChild(id);
    child.appendChild(title);
    child.appendChild(price);
    child.appendChild(description);
    child.appendChild(image);

    parent.appendChild(child);
  });
};

const click1 = async () => {
  let a = await fetch("https://fakestoreapi.com/products");
  let b = await a.json();
  data = b;
  // console.log(data)

  common();
};

click1();

//

const handelsearch = () => {
  parent.innerHTML = "";

  let inpVal = document.getElementById("inp").value;

  let filteredData = data.filter((e) =>
    e.title.toLowerCase().includes(inpVal.toLowerCase())
  );

  // console.log(filteredData)
  data = filteredData;
  common();
};
const range = () => {
  parent.innerHTML = "";

  let Range = document.getElementById("customRange").value;
  document.getElementById("price").innerHTML = "price" + Range;
  let filteredData = data.filter((e) => e.price <= Range);

  console.log(Range);
  data = filteredData;
  common();
};

const getCategory = async () => {
  let a = await fetch("https://fakestoreapi.com/products/categories");
  let b = await a.json();
  // console.log(b)

  let sel = document.getElementById("sel");

  b.forEach((e) => {
    // console.log(e)
    let opt = document.createElement("option");
    opt.innerHTML = e;
    sel.appendChild(opt);
  });
};

getCategory();

const handelsecect = async () => {
  let sel = document.getElementById("sel").value;
  // console.log("aaa", sel)

  parent.innerHTML = "";

  let a = await fetch(`https://fakestoreapi.com/products/category/${sel}`);
  let b = await a.json();
  data = b;

  common();
};

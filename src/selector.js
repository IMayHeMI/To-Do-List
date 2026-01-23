export default function () {
    let lists = ["My List"];

    function selectorRender(){
        const content = document.querySelector(".content");

        const selector = document.createElement("div");
        selector.classList.add("selector");

        const selectorLabel = document.createElement("label");
        selectorLabel.htmlFor = "lists";
        selectorLabel.innerHTML = "Available lists:"

        const select = document.createElement("select");
        select.setAttribute("name", "lists");
        select.id = "lists";
        const defaultOption = document.createElement("option");
        defaultOption.value = "My List";
        defaultOption.innerHTML = lists[0];

        const addList = document.createElement("button");
        addList.type = "button";
        addList.classList.add("addList");
        addList.innerHTML = "+";

        select.append(defaultOption);
        selector.append(selectorLabel, select, addList);
        content.append(selector);
    };

    return {
        selectorRender,
    };
};
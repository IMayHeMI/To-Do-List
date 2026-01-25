export default function () {
    const selector = document.querySelector(".selector");

    let lists = ["My List"];

    function selectorRender(){  
        selector.innerHTML = "";
                        
        const selectorLabel = document.createElement("label");
        selectorLabel.htmlFor = "lists";
        selectorLabel.innerHTML = "Available lists:"

        const select = document.createElement("select");
        select.setAttribute("name", "lists");
        select.id = "lists";
        const defaultOption = document.createElement("option");
        defaultOption.value = lists[0];
        defaultOption.innerHTML = lists[0];

        const addList = document.createElement("button");
        addList.type = "button";
        addList.classList.add("addList");
        addList.innerHTML = "+";

        select.append(defaultOption);
        selector.append(selectorLabel, select, addList);    
    };

    return {
        selectorRender,
    };
};
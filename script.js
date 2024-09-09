function init(){
    let size=16;
    let container= document.getElementById("container");
    function gridBuild(size)
    {
        let tempSize = size;
        while(size>0){
            let rowItem=document.createElement("div");
            rowItem.className = "row-item";
            let itemNum=tempSize;
            while(itemNum>0){
                let columnItem= document.createElement("div");
                columnItem.className = "column-item";
                rowItem.appendChild(columnItem);
                columnItem.addEventListener("mouseover",(event) => {
                    event.target.style.backgroundColor = "rgb(255, 208, 0)";
                })
                // columnItem.addEventListener("mouseleave",(event) => {
                //     event.target.style.backgroundColor = "#fff";
                // })
                itemNum = itemNum - 1;
            }
            container.appendChild(rowItem);
            size = size - 1;
        }
    }
    gridBuild(16);

    let button= document.getElementById("button");
    button.addEventListener("click", () => {
        let gridSize = prompt("Enter Grid Size less than 100");
        gridSize=parseInt(gridSize,10);
        if(!isNaN(gridSize) && gridSize > 0 && gridSize<100)
        {
            document.querySelectorAll('.row-item').forEach(e => e.parentNode.removeChild(e));
            gridBuild(gridSize);
        }
        else {
            alert("Please enter a valid positive number.");
        }
    });
}
document.addEventListener('DOMContentLoaded', init);
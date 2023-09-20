const onClick = () => {
    const middleBlock = window.document.getElementsByClassName("middle-block")[0];
    const blockState = middleBlock.classList[1];
    
    if (blockState === "open"){
    middleBlock.classList.remove("open");
    middleBlock.classList.add("close");
    } else {
    middleBlock.classList.remove("close");
    middleBlock.classList.add("open");
    }
    }    
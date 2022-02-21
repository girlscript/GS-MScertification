function showPanel(panelIndex,colorCode) {
    var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
    var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor="white";
    tabButtons[panelIndex].style.color="#47ABFC";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

export default showPanel;
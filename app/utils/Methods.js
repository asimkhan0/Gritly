selectTab = (tabsArray, selectedTab) => {
    const newList = tabsArray.map(tab => {
        if(tab.value === selectedTab) {
            tab.active = true
        }else{
            tab.active = false
        }
        return tab;
    });

    return newList;
}

findSelectedTab = (tabsArray) => {
    return tabsArray.find(item => {
        if(item.active){
            return item.value
        }
    })
}

export default Methods = {
    selectTab,
    findSelectedTab
}
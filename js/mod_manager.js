//Created using https://www.cssscript.com/multi-select-tree/
class MODMANAGER {
  constructor() {
    //Creates container div
    this.MOD_MANAGER_DIV = document.createElement("div");
    this.MOD_MANAGER_DIV.classList.add("mod_manager");

    //#region Header Div
    this.MOD_MANAGER_HEADER_DIV = document.createElement("div");
    this.MOD_MANAGER_HEADER_DIV.classList =
      "mod_manager_header uk-label uk-label-danger";
    this.MOD_MANAGER_HEADER_DIV.innerText = "Select Installed Mods";
    this.MOD_MANAGER_DIV.appendChild(this.MOD_MANAGER_HEADER_DIV);
    //#endregion

    //If the page is opened for the first time, the available mods are saved to local storage
    if (localStorage.getItem("installedMods") === null) {
      localStorage.setItem("installedMods", JSON.stringify([]));
    }

    //#region Selection Divs
    //Creates container div for selecting mods to install
    // this.INSTALL_SELECT_LABEL = document.createElement("label");
    // this.INSTALL_SELECT_LABEL.innerHTML = "Install Mods";
    // this.INSTALL_SELECT_LABEL.className = "name_label";
    // this.MOD_MANAGER_DIV.appendChild(this.INSTALL_SELECT_LABEL);

    this.INSTALL_SELECT_DIV = document.createElement("div");
    this.INSTALL_SELECT_DIV.style.marginBottom = "38%";
    this.MOD_MANAGER_DIV.appendChild(this.INSTALL_SELECT_DIV);

    //#endregion

    //#region Footer Div
    this.MOD_MANAGER_FOOTER_DIV = document.createElement("div");
    this.MOD_MANAGER_FOOTER_DIV.classList.add("mod_manager_footer");
    this.MOD_MANAGER_DIV.appendChild(this.MOD_MANAGER_FOOTER_DIV);

    //Footer Button Container
    this.MOD_MANAGER_FOOTER_BTNS = document.createElement("div");
    this.MOD_MANAGER_FOOTER_BTNS.classList.add("mod_manager_footer_buttons");
    this.MOD_MANAGER_FOOTER_DIV.appendChild(this.MOD_MANAGER_FOOTER_BTNS);

    this.MOD_MANAGER_FOOTER_SAVE_BTN = document.createElement("button");
    this.MOD_MANAGER_FOOTER_SAVE_BTN.classList =
      "uk-button uk-button-primary uk-width-1-1 uk-height-1-1 uk-text-nowrap";
    this.MOD_MANAGER_FOOTER_SAVE_BTN.textContent = "SAVE";
    this.MOD_MANAGER_FOOTER_SAVE_BTN.onclick = () =>
      (this.WAITING_FOR_USER = 0);
    this.MOD_MANAGER_FOOTER_BTNS.appendChild(this.MOD_MANAGER_FOOTER_SAVE_BTN);

    this.MOD_MANAGER_FOOTER_CANCEL_BTN = document.createElement("button");
    this.MOD_MANAGER_FOOTER_CANCEL_BTN.classList =
      "uk-button uk-button-primary uk-width-1-1 uk-height-1-1 uk-text-nowrap";
    this.MOD_MANAGER_FOOTER_CANCEL_BTN.textContent = "CANCEL";
    this.MOD_MANAGER_FOOTER_CANCEL_BTN.onclick = () =>
      (this.WAITING_FOR_USER = -1);
    this.MOD_MANAGER_FOOTER_BTNS.appendChild(
      this.MOD_MANAGER_FOOTER_CANCEL_BTN
    );
    //#endregion
  }
  show(editorDiv) {
    this.INSTALL_SELECT.updateValue(
      JSON.parse(localStorage.getItem("installedMods"))
    );
    editorDiv.appendChild(this.MOD_MANAGER_DIV);
    this.MOD_MANAGER_DIV.style.display = "flex";
  }
  async userExit() {
    this.WAITING_FOR_USER = 1;
    while (this.WAITING_FOR_USER == 1) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    this.MOD_MANAGER_DIV.style.display = "none";
    if (this.WAITING_FOR_USER == 0) {
      localStorage.setItem(
        "installedMods",
        JSON.stringify(this.INSTALL_SELECT.value)
      );
    }
    return this.INSTALL_SELECT.value;
  }
  /**
   * Adds mods from github page
   */
  async loadModList() {
    //Creates Treeselect for available mods
    let shaReq = await fetch(
            "https://api.github.com/repos/Roboloco-5338/XRPCode/contents?ref=mod_manager",
            {
              method: "GET",
              headers: {
                "X-GitHub-Api-Version": "2022-11-28",
                "Accept": "application/vnd.github+json"
              },
            }
          );
    
    let shas = await shaReq.json();
    let tree_SHA = shas.find((element) => element.name == "mods").sha;

    let modListReq = await fetch(
            `https://api.github.com/repos/Roboloco-5338/XRPCode/git/trees/${tree_SHA}?recursive=1`,
            {
              method: "GET",
              headers: {
                "X-GitHub-Api-Version": "2022-11-28",
              },
            }
          );
    let modlist=(await modListReq.json()).tree;

    let selectableMods = [];
    let nameDict = {};
    let depDict = {};
    for(let element of modlist
      .filter((file) => (file.path.length<3 || file.path.substring(file.path.length-3) !== ".js") && (file.path.length<5 || file.path.substring(file.path.length-5) !== ".json"))){
        let tempPointer = selectableMods;
        let elementPath = element.path;
        while (elementPath.includes("/")) {
          if (
            tempPointer.find(
              (alreadyExistingMods) =>
                alreadyExistingMods.name ===
                elementPath.substring(0, elementPath.indexOf("/"))
            ) === undefined
          ) {
            tempPointer.push({
              name: elementPath.substring(0, elementPath.indexOf("/")),
              value: elementPath.substring(0, elementPath.indexOf("/")),
              children: [],
            });
          }
          tempPointer = tempPointer.find(
            (mod) =>
              mod.name === elementPath.substring(0, elementPath.indexOf("/"))
          ).children;
          elementPath = elementPath.substring(elementPath.indexOf("/")+1);
        }
        tempPointer.push({
          name: elementPath,
          value: element.path.replace(" ", "%20"),
          children: [],
        });
        nameDict[elementPath]=element.path.replace(" ", "%20");
        let depReq = await fetch(
          `https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${element.path.replace(" ", "%20")}/deps.json?ref=mod_manager`);
        if(depReq.status==200){
          let deps = JSON.parse(atob((await depReq.json()).content));
          depDict[element.path.replace(" ", "%20")]=deps;
        }
      }
    this.INSTALL_SELECT = new Treeselect({
      parentHtmlContainer: this.INSTALL_SELECT_DIV,
      options: selectableMods,
      alwaysOpen: true,
      value: JSON.parse(localStorage.getItem("installedMods")),
    });
    this.INSTALL_SELECT.srcElement.addEventListener("input", (e) => {
      for(let element of this.INSTALL_SELECT.value){
        if(depDict[element]!==undefined){
          for(let dep of depDict[element]){
            this.INSTALL_SELECT.value.push(nameDict[dep]);
          }
        }
      }
      this.INSTALL_SELECT.mount();
    });

    this.downloadMods(JSON.parse(localStorage.getItem("installedMods")));
  }

  async downloadMods(selectedMods){
    for(let mod of selectedMods){
      let blocks = atob((await (await fetch(`https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${mod}/blocks.js?ref=mod_manager`)).json()).content);
      let block_js = document.createElement("script");
      block_js.textContent=blocks;
      document.head.appendChild(block_js);

      let python = atob((await (await fetch(`https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${mod}/python_blocks.js?ref=mod_manager`)).json()).content);

      let python_js = document.createElement("script");
      python_js.textContent=python;
      document.head.appendChild(python_js);
      let toolboxJson = JSON.parse(atob((await (await fetch(`https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${mod}/toolbox.json?ref=mod_manager`)).json()).content));
      toolboxJson.contents.forEach((element) => {
        this.addMod(element, blocklyToolbox.contents);
      });
    }
  }
  addMod(mod, toolboxPointer){
    if(mod.kind=="CATEGORY"){
      if(toolboxPointer.find((element)=>element.kind=="CATEGORY" && element.name==mod.name)==undefined){
        toolboxPointer.push(mod);
      }
      mod.contents.forEach((element)=>{
        this.addMod(element, toolboxPointer.find((element)=>element.kind=="CATEGORY" && element.name==mod.name).contents);
      });
    }
    else{
      if(toolboxPointer.find((element)=>element.name==mod.name)==undefined){
        toolboxPointer.push(mod);
      }
    }
  }

  async clearModDeps(repl){
    await repl.deleteFileOrDir("/lib/mods/")
  }

  async installDepsToXRP(repl, selectedMods){
    await this.clearModDeps(repl);
    for(let mod of selectedMods){
      let modReq = await fetch(
        `https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${mod}/deps?ref=mod_manager`,
        {
          method: "GET",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            "Accept": "application/vnd.github+json"
          },
        }
      );
      if(modReq.status==200){
        let modFiles = await modReq.json().entries;
        this.installDepDir(repl, modFiles);
      }
    }
  }

  async installDepDir(repl, dirContents){
    for(let file of dirContents){
      if(file.type=="dir"){
        let dirReq = await fetch(
          `https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${file.name}/?ref=mod_manager`,
          {
            method: "GET",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              "Accept": "application/vnd.github+json"
            },
          }
        );
        let dirContents = await dirReq.json().entries;
        await this.installDepDir(repl, dirContents);
      }
      else{
        let fileReq = await fetch(
          `https://api.github.com/repos/Roboloco-5338/XRPCode/contents/mods/${file.name}?ref=mod_manager`,
          {
            method: "GET",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              "Accept": "application/vnd.github+json"
            },
          }
        );
        let fileContent = await fileReq.json();
        await repl.uploadFile("lib/" + fileContent.path, atob(fileContent.content));
      }
    }
  }
}
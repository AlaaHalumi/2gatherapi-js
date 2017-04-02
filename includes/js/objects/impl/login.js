class Login extends Object{

    constructor(){
        super();
        this.annyangUtil = new AnnyangUtil();
        this.options = {};
    }

    draw(){
        let loginObject = document.getElementsByTagName("tg-login")[0];
        loginObject.innerHTML = "<input type='text'><br><input type='text'>";
        this.options = eval(loginObject.getAttribute("options"));
        this.initUtils();
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {};
        for(let command in this.options.commands){
            commands[this.options.commands[command].name] = this.options.commands[command].func;
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.initAnnyang(annyangOptions);
    }
}
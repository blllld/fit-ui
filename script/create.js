const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const { name } = yargs.alias('n', 'name').argv
const path = require('path');



if (name === undefined) {
    return console.log("构建失败:" + chalk.red("缺少" + chalk.yellow(" -n ") + "参数"))
}
// 转为首字母小写的项目
const originalName = name.replace(/./, r => r.toLowerCase());

// 按照大写字母转为折线+小写
const brokenName = originalName.replace(/[A-Z]/g, r => "-" + r.toLowerCase());

// 首字母大写的模块组件名称
const moduleName = originalName.replace(/./, r => r.toUpperCase());

// 组件所在文件夹
const packageRoot = path.resolve(__dirname, "../packages/components", brokenName);

// 主题所在文件夹
const themeRoot = path.resolve(__dirname, "../packages/theme/src");

// 当前组件的src目录
const srcRoot = path.resolve(packageRoot, "src");

// 渲染模板
function render(tpath) {
    template = fs.readFileSync(tpath, { encoding: 'utf8' })
    return template
        .replaceAll("#name", brokenName)
        .replaceAll("$name", moduleName)
        .replaceAll("__name", originalName)
}

// 写入文件
function makeFile(fileroot, filename, resource) {
    if (!fs.existsSync(fileroot)) {
        fs.mkdirSync(fileroot)
    }
    const filepath = path.resolve(fileroot, filename);
    fs.writeFileSync(filepath, resource, { encoding: "utf8" });
    
    console.log("构建成功:已构建 " + chalk.underline.greenBright(filename) + " 路径： " + chalk.underline.yellowBright(filepath))
}


makeFile(packageRoot, "index.ts", render('./template/ts'))
makeFile(srcRoot, brokenName + ".vue", render('./template/vue'))
makeFile(srcRoot, brokenName + ".ts", render('./template/prop'))
makeFile(themeRoot, brokenName + ".scss", render('./template/scss'))



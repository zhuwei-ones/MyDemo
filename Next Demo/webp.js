class WebpPlugin {
  constructor(options = {}) {}

  apply(compiler) {
    const name = this.constructor.name;

    compiler.hooks.emit.tap(name, (compilation) => {
      console.log("compiler emit");
    });

    compiler.hooks.afterCompile.tap(name, (compilation) => {
      //   console.log("afterCompile");
      // 找出当前编译的上下文依赖并加入 PC 下的 plugin 目录
      //   const contextDependencies = [...compilation.contextDependencies].concat(
      //     plugins
      //   );
      //   contextDependencies.forEach((context) => {
      //     // 注意 compilation.contextDependencies 实际是 Set 实例，所以这里用 add 进行添加
      //     compilation.contextDependencies.add(context);
      //   });
    });

    compiler.hooks.watchRun.tapAsync(name, (compilation, callback) => {
      try {
        if (compilation.modifiedFiles) {
          const changedFiles = Array.from(
            compilation.modifiedFiles,
            (file) => `\n  ${file}`
          ).join("");
          console.log("===============================");
          console.log("FILES CHANGED:", changedFiles);
          console.log("===============================");
        }

        callback();

        return;

        // 这是最关键的地方，mtimes 能够给出哪个文件产生了变动以及变更时的时间戳
        const fileWatcher = compilation.watchFileSystem.watcher.mtimes;
        const changedFiles = [];

        Object.keys(fileWatcher).forEach((sourceFile) => {
          // 判断文件是否是属于 PC 目录下的，是则加入待复制列表

          console.log("sourceFile", sourceFile);
        });

        // 当有文件变更时，控制台输出对应变更的文件
        if (changedFiles.length) {
          console.log("同步成功: " + changedFiles.join("\n"));
        }
      } catch (e) {
        console.error(e);
      }
      callback();
    });

    compiler.hooks.done.tap(name, (stats) => {
      //   console.log("done");
    });
  }
}

module.exports = WebpPlugin;

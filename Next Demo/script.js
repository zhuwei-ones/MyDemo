module.exports = async function (context, commands) {
  // First you do what you need to do ...
  // then just add a field to the context
  context.myId = 15;

  console.log("执行脚本");
};

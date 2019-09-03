module.exports = async ctx => {
    ctx.body = `<h1>User: ${ctx.session.myTestMessage}</h1>`;
}
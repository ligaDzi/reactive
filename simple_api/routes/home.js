module.exports = async ctx => {
    ctx.session.myTestMessage = 'test message in session';
    
    ctx.body = `<h1>${ctx.session.myTestMessage}</h1>`;
}
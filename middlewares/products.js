function log (req, res, next) {
    console.log('Passando pelo middleware de log')
    next(); 
}

function validacao (req, res, next) {
    const newProduct = req.body
    if (newProduct.title.trim() === '') { 
    res.status(400).send('Erro: O campo título é obrigatório'); 
    return; 

} else if (newProduct.description.trim() === '') {
        res.status(400).send('Erro: O campo descrição é obrigatório');
        return; 
    }
    next();   
}

module.exports = {
    log:log,
    validacao: validacao, 
}
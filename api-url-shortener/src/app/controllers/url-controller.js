const service = require("../services/url-service")
const ValidationContract = require('../validators/validator');

exports.get = async (req, res, next) => {

  try {
    const urlFull = await service.getUrlRedirect(req.params.urlCode);
    if (urlFull == null) {
      res.status(404).send("Url não encontrada");
    }
    else {
      res.redirect(urlFull);
    }
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }

};

exports.post = async (req, res, next) => {

  let contract = new ValidationContract();
  contract.isRequired(req.body.urlFull, 'Url não pode ser nula');
  contract.isUrl(req.body.urlFull, 'Url inválida');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }
  else {

    try {
      const url = await service.generateUrlShort(req.body);
      res.status(201).send(url);

    } catch (e) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição'
      });
    }

  }

};





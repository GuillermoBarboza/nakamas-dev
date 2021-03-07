// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { ConsoleConnector } = require("../../packages/console-connector/src");
const { Nlp } = require("../../packages/nlp/src");
const { LangEn } = require("../../packages/lang-en/src");
const { fs } = require("../../packages/request/src");
const trainnlp = require("../../train-nlp");

export default async (req, res) => {
  const nlp = new Nlp({ languages: ["en"], threshold: 0.5 });
  nlp.container.register("fs", fs);
  nlp.use(LangEn);

  const connector = new ConsoleConnector();
  connector.onHear = async (parent, line) => {
    if (line.toLowerCase() === "quit") {
      connector.destroy();
      process.exit();
    } else {
      const result = await nlp.process(line);
      connector.say(result.answer);
    }
  };

  await trainnlp(nlp, fs);
  let responseFromBot = await nlp.process(req.query.input)

  res.status(200).json({responseFromBot});
};

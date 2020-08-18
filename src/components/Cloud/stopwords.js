const stopwords = {
  // https://github.com/cltk/cltk/blob/22fabfd4e26f677ecce30871af78561edefcaef6/cltk/stop/greek/stops.py
  αὐτὸς: true,
  αὐτός: true,
  γε: true,
  γὰρ: true,
  γάρ: true,
  "δ'": true,
  δαὶ: true,
  δαὶς: true,
  δαί: true,
  δαίς: true,
  διὰ: true,
  διά: true,
  δὲ: true,
  δέ: true,
  δὴ: true,
  δή: true,
  εἰ: true,
  εἰμὶ: true,
  εἰμί: true,
  εἰς: true,
  εἴμι: true,
  κατὰ: true,
  κατά: true,
  καὶ: true,
  καί: true,
  μετὰ: true,
  μετά: true,
  μὲν: true,
  μέν: true,
  μὴ: true,
  μή: true,
  οἱ: true,
  οὐ: true,
  οὐδεὶς: true,
  οὐδείς: true,
  οὐδὲ: true,
  οὐδέ: true,
  οὐκ: true,
  οὔτε: true,
  οὕτως: true,
  οὖν: true,
  οὗτος: true,
  παρὰ: true,
  παρά: true,
  περὶ: true,
  περί: true,
  πρὸς: true,
  πρός: true,
  σὸς: true,
  σός: true,
  σὺ: true,
  σύ: true,
  σύν: true,
  τε: true,
  τι: true,
  τις: true,
  τοιοῦτος: true,
  τοὶ: true,
  τοί: true,
  τοὺς: true,
  τούς: true,
  τοῦ: true,
  τὰ: true,
  τά: true,
  τὴν: true,
  τήν: true,
  τὶ: true,
  τὶς: true,
  τί: true,
  τίς: true,
  τὸ: true,
  τὸν: true,
  τό: true,
  τόν: true,
  τῆς: true,
  τῇ: true,
  τῶν: true,
  τῷ: true,
  "ἀλλ'": true,
  ἀλλὰ: true,
  ἀλλά: true,
  ἀπὸ: true,
  ἀπό: true,
  ἂν: true,
  ἄλλος: true,
  ἄν: true,
  ἄρα: true,
  ἐγὼ: true,
  ἐγώ: true,
  ἐκ: true,
  ἐξ: true,
  ἐμὸς: true,
  ἐμός: true,
  ἐν: true,
  ἐπὶ: true,
  ἐπί: true,
  ἐὰν: true,
  ἐάν: true,
  ἑαυτοῦ: true,
  ἔτι: true,
  ἡ: true,
  ἢ: true,
  ἤ: true,
  ὁ: true,
  ὃδε: true,
  ὃς: true,
  ὅδε: true,
  ὅς: true,
  ὅστις: true,
  ὅτι: true,
  ὑμὸς: true,
  ὑμός: true,
  ὑπὲρ: true,
  ὑπέρ: true,
  ὑπὸ: true,
  ὑπό: true,
  ὡς: true,
  ὥστε: true,
  ὦ: true,
  ξύν: true,
  ξὺν: true,
  σὺν: true,
  τοῖς: true,
  τᾶς: true,
  // https://github.com/cltk/cltk/blob/22fabfd4e26f677ecce30871af78561edefcaef6/cltk/stop/latin.py
  ab: true,
  ac: true,
  ad: true,
  adhic: true,
  aliqui: true,
  aliquis: true,
  an: true,
  ante: true,
  apud: true,
  at: true,
  atque: true,
  aut: true,
  autem: true,
  cum: true,
  cur: true,
  de: true,
  deinde: true,
  dum: true,
  ego: true,
  enim: true,
  ergo: true,
  es: true,
  est: true,
  et: true,
  etiam: true,
  etsi: true,
  ex: true,
  fio: true,
  haud: true,
  hic: true,
  iam: true,
  idem: true,
  igitur: true,
  ille: true,
  in: true,
  infra: true,
  inter: true,
  interim: true,
  ipse: true,
  is: true,
  ita: true,
  magis: true,
  modo: true,
  mox: true,
  nam: true,
  ne: true,
  nec: true,
  necque: true,
  neque: true,
  nisi: true,
  non: true,
  nos: true,
  o: true,
  ob: true,
  per: true,
  possum: true,
  post: true,
  pro: true,
  quae: true,
  quam: true,
  quare: true,
  qui: true,
  quia: true,
  quicumque: true,
  quidem: true,
  quilibet: true,
  quis: true,
  quisnam: true,
  quisquam: true,
  quisque: true,
  quisquis: true,
  quo: true,
  quoniam: true,
  sed: true,
  si: true,
  sic: true,
  sive: true,
  sub: true,
  sui: true,
  sum: true,
  super: true,
  suus: true,
  tam: true,
  tamen: true,
  trans: true,
  tu: true,
  tum: true,
  ubi: true,
  uel: true,
  uero: true,
  unus: true,
  ut: true,
  // Custom
  punc: true,
  '-que': true,
  jam: true,
};

const isStopword = (word) => (
  !!stopwords[word]
);

export {
  stopwords,
  isStopword,
};

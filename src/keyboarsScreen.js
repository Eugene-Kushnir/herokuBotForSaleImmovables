 const kb = require('./keyboards')

module.exports = {
    home: [
        [kb.home.buy, kb.home.sell],
        [kb.home.notary]
    ],
    buy: [
        [kb.buy.flat, kb.buy.house],
        [kb.buy.land, kb.buy.commercy],
        [kb.back]
    ],
        flat: [
            [kb.flat.one, kb.flat.two],
            [kb.flat.three, kb.flat.four],
            [kb.back]
        ],
    sell: [
        [kb.sell.flat, kb.sell.house],
        [kb.sell.land, kb.sell.commercy],
        [kb.back]
    ],
    notary: [
        [kb.notary.consulty, kb.notary.zapis],
        [kb.back]
    ]
}
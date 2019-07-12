// stock_prices = [10, 7, 5, 8, 11, 9]
// get_max_profit(stock_prices)
// Returns 6 (buying for $5 and selling for $11)

get_max_profit(stock_prices => {

    let priceObject = {}
    let difference = 0
    
    stock_prices.forEach(buyPrice => {
        stock_prices.forEach(sellPrice => {
            if(sellPrice > buyPrice && (sellPrice - buyPrice) > difference){
                difference = sellPrice - buyPrice
            }
        })
    })

    return difference
})
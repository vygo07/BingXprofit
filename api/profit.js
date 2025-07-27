export default async function handler(req, res) {
    const { apiKey, secretKey } = req.body;

    // ZDE BY BĚŽELO VOLÁNÍ BINGX API
    // Simulujeme zisk
    const fakeProfit = {
        dailyProfit: "52.37 USDT",
        last10Days: [...Array(10)].map((_, i) => ({ day: i + 1, profit: (Math.random() * 100).toFixed(2) })),
        totalMonth: "1463.87 USDT",
        winrate: "63%",
    };

    res.status(200).json(fakeProfit);
}

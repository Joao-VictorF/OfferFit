interface IServerWidgetData {
    totalOffers: number
    totalRepeatersExp: number
    totalRepeatersCtrl: number
    totalCLVExp: number
    totalCLVCtrl: number
}

interface ChartCLVData {
    label: string
    expSum: number
    ctrlSum: number
}

export {
    IServerWidgetData,
    ChartCLVData
}

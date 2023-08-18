

const consultar = document.querySelector('.consultar')


consultar.addEventListener('click', e => {
    e.preventDefault()
    singleList()
})

async function singleList() {

    let descricao = document.querySelector('#descricao')
    let ean = document.querySelector('#ean') 

    let ncm = document.querySelector('#ncm')
    let cest = document.querySelector('#cest')

    let modBC = document.querySelector('#modBC')
    let modBCST = document.querySelector('#modBCST')

    let csosn = document.querySelector('#csosn')    
    let cst_icms = document.querySelector('#icmsCST')

    let cfopCompra = document.querySelector('#cfopCompra')
    let cfopVenda = document.querySelector('#cfopVenda')

    let cfopCompraFora = document.querySelector('#cfopCompraFora')
    let cfopVendaFora = document.querySelector('#cfopVendaFora')

    let pIcms = document.querySelector('#pIcms')
    let pIcmsSt = document.querySelector('#pIcmsSt')

    let pIcmsPdv = document.querySelector('#pIcmsPdv')
    let pRedBc = document.querySelector('#pRedBc')

    let pRedBCST = document.querySelector('#pRedBCST')
    let pMVAST = document.querySelector('#pMVAST')

    let vPautaST = document.querySelector('#vPautaST')

    let cstIpiEnt = document.querySelector('#cstIpiEnt')
    let cstIpiSai = document.querySelector('#cstIpiSai')

    let pIpiEnt = document.querySelector('#pIpiEnt')
    let pIpiSai = document.querySelector('#pIpiSai')
    
    let pisCofEnt = document.querySelector('#pisCofEnt')
    let pisCofSai = document.querySelector('#pisCofSai')

    let natIsen = document.querySelector('#natIsen')
    let pFCP = document.querySelector('#pFCP')

    let cBenef = document.querySelector('#cBenef')
    let pDifer = document.querySelector('#pDifer')


  

    const url = "https://infotechapi.azurewebsites.net/tributario/consulta-simples"
    const bodyData = {
        "cabecalho": {
            "documento": "32905822000108",
            "uf": "SP",
            "crt": 0,
            "consulta": 0,
            "regimeEspecial": true
        },

        "produtos": [
            {
                "ean": ean.value,
                "ncm": ncm.value,
                "cest": cest.value,
                "descricao": descricao.value,

                "imposto": {
                    "cfopCompra": cfopCompra.value,
                    "cfopVenda": cfopVenda.value,
                    "cfopCompraFora": cfopCompraFora.value,
                    "cfopVendaFora": cfopVendaFora.value,
                    "modBC": modBC.value,
                    "modBCST":modBCST.value,
                    "csosn": csosn.value,
                    "icmsCST": cst_icms.value,
                    "pIcms": pIcms.value,
                    "pIcmsSt": pIcmsSt.value,
                    "pIcmsPdv": pIcmsPdv.value,
                    "pRedBc": pRedBc.value,
                    "pRedBCST": pRedBCST.value,
                    "pMVAST": pMVAST.value,
                    "vPautaST": vPautaST.value,
                    "cstIpiEnt": cstIpiEnt.value,
                    "cstIpiSai": cstIpiSai.value,
                    "pIpiEnt": pIpiEnt.value,
                    "pIpiSai": pIpiSai.value,
                    "pisCofEnt": pisCofEnt.value,
                    "pisCofSai": pisCofSai.value,
                    "natIsen": natIsen.value,
                    "pFCP": pFCP.value,
                    "cBenef": cBenef.value,
                    "pDifer": pDifer.value
                }
            }
        ]

    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Login": "32905822000108",
            "Senha": "4806f862-7411-4277-803f-ee04a827b029"
        },
        body: JSON.stringify(bodyData),
    });

    const data = await response.json()
    
    // retorno dados da api 
    descricao.value = data.produtos[0].descricao
    ean.value = data.produtos[0].ean

    ncm.value = data.produtos[0].ncm
    cest.value = data.produtos[0].cest

    modBC.value = data.produtos[0].imposto.modBC
    modBCST.value = data.produtos[0].imposto.modBCST

    csosn.value = data.produtos[0].imposto.csosn   
    cst_icms.value = data.produtos[0].imposto.icmsCST

    cfopCompra.value = data.produtos[0].imposto.cfopCompra
    cfopVenda.value = data.produtos[0].imposto.cfopVenda

    

    cfopCompraFora.value = data.produtos[0].imposto.cfopCompraFora
    cfopVendaFora.value = data.produtos[0].imposto.cfopVendaFora

    pIcms.value = data.produtos[0].imposto.pIcms
    pIcmsSt.value = data.produtos[0].imposto.pIcmsSt

    pIcmsPdv.value = data.produtos[0].imposto.pIcmsPdv
    pRedBc.value = data.produtos[0].imposto.pRedBc

    pRedBCST.value = data.produtos[0].imposto.pRedBCST
    pMVAST.value = data.produtos[0].imposto.pMVAST

    vPautaST.value = data.produtos[0].imposto.vPautaST

    cstIpiEnt.value = data.produtos[0].imposto.cstIpiEnt
    cstIpiSai.value = data.produtos[0].imposto.cstIpiSai

    pIpiEnt.value = data.produtos[0].imposto.pIpiEnt
    pIpiSai.value = data.produtos[0].imposto.pIpiSai
    natIsen.value = data.produtos[0].imposto.natIsen

    pisCofEnt.value = data.produtos[0].imposto.pisCofEnt
    pisCofSai.value = data.produtos[0].imposto.pisCofSai
    
    pFCP.value = data.produtos[0].imposto.pFCP
    cBenef.value = data.produtos[0].imposto.cBenef

    pDifer.value = data.produtos[0].imposto.pDifer
    
 
    console.log('data: ', data);

}














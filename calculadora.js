function calcularComissao(venda, meta) {
    let tx = 0;
    const sm = meta + (meta * 0.20);

    if (venda < meta) {
        tx = 0.0333;
    } else if (venda < sm) {
        tx = 0.0375;
    } else {
        tx = 0.0416;
    }

    const comissao = venda * tx;
    return comissao;
}

function calcularINSS(proventos) {
    let inss = 0;

    if (proventos <= 1412.00) {
        inss = proventos * 0.075;
    } else if (proventos <= 2666.68) {
        inss = (proventos * 0.09) - 21.18;
    } else if (proventos <= 4000.03) {
        inss = (proventos * 0.12) - 101.18;
    } else {
        inss = (proventos * 0.14) - 181.18;
    }

    return inss;
}

function calcularIRRF(proventos) {
    let irrf = 0;

    if (proventos <= 2259.20) {
        irrf = 0;
    } else if (proventos <= 2826.65) {
        irrf = (proventos * 0.075) - 169.44;
    } else if (proventos <= 3751.05) {
        irrf = (proventos * 0.15) - 381.44;
    } else if (proventos <= 4664.68) {
        irrf = (proventos * 0.225) - 662.77;
    } else {
        irrf = (proventos * 0.275) - 896.00;
    }

    return irrf;
}

function calcularSalario(venda, meta, diasTrabalhados, folgas) {
    console.log('Vamos aos cálculos...');

    const comissao = calcularComissao(venda, meta);
    const dsr = (comissao / diasTrabalhados) * folgas;
    const proventos = comissao + dsr;

    const inss = calcularINSS(proventos);
    const irrf = calcularIRRF(proventos);
    const descontos = inss + irrf;

    const salario = proventos - descontos;

    console.log(`Sua comissão foi: R$${comissao.toFixed(2)}`);
    console.log(`DSR: R$${dsr.toFixed(2)}`);
    console.log(`Salário bruto: R$${proventos.toFixed(2)}`);
    console.log(`INSS: R$${inss.toFixed(2)}`);
    console.log(`IRRF: R$${irrf.toFixed(2)}`);
    console.log(`Descontos totais: R$${descontos.toFixed(2)}`);
    console.log(`Seu salário este mês será R$${salario.toFixed(2)}`);
}

const venda = parseFloat(prompt('Digite o total vendido no mês: '));
const meta = parseFloat(prompt('Digite a meta do mês: '));
const diasTrabalhados = parseInt(prompt('Digite o número de dias trabalhados no mês: '));
const folga = parseInt(prompt('Digite o número de folgas do mês: '));

calcularSalario(venda, meta, diasTrabalhados, folga);

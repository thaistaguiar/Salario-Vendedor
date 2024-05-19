def calcular_comissao(venda, meta):
    tx = 0
    sm = meta + (meta*0.20)

    if venda < meta:
        tx = 0.0333
    elif venda < sm:
        tx = 0.0375
    else:
        tx = 0.0416
    
    comissao = venda * tx
    return comissao

def calcular_inss(proventos):
    if proventos <= 1412.00:
        inss = proventos*0.075
    elif proventos <= 2666.68:
        inss = (proventos*0.09)-21.18
    elif proventos <= 4000.03:
        inss = (proventos*0.12)-101.18
    else:
        inss = (proventos*0.14)-181.18
    
    return inss

def calcular_irrf(proventos):
    if proventos <= 2259.20:
        irrf = 0
    elif proventos <= 2826.65:
        irrf = (proventos*0.075)-169.44
    elif proventos <= 3751.05:
        irrf = (proventos*0.15)-381.44
    elif proventos <= 4664.68:
        irrf = (proventos*0.225)-662.77
    else:
        irrf = (proventos*0.275)-896.00

    return irrf

def calcular_salario(venda, meta, dias_trabalhados, folgas):
    print('Vamos aos cálculos...')
    
    comissao = calcular_comissao(venda, meta)
    dsr = (comissao / dias_trabalhados) * folgas
    proventos = comissao + dsr
    
    inss = calcular_inss(proventos)
    irrf = calcular_irrf(proventos)
    descontos = inss + irrf
    
    salario = proventos - descontos
    
    print('Sua comissão foi: R${:.2f}'.format(comissao))
    print('DSR: R${:.2f}'.format(dsr))
    print('Salário bruto: R${:.2f}'.format(proventos))
    print('INSS: R${:.2f}'.format(inss))
    print('IRRF: R${:.2f}'.format(irrf))
    print('Descontos totais: R${:.2f}'.format(descontos))
    print('Seu salário este mês será R${:.2f}'.format(salario))

venda = float(input('Digite o total vendido no mês: '))
meta = float(input('Digite a meta do mês: '))
dias_trabalhados = int(input('Digite o número de dias trabalhados no mês: '))
folga = int(input('Digite o número de folgas do mês: '))

calcular_salario(venda, meta, dias_trabalhados, folga)
